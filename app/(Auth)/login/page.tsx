"use client";
import LoginForm from "@/components/auth/login-form";
import Social from "@/components/auth/social";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <>
      <div className="flex h-[100vh] flex-col items-center justify-center bg-[url('/assets/images/Untitled-1.jpg')] bg-cover bg-center bg-no-repeat py-10">
        <div className="flex h-min flex-col items-center gap-6 rounded-[30px] bg-white bg-opacity-95 p-[40px] max-md:w-4/5 max-md:p-[20px]">
          <div className="w-full text-center">
            <h1 className="text-[45px] font-semibold text-slate-800 max-md:text-[30px]">
              Xin Chào
            </h1>
            <p className="text-[18px] text-slate-600 max-md:text-[12px]">
              Đăng nhập vào tài khoản của bạn
            </p>
          </div>
          <LoginForm />

          <div className="flex w-full flex-col text-center text-sm font-medium leading-none text-slate-500">
            <hr className="w-full" />
            <p className="-mt-[8px] max-md:text-[12px]">Hoặc đăng nhập bằng</p>
            <Social />
          </div>
          <p className="flex gap-2 max-md:text-[12px]">
            Nếu bạn chưa có tài khoản!
            <Link
              href="/register"
              className="text-orange-600 max-md:text-[12px]"
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
