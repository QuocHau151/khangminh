"use client";

import Link from "next/link";
import React from "react";
import RegisterForm from "@/components/auth/register-form";
import Social from "@/components/auth/social";

export default function Register() {
  return (
    <>
      <div className="flex h-[100vh] flex-col items-center justify-center bg-[url('/assets/images/Untitled-1.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex w-min flex-col items-center gap-6 rounded-[30px] bg-white bg-opacity-95 px-[50px] py-[20px] max-md:w-4/5 max-md:gap-4 max-md:px-[30px]">
          <div className="text-center">
            <h1 className="text-[45px] font-semibold text-slate-800 max-md:text-[25px]">
              Xin Chào
            </h1>
            <p className="text-[18px] text-slate-600 max-md:text-[12px]">
              Đăng ký tài khoản của bạn
            </p>
          </div>
          <RegisterForm />

          <div className="flex w-full flex-col text-center text-sm font-medium leading-none text-slate-500">
            <hr className="w-full" />
            <p className="-mt-[8px] max-md:text-[12px]">Hoặc đăng nhập bằng</p>
          </div>
          <Social />
          <p className="flex gap-2 max-md:text-[12px]">
            Nếu bạn dã có tài khoản!
            <Link href="/login" className="text-orange-600">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
