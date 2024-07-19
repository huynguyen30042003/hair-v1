'use client';

import { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Card, CardBody, Typography, Textarea } from '@material-tailwind/react';
import Layout from '../components/Layout';

const sampleData = [
  { id: 1, name: 'Kien', position: 'Admin', email: 'kien@example.com' },
  { id: 2, name: 'Mic', position: 'Staff', email: 'mic@example.com' },
];

const EmployeesPage = () => {
  const [items, setItems] = useState(sampleData);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentItem({ id: null, name: '', position: '', email: '' });
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
          <Typography variant="h1">Staff Management</Typography>
          <Button color="green" onClick={handleAddClick}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Staff
          </Button>
        </div>
        <Card>
          <CardBody>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-2">Name of staff</th>
                  <th className="w-1/4 px-4 py-2">position</th>
                  <th className="w-1/4 px-4 py-2">Email</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.position}</td>
                    <td className="border px-4 py-2">{item.email}</td>
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
          <DialogHeader>{isEditing ? 'Edit staff' : 'Add staff'}</DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="text"
                label="Name staff"
                value={currentItem?.name}
                onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
              />
              <Input
                type="text"
                label="Position"
                value={currentItem?.position}
                onChange={(e) => setCurrentItem({ ...currentItem, position: e.target.value })}
              />
              <Input
                type="email"
                label="Email"
                value={currentItem?.email}
                onChange={(e) => setCurrentItem({ ...currentItem, email: e.target.value })}
              />
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
    </Layout>
  );
};

export default EmployeesPage;
