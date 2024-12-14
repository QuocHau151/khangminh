"use client";
import {
  Form,
  FormControl,
  FormLabel,
  FormMessage,
  FormItem,
  FormField,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Button } from "../ui/button";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";

import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { login } from "@/action/login";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Đã có lỗi xảy ra vui lòng thử lại!"
      : "";
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values).then((data) => {
        console.log(data);
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <>
      <Form {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-8 flex w-full flex-col items-stretch gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="max-md:text-[14px]">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="abc@gmail.com"
                      type="email"
                      className="w-[500px] max-md:h-12 max-md:w-full max-md:text-[12px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="max-md:text-[14px]">Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="*******"
                      type="password"
                      className="w-[500px] max-md:h-12 max-md:w-full max-md:text-[12px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="mb-8 flex w-full items-center justify-between px-4 max-md:p-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="border-black text-slate-500" />
              <label
                htmlFor="terms"
                className="text-left text-sm font-medium leading-none text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 max-md:text-[12px]"
              >
                Ghi nhớ mật khẩu
              </label>
            </div>
            <Link
              href="/reset"
              className="text-right text-sm font-medium leading-none text-slate-500 max-md:text-[12px]"
            >
              Quên mật khẩu
            </Link>
          </div>

          <FormError message={error || urlError} />
          <FormSuccess message={success || ""} />
          <Button
            type="submit"
            disabled={isPending}
            className="h-12 w-full max-md:text-[14px]"
          >
            Đăng nhập
          </Button>
        </form>
      </Form>
    </>
  );
}
