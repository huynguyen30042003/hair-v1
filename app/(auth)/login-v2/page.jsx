"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Logo from "@data/img/LogoLG.jpg";
import styles from "./Login.module.css";
import banner from "@data/img/bannerFG.webp";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.push("/");
    }
  }, [sessionStatus, router]);

  const handleLogin = async () => {
    if (!username || !password) {
      toast("Please fill all the input fields");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res.error) {
      toast.error("Invalid username or password");
    } else {
      router.push("/about");
      toast.success("Login successful");
    }
  };

  return (
    sessionStatus !== "authenticated" && (
      <section className="min-h-screen flex items-center justify-center bg-cyan-700">
        <div className="min-w-full fixed">
          <Image src={banner} alt="Banner" />
        </div>
        <div className="container py-5 h-full flex justify-center items-center">
          <div className="w-full max-w-4xl relative">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex">
                <div className="hidden md:block md:w-1/2">
                  <Image
                    src={Logo}
                    alt="login form"
                    className="w-full h-full object-cover"
                    width={500}
                    height={600}
                  />
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <div className="p-8 w-full">
                    <div className="mb-6 flex items-center">
                      <i className="fas fa-cubes fa-2x text-orange-500 mr-3"></i>
                      <span className="text-4xl font-bold">Login</span>
                    </div>
                    <h5 className="text-xl font-normal mb-6">
                      Sign into your account
                    </h5>
                    <form>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                          Username or Phone Number
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded"
                          onChange={(e) => setUsername(e.target.value)}
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
                        <button
                          className="w-full bg-gray-800 text-white p-2 rounded"
                          type="button"
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                      </div>
                      <div className="text-right mb-4">
                        <Link
                          href="/forgotpasscode"
                          className="text-sm text-gray-600"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-700">&apos;
                        {/* Don't have an account?{" "} */}
                          <Link href="/register" className="text-blue-500">
                            Register here
                          </Link>
                        </p>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mt-4">
                        <Link href="#!">Terms of use</Link>
                        <Link href="#!">Privacy policy</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Login;
