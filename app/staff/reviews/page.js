"use client";
import { useState, useEffect } from "react";
import { getReviews, deleteReview, updateReview } from "../../../api/route";
import { useSession } from "next-auth/react";
import { PencilIcon, TrashIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { Button, Textarea } from "@material-tailwind/react";

const ReviewsPage = () => {
  const { data: session } = useSession();
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);
  const [reply, setReply] = useState("");

  useEffect(() => {
    if (session) {
      const fetchReviews = async () => {
        const reviewsData = await getReviews(session.token);
        setReviews(reviewsData);
      };
      fetchReviews();
    }
  }, [session]);

  const handleDelete = async (id) => {
    await deleteReview(id, session.token);
    const reviewsData = await getReviews(session.token);
    setReviews(reviewsData);
  };

  const handleEdit = (review) => {
    setEditingReview(review.id);
    setReply(review.reply || "");
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleUpdate = async () => {
    await updateReview(editingReview, { reply }, session.token);
    setEditingReview(null);
    const reviewsData = await getReviews(session.token);
    setReviews(reviewsData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quản lý đánh giá</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Danh sách đánh giá</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review.id} className="flex flex-col p-4 border-b mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{review.user.name}</p>
                  <p>{review.comment}</p>
                </div>
                <div className="flex items-center">
                  <PencilIcon
                    className="h-5 w-5 text-blue-500 mr-2 cursor-pointer"
                    onClick={() => handleEdit(review)}
                  />
                  <TrashIcon
                    className="h-5 w-5 text-red-500 cursor-pointer"
                    onClick={() => handleDelete(review.id)}
                  />
                </div>
              </div>
              {editingReview === review.id && (
                <div className="mt-4">
                  <Textarea
                    label="Phản hồi"
                    value={reply}
                    onChange={handleReplyChange}
                    className="mb-2"
                  />
                  <Button onClick={handleUpdate} className="mr-2">
                    Cập nhật
                  </Button>
                  <Button onClick={() => setEditingReview(null)} color="red">
                    Hủy
                  </Button>
                </div>
              )}
              {review.reply && !editingReview && (
                <div className="mt-2 bg-gray-100 p-2 rounded">
                  <p className="font-semibold">Phản hồi của bạn:</p>
                  <p>{review.reply}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewsPage;
