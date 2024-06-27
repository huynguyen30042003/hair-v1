"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn , useSession } from "next-auth/react";
import { toast } from "react-toastify";
import banner from "@data/img/bannerFG.webp"

const Login = () => {

  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
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
  return  (sessionStatus !== 'authenticated' &&(

    <div className="bg-[#fff] w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[442px] max-sm:mx-[24px] flex flex-col">
        <div className="min-w-full fixed">
          <Image src={banner} alt="Banner" />
        </div>
        <span className=" leading-[48px] text-[#7797EE] text-[64px] font-bold">
          Login
        </span>
        <div className="mt-[42px] flex flex-col ">
          <span className="leading-[28px] mb-[9px]">Usename or number phone</span>
          <input type="text" className="h-[66px] bg-[#F0F0F0] rounded-md"
          
          onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="mt-[14px] flex flex-col ">
          <span className="leading-[26px] mb-[9px]">Password</span>
          <input type="password" className="h-[66px] bg-[#F0F0F0] rounded-md"
          onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <span className="mt-[11px] text-end leading-[26px]">
          <Link href="/forgotpasscode">Forgot Passcode?</Link>
        </span>
        <button className="h-[70px] bg-[#4B5A69] text-[20px] font-bold text-[#fff] rounded-md"
        onClick={handleLogin}
        >
          Login
        </button>
        <div className="flex justify-center mt-[22px] text-[20px] font-bold">
          <span className="text-[#88878F] pr-[5px]">Don’t Have account?</span>
          <Link href="/register">Register Now</Link>
        </div>
      </div>
    </div>
  ));
};

export default Login;
