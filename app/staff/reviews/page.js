'use client';

import { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Card, CardBody, Typography, Textarea } from '@material-tailwind/react';
import Layout from '../components/Layout';

const sampleData = [
  { id: 1, customer: 'kien', review: 'Great service!', rating: 5 },
  { id: 2, customer: 'mic', review: 'Good experience.', rating: 4 },
];

const ReviewsPage = () => {
  const [reviews, setReviews] = useState(sampleData);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentReview, setCurrentReview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentReview({ id: null, customer: '', review: '', rating: '' });
    setOpenDialog(true);
  };

  const handleEditClick = (review) => {
    setIsEditing(true);
    setCurrentReview(review);
    setOpenDialog(true);
  };

  const handleDeleteClick = (reviewId) => {
    setReviews(reviews.filter(review => review.id !== reviewId));
  };

  const handleSave = () => {
    if (isEditing) {
      setReviews(reviews.map(r => (r.id === currentReview.id ? currentReview : r)));
    } else {
      setCurrentReview(prev => ({ ...prev, id: reviews.length + 1 }));
      setReviews([...reviews, { ...currentReview, id: reviews.length + 1 }]);
    }
    setOpenDialog(false);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h1">Quản lý đánh giá và rate</Typography>
          <Button color="green" onClick={handleAddClick}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Thêm đánh giá
          </Button>
        </div>
        <Card>
          <CardBody>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-2">Khách hàng</th>
                  <th className="w-1/2 px-4 py-2">Đánh giá</th>
                  <th className="w-1/4 px-4 py-2">Rating</th>
                  <th className="px-4 py-2">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id}>
                    <td className="border px-4 py-2">{review.customer}</td>
                    <td className="border px-4 py-2">{review.review}</td>
                    <td className="border px-4 py-2">{review.rating}</td>
                    <td className="border px-4 py-2 flex space-x-2">
                      <Button color="blue" size="sm" onClick={() => handleEditClick(review)}>
                        <PencilIcon className="h-5 w-5" />
                      </Button>
                      <Button color="red" size="sm" onClick={() => handleDeleteClick(review.id)}>
                        <TrashIcon className="h-5 w-5" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>

        <Dialog open={openDialog} handler={setOpenDialog}>
          <DialogHeader>{isEditing ? 'Chỉnh sửa đánh giá' : 'Thêm đánh giá'}</DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="text"
                label="Khách hàng"
                value={currentReview?.customer}
                onChange={(e) => setCurrentReview({ ...currentReview, customer: e.target.value })}
              />
              <Textarea
                label="Đánh giá"
                value={currentReview?.review}
                onChange={(e) => setCurrentReview({ ...currentReview, review: e.target.value })}
              />
              <Input
                type="number"
                label="Rating"
                value={currentReview?.rating}
                onChange={(e) => setCurrentReview({ ...currentReview, rating: e.target.value })}
                min={1}
                max={5}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="red" onClick={() => setOpenDialog(false)}>
              Hủy bỏ
            </Button>
            <Button variant="gradient" color="green" onClick={handleSave}>
              Lưu
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </Layout>
  );
};

export default ReviewsPage;

