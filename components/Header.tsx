"use client";

import { useEffect, useState, useTransition } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronsRight,
  MoveUpRight,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import {
  Dialog1,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { updateUserSchema } from "@/schemas";
import { FormError } from "./auth/form-error";
import { FormSuccess } from "./auth/form-success";
import { updateUserProfile } from "@/action/user";
import { UserType } from "@/common/type";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [category, setCategory] = useState("Đèn Trong Nhà");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { data: session, update } = useSession();

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof updateUserSchema>) {
    if (values.email !== session?.user.email) {
      if (session?.user.email) {
        values.email = session.user.email;
      }
    }
    if (values.name !== session?.user.name) {
      if (session?.user.name) {
        values.name = session.user.name;
      }
    }
    if (values.phone !== session?.user.phone) {
      if (session?.user.phone) {
        values.phone = session.user.phone;
      }
    }
    if (values.address !== session?.user.address) {
      if (session?.user.address) {
        values.address = session.user.address;
      }
    }
    console.log(values);
    const updatedUser: UserType = {
      name: values.name || "",
      email: values.email || "",
      phone: values.phone || "",
      address: values.address || "",
    };
    setError("");
    setSuccess("");
    startTransition(() => {
      updateUserProfile(updatedUser).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  }
  useEffect(() => {
    update();
  }, []);
  return (
    <>
      <header className="fixed z-50 w-full bg-white">
        <nav
          aria-label="Global"
          className="container flex items-center justify-between px-4 py-3"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5">
              <span className="sr-only">Khang Minh Lighting</span>
              <Image
                alt=""
                src="/assets/images/logo/logo.png"
                width={1500}
                height={1500}
                className="h-14 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <Search className="size-5" />
            <ShoppingCart className="size-5" />
            <User className="size-5" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/gioi-thieu"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Giới Thiệu
            </Link>

            <div className="" onMouseEnter={() => setIsOpenMenu(true)}>
              <div className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                Sản Phẩm
                <ChevronDownIcon
                  aria-hidden="true"
                  className={`size-5 flex-none text-gray-400 ${isOpenMenu === true && "rotate-180"}`}
                />
              </div>
            </div>

            <Link
              href="/tin-tuc"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Tin Tức
            </Link>
            <Link
              href="/tuyen-dung"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Tuyển Dụng
            </Link>
            <a
              href="/lien-he"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Liên Hệ
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="mr-5 hidden xl:block">
              <Link
                href="/login"
                className="-mx-2 inline-block text-base/7 font-semibold text-white hover:bg-gray-50"
              >
                <h1 className="rounded-lg bg-primary px-4 py-2 text-[12px]">
                  Đăng Kí Đại Lý
                </h1>
              </Link>
            </div>
            <Search className="size-10 p-2.5" />
            <ShoppingCart className="size-10 p-2.5" />
            {!session ? (
              <Link href="/login">
                <User className="size-10 p-2.5" />
              </Link>
            ) : (
              <Dialog1>
                <DialogTrigger>
                  <User className="size-10 p-2.5" />
                </DialogTrigger>
                <DialogContent className="mx-auto w-[90%]">
                  <DialogHeader>
                    <DialogTitle className="mb-5">
                      Thông tin cá nhân
                    </DialogTitle>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-5"
                      >
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="Email"
                                  className="text-black"
                                  {...field}
                                  defaultValue={session.user.email || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Họ Tên"
                                  className="text-black"
                                  defaultValue={session.user.name || ""}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Số Điện Thoại"
                                  className="text-black"
                                  defaultValue={session.user.phone || ""}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Địa Chỉ"
                                  className="text-black"
                                  defaultValue={session.user.address || ""}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormError message={error || ""} />
                        <FormSuccess message={success || ""} />
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            signOut();
                          }}
                          className="float-end ml-3 bg-red-700 text-white"
                        >
                          Đăng xuất
                        </Button>
                        <Button
                          disabled={isPending}
                          type="submit"
                          className="float-end text-white"
                        >
                          Cập nhật
                        </Button>
                      </form>
                    </Form>
                  </DialogHeader>
                </DialogContent>
              </Dialog1>
            )}
          </div>
        </nav>
        {isOpenMenu && (
          <div className="absolute top-[36px] hidden w-full lg:block">
            <div
              className="mx-auto w-[60vw] pt-8"
              onMouseLeave={() => setIsOpenMenu(false)}
            >
              <div className="flex h-fit w-[70vw] items-start justify-center gap-10 rounded-[50px] border-[1.5px] border-primary bg-white p-10 shadow-2xl">
                <div className="flex h-full w-full basis-[30%] flex-col gap-8 border-r-[1px] border-primary pr-10">
                  <h1 className="text-[20px] font-bold">Danh Mục Sản Phẩm</h1>
                  <div className="flex flex-col gap-1">
                    <div
                      className={`flex cursor-pointer items-center justify-between py-2 ${category === "Đèn Trong Nhà" && "rounded-xl bg-primary px-4 text-white"} `}
                      onMouseEnter={() => {
                        console.log(setCategory("Đèn Trong Nhà"));
                      }}
                    >
                      <h2 className="font-medium">Đèn Trong Nhà</h2>
                      <ChevronsRight />
                    </div>
                    <div
                      className={`flex cursor-pointer items-center justify-between py-2 ${category === "Đèn Ngoài Trời" && "rounded-xl bg-primary px-4 text-white"} `}
                      onMouseEnter={() => {
                        setCategory("Đèn Ngoài Trời");
                      }}
                    >
                      <h2 className="font-medium">Đèn Ngoài Trời</h2>
                      <ChevronsRight />
                    </div>

                    <div
                      className={`flex cursor-pointer items-center justify-between py-2 ${category === "Năng Lượng Mặt Trời" && "rounded-xl bg-primary px-4 text-white"} `}
                      onMouseEnter={() => {
                        setCategory("Năng Lượng Mặt Trời");
                      }}
                    >
                      <h2 className="font-medium">Năng Lượng Mặt Trời</h2>
                      <ChevronsRight />
                    </div>
                    <div
                      className={`flex cursor-pointer items-center justify-between py-2 ${category === "Nguồn và Phụ Kiện" && "rounded-xl bg-primary px-4 text-white"} `}
                      onMouseEnter={() => {
                        setCategory("Nguồn và Phụ Kiện");
                      }}
                    >
                      <h2 className="font-medium">Nguồn và Phụ Kiện</h2>
                      <ChevronsRight />
                    </div>
                  </div>
                  <div className="aspect-square w-full rounded-2xl bg-slate-200"></div>
                </div>
                <div className="relative h-full w-full basis-[70%] space-y-10">
                  <div className="flex items-start justify-between">
                    <h1 className="text-[21px] font-bold">
                      Tìm Theo Nhóm Sản Phẩm
                    </h1>
                    <div className="flex items-center gap-2 rounded-2xl bg-primary px-4 py-2.5 text-white">
                      <Link href="/san-pham" className="text-[12px] font-bold">
                        Xem Tất Cả
                      </Link>
                      <MoveUpRight className="size-5 font-bold" />
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap items-start gap-5 px-5">
                    {category === "Đèn Trong Nhà" && (
                      <>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn Âm Trần</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn Spotlight</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn Panel</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn Rọi Ray Bơ</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn Ray Nam Châm</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn Led Dây</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn Thả Hộp</h2>
                        </div>
                      </>
                    )}
                    {category === "Đèn Ngoài Trời" && (
                      <>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn Pha 5054</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn Pha Cầu</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn Pha XPG</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn Pha Lá</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn Hắt Tường </h2>
                        </div>
                      </>
                    )}
                    {category === "Năng Lượng Mặt Trời" && (
                      <>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn NLMT Dân Dụng</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn NLMT Kim Cương</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn NLMT Liền Thể</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn NLMT JBP</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn NLMT Nhôm Đúc</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Đèn NLMT Bàn Chải</h2>
                        </div>
                      </>
                    )}
                    {category === "Nguồn và Phụ Kiện" && (
                      <>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Nguồn Tổ Ong</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Nguồn Phủ Keo</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Phụ Kiện Nối Góc</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Phụ Kiện Nối Thẳng</h2>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white">
                          <h2>Nguồn Ray Nam Châm</h2>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="flex h-full w-full items-center justify-around gap-5">
                    <div className="aspect-square w-full rounded-2xl bg-slate-200"></div>
                    <div className="aspect-square w-full rounded-2xl bg-slate-200"></div>
                    <div className="aspect-square w-full rounded-2xl bg-slate-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Khang Minh Lighting</span>
                <Image
                  alt=""
                  src="/assets/images/logo/logo.png"
                  width={1000}
                  height={1000}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6">
                <div className="space-y-2 pt-6">
                  <Link
                    href="/gioi-thieu"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Giới Thiệu
                  </Link>

                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Sản Phẩm
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2"></DisclosurePanel>
                  </Disclosure>
                  <Link
                    href="/tin-tuc"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Tin Tức
                  </Link>
                  <Link
                    href="/tuyen-dung"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Tuyển Dụng
                  </Link>
                  <Link
                    href="/lien-he"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Liên Hệ
                  </Link>
                </div>
                <div className="py-2">
                  <Link
                    href="/login"
                    className="-mx-2 inline-block text-base/7 font-semibold text-white hover:bg-gray-50"
                  >
                    <h1 className="rounded-lg bg-primary px-4 py-2 text-[12px]">
                      Đăng Kí Đại Lý
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}
