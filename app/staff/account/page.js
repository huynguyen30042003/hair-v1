'use client';

import { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Card, CardBody, Typography } from '@material-tailwind/react';
import Layout from '../components/Layout';

const sampleData = [
  { id: 1, name: 'kien', email: 'kien@example.com', phone: '0123456789' },
  { id: 2, name: 'mic', email: 'mic@example.com', phone: '0987654321' },
];

const AccountPage = () => {
  const [accounts, setAccounts] = useState(sampleData);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentAccount({ id: null, name: '', email: '', phone: '' });
    setOpenDialog(true);
  };

  const handleEditClick = (account) => {
    setIsEditing(true);
    setCurrentAccount(account);
    setOpenDialog(true);
  };

  const handleDeleteClick = (accountId) => {
    setAccounts(accounts.filter(account => account.id !== accountId));
  };

  const handleSave = () => {
    if (isEditing) {
      setAccounts(accounts.map(acc => (acc.id === currentAccount.id ? currentAccount : acc)));
    } else {
      setCurrentAccount(prev => ({ ...prev, id: accounts.length + 1 }));
      setAccounts([...accounts, { ...currentAccount, id: accounts.length + 1 }]);
    }
    setOpenDialog(false);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h1">Account Management</Typography>
          <Button color="green" onClick={handleAddClick}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Account
          </Button>
        </div>
        <Card>
          <CardBody>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="w-1/3 px-4 py-2">Name</th>
                  <th className="w-1/3 px-4 py-2">Email</th>
                  <th className="w-1/3 px-4 py-2">Phone number</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account) => (
                  <tr key={account.id}>
                    <td className="border px-4 py-2">{account.name}</td>
                    <td className="border px-4 py-2">{account.email}</td>
                    <td className="border px-4 py-2">{account.phone}</td>
                    <td className="border px-4 py-2 flex space-x-2">
                      <Button color="blue" size="sm" onClick={() => handleEditClick(account)}>
                        <PencilIcon className="h-5 w-5" />
                      </Button>
                      <Button color="red" size="sm" onClick={() => handleDeleteClick(account.id)}>
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
          <DialogHeader>{isEditing ? 'Edit Account' : 'Add Account'}</DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="text"
                label="Name"
                value={currentAccount?.name}
                onChange={(e) => setCurrentAccount({ ...currentAccount, name: e.target.value })}
              />
              <Input
                type="email"
                label="Email"
                value={currentAccount?.email}
                onChange={(e) => setCurrentAccount({ ...currentAccount, email: e.target.value })}
              />
              <Input
                type="text"
                label="Phone number"
                value={currentAccount?.phone}
                onChange={(e) => setCurrentAccount({ ...currentAccount, phone: e.target.value })}
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

export default AccountPage;
