'use client';

import { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Card, CardBody, Typography, Textarea } from '@material-tailwind/react';
import Layout from '../components/Layout';

const sampleData = [
  { id: 1, name: 'Haircut', category: 'Service', description: 'Basic haircut', price: 15 },
  { id: 2, name: 'Shampoo', category: 'Product', description: 'Shampoo for all hair types', price: 10 },
];

const ServicesPage = () => {
  const [services, setServices] = useState(sampleData);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentService({ id: null, name: '', category: '', description: '', price: '' });
    setOpenDialog(true);
  };

  const handleEditClick = (service) => {
    setIsEditing(true);
    setCurrentService(service);
    setOpenDialog(true);
  };

  const handleDeleteClick = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId));
  };

  const handleSave = () => {
    if (isEditing) {
      setServices(services.map(service => (service.id === currentService.id ? currentService : service)));
    } else {
      setServices([...services, { ...currentService, id: services.length + 1 }]);
    }
    setOpenDialog(false);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h1">Services & Product Management</Typography>
          <Button color="green" onClick={handleAddClick}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Service/product
          </Button>
        </div>
        <Card>
          <CardBody>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-2">Name</th>
                  <th className="w-1/4 px-4 py-2">Type</th>
                  <th className="w-1/2 px-4 py-2">Description</th>
                  <th className="w-1/4 px-4 py-2">Price</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id}>
                    <td className="border px-4 py-2">{service.name}</td>
                    <td className="border px-4 py-2">{service.category}</td>
                    <td className="border px-4 py-2">{service.description}</td>
                    <td className="border px-4 py-2">{service.price}</td>
                    <td className="border px-4 py-2 flex space-x-2">
                      <Button color="blue" size="sm" onClick={() => handleEditClick(service)}>
                        <PencilIcon className="h-5 w-5" />
                      </Button>
                      <Button color="red" size="sm" onClick={() => handleDeleteClick(service.id)}>
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
          <DialogHeader>{isEditing ? 'Edit Service/product' : 'Add Service/product'}</DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="text"
                label="Name"
                value={currentService?.name}
                onChange={(e) => setCurrentService({ ...currentService, name: e.target.value })}
              />
              <Input
                type="text"
                label="Type"
                value={currentService?.category}
                onChange={(e) => setCurrentService({ ...currentService, category: e.target.value })}
              />
              <Textarea
                label="Description"
                value={currentService?.description}
                onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
              />
              <Input
                type="number"
                label="Price"
                value={currentService?.price}
                onChange={(e) => setCurrentService({ ...currentService, price: e.target.value })}
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

export default ServicesPage;
