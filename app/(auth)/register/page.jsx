"use client";
import Image from "next/image";
import imageClose from "../../../data/img/close.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.push("/");
    }
  }, [sessionStatus, router]);

  const handleSubmit = async () => {
    console.log("====================================");
    console.log(fullName, username, email, password, confirmPassword);
    console.log("====================================");

    if (!fullName || !username || !email || !password || !confirmPassword) {
      toast.error("Please fill all the input fields");
      return;
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          email,
          password,
          confirmPassword
        }),
      });

      if (res.status === 400) {
        const errorData = await res.json();
        toast.error(errorData.error);
      } else if (res.status === 201) {
        toast.success("register successful");

        router.push("/login");
      } else {
        toast.error("Something went wrong, please try again");
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };

  return (
    sessionStatus !== "authenticated" && (
      <div className="bg-[#fff] w-[100vw] min-h-[100vh] flex justify-center items-center">
        <div className="login w-[442px] my-[34px] mx-[64px] flex flex-col">
          <span className="leading-[48px] text-[#7797EE] text-[64px] font-bold">
            Register Now
          </span>
          <div className="mt-[12px] flex flex-col">
            <span className="leading-[28px] mb-[9px]">Full Name</span>
            <input
              type="text"
              className="h-[66px] bg-[#F0F0F0] rounded-md"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mt-[12px] flex flex-col">
            <span className="leading-[28px] mb-[9px]">Username or Phone Number</span>
            <input
              type="text"
              className="h-[66px] bg-[#F0F0F0] rounded-md"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-[12px] flex flex-col">
            <span className="leading-[28px] mb-[9px]">Email</span>
            <input
              type="text"
              className="h-[66px] bg-[#F0F0F0] rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-[12px] flex flex-col">
            <span className="leading-[26px] mb-[9px]">Password</span>
            <input
              type="password"
              className="h-[66px] bg-[#F0F0F0] rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-[12px] flex flex-col">
            <span className="leading-[26px] mb-[9px]">Confirm Password</span>
            <input
              type="password"
              className="h-[66px] bg-[#F0F0F0] rounded-md"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            className="mt-[22px] h-[70px] bg-[#4B5A69] text-[20px] font-bold text-[#fff] rounded-md"
            onClick={handleSubmit}
          >
            Register Now
          </button>
          <div className="flex justify-center mt-[22px] text-[20px] font-bold">
            <Link href="/login">Login Now</Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Register;