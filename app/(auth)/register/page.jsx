"use client";
import Image from "next/image";
import imageClose from "@data/img/LogoLG.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import banner from "@data/img/bannerFG.webp"

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
          confirmPassword,
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
      <section className="min-h-screen flex items-center justify-center bg-cyan-700">
        <div className="min-w-full fixed">
          <Image src={banner} alt="Banner" />
        </div>
        <div className="container py-5 h-full flex justify-center items-center relative">
          <div className="w-full max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <div className="p-5 w-full">
                    <div className="mb-6 flex items-center">
                      <i className="fas fa-cubes fa-2x text-orange-500 mr-3"></i>
                      <span className="text-4xl font-bold">Register</span>
                    </div>
                    <form>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                          Enter Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded"
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                          Enter User Name
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                          Enter Email
                        </label>
                        <input
                          type="email"
                          className="w-full p-2 border border-gray-300 rounded"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                          Password
                        </label>
                        <input
                          type="password"
                          className="w-full p-2 border border-gray-300 rounded"
                          onChange={(e) => setPassword(e.target.value)}
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
                          onClick={handleSubmit}
                        >
                          Register
                        </button>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-700">
                          Back to page{" "}
                          <Link href="/login-v2" className="text-blue-800">
                            Login
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2">
                  <Image
                    src={imageClose}
                    alt="register form"
                    className="w-full h-full object-cover"
                    width={500}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Register;