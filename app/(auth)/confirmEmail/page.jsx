"use client";
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("nguyenkhoanhathuy@gmail.com");
  const [result,setResult] = useState('')
  const [loading,setLoading] =useState(false)

  const sendVerificationCode = async (e) => {
    // e.preventDefault();

    // try {
    //   const response = await fetch("/api/sendVerificationCode", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email }),
    //   });

    //   if (!response.ok) {
    //     const errorData = await response.json();
    //     throw new Error(errorData.message || "Network response was not ok");
    //   }

    //   const data = await response.json();
    //   console.log(data); // Log response from the API
    // } catch (error) {
    //   console.error("Error sending verification code:", error);
    //   alert("Error sending verification code: " + error.message);
    // }

    fetch('/api/email',{
      method:'POST'
    })
    .then(response=>response.json())
    .then(data=>setResult(data))
    .catch(error=>setResult(error))
    .finally(()=>setLoading(false))
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <Button onClick={sendVerificationCode}>Send Verification Code</Button>
    </div>
  );
};

export default Page;
