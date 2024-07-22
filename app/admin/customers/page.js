'use client';

import { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Card, CardBody, Typography, Textarea } from '@material-tailwind/react';
import Layout from '../components/Layout';

const sampleData = [
  { id: 1, name: 'mic', email: 'mic@example.com', phone: '0123456789' },
  { id: 2, name: 'kien', email: 'kien@example.com', phone: '0987654321' },
];

const CustomersPage = () => {
  const [items, setItems] = useState(sampleData);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentItem({ id: null, name: '', email: '', phone: '' });
    setOpenDialog(true);
  };

  const handleEditClick = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
    setOpenDialog(true);
  };

  const handleDeleteClick = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const handleSave = () => {
    if (isEditing) {
      setItems(items.map(item => (item.id === currentItem.id ? currentItem : item)));
    } else {
      setItems([...items, { ...currentItem, id: items.length + 1 }]);
    }
    setOpenDialog(false);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h1">Quản lý khách hàng</Typography>
          <Button color="green" onClick={handleAddClick}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Thêm khách hàng
          </Button>
        </div>
        <Card>
          <CardBody>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-2">Tên khách hàng</th>
                  <th className="w-1/4 px-4 py-2">Email</th>
                  <th className="w-1/4 px-4 py-2">Số điện thoại</th>
                  <th className="px-4 py-2">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.email}</td>
                    <td className="border px-4 py-2">{item.phone}</td>
                    <td className="border px-4 py-2 flex space-x-2">
                      <Button color="blue" size="sm" onClick={() => handleEditClick(item)}>
                        <PencilIcon className="h-5 w-5" />
                      </Button>
                      <Button color="red" size="sm" onClick={() => handleDeleteClick(item.id)}>
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
          <DialogHeader>{isEditing ? 'Chỉnh sửa khách hàng' : 'Thêm khách hàng'}</DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="text"
                label="Tên khách hàng"
                value={currentItem?.name}
                onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
              />
              <Input
                type="email"
                label="Email"
                value={currentItem?.email}
                onChange={(e) => setCurrentItem({ ...currentItem, email: e.target.value })}
              />
              <Input
                type="text"
                label="Số điện thoại"
                value={currentItem?.phone}
                onChange={(e) => setCurrentItem({ ...currentItem, phone: e.target.value })}
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

export default CustomersPage;
