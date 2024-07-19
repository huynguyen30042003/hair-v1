'use client';

import { useState } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Card, CardBody, Typography, Textarea, Select, Option } from '@material-tailwind/react';
import Layout from '../components/Layout';

const sampleData = {
  Service: [
    { id: 1, name: 'Haircut', category: 'Service', description: 'Basic haircut', price: 15 },
    { id: 2, name: 'Shampoo', category: 'Service', description: 'Shampoo for all hair types', price: 10 },
  ],
  Product: [
    { id: 3, name: 'Conditioner', category: 'Product', description: 'Conditioner for all hair types', price: 12 },
    { id: 4, name: 'Hair Gel', category: 'Product', description: 'Strong hold hair gel', price: 8 },
  ],
  Account: [
    { id: 5, name: 'kien', category: 'Account', description: 'Admin account', price: '' },
    { id: 6, name: 'mic', category: 'Account', description: 'User account', price: '' },
  ],
  Review: [
    { id: 7, name: 'Great Service', category: 'Review', description: 'Very satisfied with the service', price: '' },
    { id: 8, name: 'Average Product', category: 'Review', description: 'The product is okay', price: '' },
  ],
  Appointment: [
    { id: 9, name: 'Meeting with John', category: 'Appointment', description: 'Discuss project details', price: '' },
    { id: 10, name: 'Consultation with Jane', category: 'Appointment', description: 'Hair treatment consultation', price: '' },
  ],
};

const SearchPage = () => {
  const [items, setItems] = useState(sampleData.Service);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('Service');

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
    }
    setOpenDialog(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (value) => {
    setFilterCategory(value);
    setItems(sampleData[value]);
  };

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h1">Chức năng tìm kiếm</Typography>
        </div>
        <div className="flex justify-between items-center mb-4">
          <Input
            type="text"
            placeholder="Tìm kiếm..."
            value={searchQuery}
            onChange={handleSearch}
            className="mr-4"
          />
          <Select label="Lọc theo loại" value={filterCategory} onChange={handleFilterChange}>
            <Option value="Service">Dịch vụ</Option>
            <Option value="Product">Sản phẩm</Option>
            <Option value="Account">Tài khoản</Option>
            <Option value="Review">Đánh giá</Option>
            <Option value="Appointment">Lịch hẹn</Option>
          </Select>
        </div>
        <Card>
          <CardBody>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-2">Tên</th>
                  <th className="w-1/4 px-4 py-2">Loại</th>
                  <th className="w-1/2 px-4 py-2">Mô tả</th>
                  <th className="w-1/4 px-4 py-2">Giá</th>
                  <th className="px-4 py-2">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.category}</td>
                    <td className="border px-4 py-2">{item.description}</td>
                    <td className="border px-4 py-2">{item.price}</td>
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
          <DialogHeader>{isEditing ? 'Chỉnh sửa mục' : 'Thêm mục'}</DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="text"
                label="Tên"
                value={currentItem?.name}
                onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
              />
              <Input
                type="text"
                label="Loại"
                value={currentItem?.category}
                onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}
              />
              <Textarea
                label="Mô tả"
                value={currentItem?.description}
                onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
              />
              <Input
                type="number"
                label="Giá"
                value={currentItem?.price}
                onChange={(e) => setCurrentItem({ ...currentItem, price: e.target.value })}
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

export default SearchPage;
