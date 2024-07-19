"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import banner from "@data/img/bannerFG.webp";
import { forgotPassword, resetPassword } from "api/route";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const forgetToken = searchParams.get("forgetToken");
  const handleForgotPassword = async () => {
    if (!email) {
      toast("Please enter your email address");
      return;
    }

    try {
      const data = await forgotPassword(email);
      toast.success("Verification code sent to your email");
     
    } catch (error) {
      console.error(error); 
      toast.error("Email not found");
    }
  };

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      toast("Please enter your new password and confirm it");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast("Passwords do not match");
      return;
    }

    try {
      await resetPassword(forgetToken, newPassword);
      toast.success("Password reset successfully");
      router.push("/login-v2");
    } catch (error) {
      toast.error("Failed to reset password");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-cyan-700">
      <div className="min-w-full fixed">
        <Image src={banner} alt="Banner" />
      </div>
      <div className="container py-5 flex justify-center items-center relative fixed">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col items-center p-6">
            <div className="w-full bg-gray-800 text-white p-4 rounded-md mb-6">
              <h2 className="text-2xl font-bold text-center">
                Forgot Password
              </h2>
            </div>
            {!forgetToken ? (
              <form className="w-full">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Email Address
                  </label>
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
                  <Link href="/login-v2" className="text-blue-500">
                    Back to Login
                  </Link>
                </div>
              </form>
            ) : (
              <form className="w-full">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <button
                    className="w-full bg-gray-800 text-white p-2 rounded"
                    type="button"
                    onClick={handleResetPassword}
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
