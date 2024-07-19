'use client';

import { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon, CheckIcon } from '@heroicons/react/24/outline';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Card, CardBody, Typography } from '@material-tailwind/react';
import Layout from '../components/Layout';

const sampleData = [
  { id: 1, customer: 'kien', date: '2023-07-20', time: '10:00 AM', status: 'Confirmed' },
  { id: 2, customer: 'mic', date: '2023-07-21', time: '02:00 PM', status: 'Pending' },
];

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState(sampleData);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentAppointment({ id: null, customer: '', date: '', time: '', status: 'Pending' });
    setOpenDialog(true);
  };

  const handleEditClick = (appointment) => {
    setIsEditing(true);
    setCurrentAppointment(appointment);
    setOpenDialog(true);
  };

  const handleDeleteClick = (appointmentId) => {
    setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
  };

  const handleConfirmClick = (appointmentId) => {
    setAppointments(appointments.map(appointment => 
      appointment.id === appointmentId ? { ...appointment, status: 'Confirmed' } : appointment
    ));
  };

  const handleSave = () => {
    if (isEditing) {
      setAppointments(appointments.map(appointment => 
        (appointment.id === currentAppointment.id ? currentAppointment : appointment)
      ));
    } else {
      setAppointments([...appointments, { ...currentAppointment, id: appointments.length + 1 }]);
    }
    setOpenDialog(false);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h1">Appointment Management</Typography>
          <Button color="green" onClick={handleAddClick}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Appointment
          </Button>
        </div>
        <Card>
          <CardBody>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-2">Customer</th>
                  <th className="w-1/4 px-4 py-2">Day</th>
                  <th className="w-1/4 px-4 py-2">Time</th>
                  <th className="w-1/4 px-4 py-2">Status</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="border px-4 py-2">{appointment.customer}</td>
                    <td className="border px-4 py-2">{appointment.date}</td>
                    <td className="border px-4 py-2">{appointment.time}</td>
                    <td className="border px-4 py-2">{appointment.status}</td>
                    <td className="border px-4 py-2 flex space-x-2">
                      <Button color="blue" size="sm" onClick={() => handleEditClick(appointment)}>
                        <PencilIcon className="h-5 w-5" />
                      </Button>
                      <Button color="red" size="sm" onClick={() => handleDeleteClick(appointment.id)}>
                        <TrashIcon className="h-5 w-5" />
                      </Button>
                      {appointment.status !== 'Confirmed' && (
                        <Button color="green" size="sm" onClick={() => handleConfirmClick(appointment.id)}>
                          <CheckIcon className="h-5 w-5" />
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>

        <Dialog open={openDialog} handler={setOpenDialog}>
          <DialogHeader>{isEditing ? 'Edit Appointment' : 'Add Appointment'}</DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="text"
                label="Customer"
                value={currentAppointment?.customer}
                onChange={(e) => setCurrentAppointment({ ...currentAppointment, customer: e.target.value })}
              />
              <Input
                type="date"
                label="Day"
                value={currentAppointment?.date}
                onChange={(e) => setCurrentAppointment({ ...currentAppointment, date: e.target.value })}
              />
              <Input
                type="time"
                label="Time"
                value={currentAppointment?.time}
                onChange={(e) => setCurrentAppointment({ ...currentAppointment, time: e.target.value })}
              />
              <select
                className="form-select mt-1 block w-full"
                value={currentAppointment?.status}
                onChange={(e) => setCurrentAppointment({ ...currentAppointment, status: e.target.value })}
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
              </select>
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

export default AppointmentsPage;
