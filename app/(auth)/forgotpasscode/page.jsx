"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import banner from "@data/img/bannerFG.webp"

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleForgotPassword = async () => {
    if (!email) {
      toast("Please enter your email address");
      return;
    }

    // Handle the forgot password logic here (e.g., API call)
    // For demonstration, let's assume it's successful
    toast.success("Password reset link sent to your email");
    router.push("/login-v2");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-cyan-700">
      <div className="w-full h-[250px] ">
        <Image src={banner} alt="Banner" />
      </div>
      <div className="container py-5 flex justify-center items-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col items-center p-6">
            <div className="w-full bg-gray-800 text-white p-4 rounded-md mb-6">
              <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
            </div>
            <form className="w-full">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <button
                  className="w-full bg-gray-800 text-white p-2 rounded"
                  type="button"
                  onClick={handleForgotPassword}
                >
                  Send Reset Link
                </button>
              </div>
              <div className="text-center">
                <Link href="/login-v2" className="text-blue-500">Back to Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
