"use client";
import Image from "next/image";
import imageClose from "@data/img/LogoLG.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import toast from "react-toastify";

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

  const hanldeSubmit = async () => {
    console.log("====================================");
    console.log(fullName, username, email, password, confrimPassword);
    console.log("====================================");
    if (!fullName || !username || !email || !password || !confrimPassword) {
      toast.error("please fill all the input fields");
      return;
    } else if (password !== confrimPassword) {
      ``;
      toast.error("passwords do not match");
      return;
    }
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({
          fullName,
          username,
          email,
          password,
          confrimPassword,
        }),
      });
      if (res.status === 400) {
        toast.error("this email is already registered");
      } else if (res.status === 201) {
        router.push("/login");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    sessionStatus !== "authenticated" && (
      <section className="min-h-screen flex items-center justify-center bg-cyan-700 fixer">
        <div className="container py-5 h-full flex justify-center items-center">
          <div className="w-full max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <div className="p-8 w-full">
                    <div className="mb-6 flex items-center">
                      <i className="fas fa-cubes fa-2x text-orange-500 mr-3"></i>
                      <span className="text-4xl font-bold">Register</span>
                    </div>
                    <form className="justify-between">
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
                          ConfirmPassword
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
                          onClick={hanldeSubmit}
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
                    alt="login form"
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
