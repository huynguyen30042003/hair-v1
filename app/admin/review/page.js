"use client";

import { useState, useEffect } from "react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Layout from "../components/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = "http://localhost:5000/api";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [currentReview, setCurrentReview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(5);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(`${BASE_URL}/reviews`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        toast.error("Error fetching reviews.");
      }
    };

    fetchReviews();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredReviews = reviews.filter((review) =>
    review.comment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentReview({ rating: 1, comment: "", status: "pending" });
    setOpenDialog(true);
  };

  const handleEditClick = (review) => {
    setIsEditing(true);
    setCurrentReview(review);
    setOpenDialog(true);
  };

  const handleDeleteClick = async (reviewId) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`${BASE_URL}/reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReviews(reviews.filter((review) => review._id !== reviewId));
      toast.success("Review deleted successfully.");
    } catch (error) {
      console.error("Error deleting review:", error);
      toast.error("Error deleting review.");
    }
  };

  const handleSave = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      if (isEditing) {
        await axios.put(
          `${BASE_URL}/reviews/${currentReview._id}`,
          currentReview,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setReviews(
          reviews.map((review) =>
            review._id === currentReview._id ? currentReview : review
          )
        );
        toast.success("Review updated successfully.");
      } else {
        const response = await axios.post(
          `${BASE_URL}/reviews`,
          currentReview,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setReviews([...reviews, response.data]);
        toast.success("Review added successfully.");
      }
      setOpenDialog(false);
    } catch (error) {
      console.error("Error saving review:", error);
      toast.error("Error saving review.");
    }
  };

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h1">Review Management</Typography>
          <Button color="green" onClick={handleAddClick}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Review
          </Button>
        </div>
        <div className="flex justify-center mb-4">
          <div className="flex space-x-2 items-center">
            <Input
              type="text"
              placeholder="Search by comment"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full lg:w-64"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Card className="w-full lg:w-3/4">
            <CardBody>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="w-1/4 px-4 py-2">Rating</th>
                    <th className="w-1/2 px-4 py-2">Comment</th>
                    {/* <th className="w-1/4 px-4 py-2">Status</th> */}
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentReviews.map((review) => (
                    <tr key={review._id}>
                      <td className="border px-4 py-2">{review.rating}</td>
                      <td className="border px-4 py-2">{review.comment}</td>
                      {/* <td className="border px-4 py-2">{review.status}</td> */}
                      <td className="border px-4 py-2 flex space-x-2">
                        <Button
                          color="blue"
                          size="sm"
                          onClick={() => handleEditClick(review)}
                        >
                          <PencilIcon className="h-5 w-5" />
                        </Button>
                        <Button
                          color="red"
                          size="sm"
                          onClick={() => handleDeleteClick(review._id)}
                        >
                          <TrashIcon className="h-5 w-5" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center mt-4">
                <nav>
                  <ul className="inline-flex items-center -space-x-px">
                    {[
                      ...Array(
                        Math.ceil(filteredReviews.length / reviewsPerPage)
                      ).keys(),
                    ].map((number) => (
                      <li key={number + 1}>
                        <Button
                          className={`py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === number + 1 ? "bg-gray-200" : ""
                            }`}
                          onClick={() => paginate(number + 1)}
                        >
                          {number + 1}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </CardBody>
          </Card>
        </div>

        <Dialog open={openDialog} handler={setOpenDialog}>
          <DialogHeader>{isEditing ? "Edit Review" : "Add Review"}</DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="number"
                label="Rating"
                value={currentReview?.rating || ""}
                onChange={(e) =>
                  setCurrentReview({ ...currentReview, rating: e.target.value })
                }
                className="w-full max-w-xs"
              />
              <Input
                type="text"
                label="Comment"
                value={currentReview?.comment || ""}
                onChange={(e) =>
                  setCurrentReview({ ...currentReview, comment: e.target.value })
                }
                className="w-full max-w-xs"
              />
              {/* <Input
                type="text"
                label="Status"
                value={currentReview?.status || ""}
                onChange={(e) =>
                  setCurrentReview({ ...currentReview, status: e.target.value })
                }
                className="w-full max-w-xs"
              /> */}
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="red" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button variant="gradient" color="green" onClick={handleSave}>
              Save
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default ReviewPage;
