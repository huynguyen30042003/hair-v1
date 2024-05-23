"use client";
import Image from "next/image";
import imageClose from "../../../data/img/close.svg";
import Link from "next/link";

const Login = () => {
  return (
    <div className="bg-[#fff] w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="login w-[442px] max-sm:mx-[24px] flex flex-col">
        <span className=" leading-[48px] text-[#7797EE] text-[64px] font-bold">
          Login
        </span>
        <div className="mt-[42px] flex flex-col ">
          <span className="leading-[28px] mb-[9px]">Usename or number phone</span>
          <input type="text" className="h-[66px] bg-[#F0F0F0] rounded-md" />
        </div>
        <div className="mt-[14px] flex flex-col ">
          <span className="leading-[26px] mb-[9px]">Password</span>
          <input type="password" className="h-[66px] bg-[#F0F0F0] rounded-md" />
        </div>
        <span className="mt-[11px] text-end leading-[26px]">
          <Link href="/forgotpasscode">Forgot Passcode?</Link>
        </span>
        <button className="h-[70px] bg-[#4B5A69] text-[20px] font-bold text-[#fff] rounded-md">
          Login
        </button>
        <div className="flex justify-center mt-[22px] text-[20px] font-bold">
          <span className="text-[#88878F] pr-[5px]">Don’t Have account?</span>
          <Link href="/register">Register Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
