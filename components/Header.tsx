"use client";

import { useState } from "react";

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [category, setCategory] = useState("Đèn Trong Nhà");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
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
          <a href="/lien-he" className="text-sm/6 font-semibold text-gray-900">
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
          <User className="size-10 p-2.5" />
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
                    className={`flex cursor-pointer items-center justify-between py-2 ${category === "Đèn Văn Phòng" && "rounded-xl bg-primary px-4 text-white"} `}
                    onMouseEnter={() => {
                      setCategory("Đèn Văn Phòng");
                    }}
                  >
                    <h2 className="font-medium">Đèn Văn Phòng</h2>
                    <ChevronsRight />
                  </div>
                  <div
                    className={`flex cursor-pointer items-center justify-between py-2 ${category === "Năng Lượng Tái Tạo" && "rounded-xl bg-primary px-4 text-white"} `}
                    onMouseEnter={() => {
                      setCategory("Năng Lượng Tái Tạo");
                    }}
                  >
                    <h2 className="font-medium">Năng Lượng Tái Tạo</h2>
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
                    <p className="text-[12px] font-bold"> Xem Tất Cả </p>
                    <MoveUpRight className="size-5 font-bold" />
                  </div>
                </div>
                <div className="flex w-full flex-wrap items-start gap-5 px-5">
                  {category === "Đèn Trong Nhà" &&
                    Array.from({ length: 10 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white"
                      >
                        <h2>Đèn Led 1</h2>
                      </div>
                    ))}
                  {category === "Đèn Ngoài Trời" &&
                    Array.from({ length: 6 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white"
                      >
                        <h2>Đèn Led 1</h2>
                      </div>
                    ))}
                  {category === "Đèn Văn Phòng" &&
                    Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white"
                      >
                        <h2>Đèn Led 1</h2>
                      </div>
                    ))}
                  {category === "Năng Lượng Tái Tạo" &&
                    Array.from({ length: 8 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white"
                      >
                        <h2>Đèn Led 1</h2>
                      </div>
                    ))}
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
  );
}
