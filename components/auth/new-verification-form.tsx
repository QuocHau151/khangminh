"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useRouter, useSearchParams } from "next/navigation";

import { FormSuccess } from "./form-success";
import newVerification from "@/action/new-verification";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  const onLogin = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div>
      <div className="flex h-[100vh] flex-col items-center justify-center bg-[url('/assets/images/Untitled-1.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center gap-6 rounded-[30px] bg-white bg-opacity-95 p-[50px] max-md:w-4/5 max-md:p-[30px]">
          <div className="text-center">
            <h1 className="text-[45px] font-semibold text-slate-800 max-md:text-[25px]">
              Xác thực tài khoản
            </h1>
            <p className="text-[18px] text-slate-600 max-md:text-[12px]">
              Vui lòng chờ trong giây lát
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            {!success && !error && <BeatLoader />}

            {error && (
              <>
                <FormSuccess message={"Xác thực thành công"} />
                <button className="max-md:text-[12px]" onClick={onLogin}>
                  Về trang đăng nhập{" "}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
