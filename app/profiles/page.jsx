"use client";
// app/profiles/index.js
import React, { useState } from "react";
import Header from "../../components/Header";
import { Input, Button } from "@material-tailwind/react";

const ProfilesPage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi thông tin cập nhật tới server
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto my-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              label="Name"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
            />
          </div>
          <Button type="submit">Update Profile</Button>
        </form>
      </div>
    </div>
  );
};

export default ProfilesPage;
