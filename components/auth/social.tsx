import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
export default function Social() {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex w-3/4 items-center justify-around">
      <Button
        className="h-12 w-1/3 border-[1px] bg-black bg-opacity-0 hover:bg-red-500 max-md:w-1/2"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-8 w-8 max-md:h-6 max-md:w-6" />
      </Button>
    </div>
  );
}
