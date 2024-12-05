import BreadcrumbSection from "@/components/Breadcrumb";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
export default function ProductDetail() {
  return (
    <>
      <BreadcrumbSection
        image=""
        link="/san-pham"
        name="Đèn trong nhà"
        description="Chúng tôi cung cấp các sản phẩm đèn led, đèn thông minh..."
        title="Sản phẩm cốt lõi"
      />
      <section className="container flex flex-col px-4 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex w-full flex-col items-center py-10 lg:basis-2/5">
          <div className="flex w-full flex-col gap-2">
            <div className="aspect-square w-full rounded-2xl bg-slate-100">
              <Image
                src="/assets/images/123.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            <div className="">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent className="">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="w-full basis-1/3 pl-2">
                      <div className="aspect-square w-full rounded-xl bg-slate-100">
                        <Image
                          src="/assets/images/123.png"
                          width={1000}
                          height={1000}
                          alt=""
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:basis-3/5">
          <h1 className="text-[30px] font-bold">Tên Sản Phẩm</h1>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-[14px] text-yellow-300" />
            ))}
          </div>
          <h4 className="my-3 font-bold">Chi Tiết Sản Phẩm</h4>
          <div className="mb-3 flex flex-col gap-3">
            <p className="text-[12px] font-semibold">Công xuất:</p>
            <div className="flex flex-wrap gap-x-5 gap-y-4">
              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className="flex h-[30px] w-[100px] items-center justify-center rounded-lg border-[1px] px-5 py-3 text-[12px] font-medium lg:px-14 lg:py-5"
                >
                  100W
                </div>
              ))}
            </div>
          </div>
          <div className="mb-3 flex flex-col gap-3">
            <p className="text-[12px] font-semibold">Màu Sắc:</p>
            <div className="flex flex-wrap gap-x-5 gap-y-4">
              <div className="flex h-[30px] w-[100px] items-center justify-center rounded-lg border-[1px] px-5 py-3 text-[12px] font-medium lg:px-14 lg:py-5">
                Trắng
              </div>
              <div className="flex h-[30px] w-[100px] items-center justify-center rounded-lg border-[1px] px-5 py-3 text-[12px] font-medium lg:px-14 lg:py-5">
                Đen
              </div>
            </div>
          </div>
          <div className="mb-3 flex items-center gap-5">
            <p className="text-[12px] font-semibold">Số lượng:</p>
            <div className="flex w-fit items-center justify-center gap-2 rounded-2xl border-[1px]">
              <button className="px-4 py-1">-</button>
              <p>5</p>
              <button className="px-4 py-1">+</button>
            </div>
          </div>
          <div className="mb-5 flex items-center gap-5">
            <p className="text-[12px] font-semibold">Giá:</p>
            <p className="ml-2 text-[20px] font-bold text-primary">Liên hệ</p>
          </div>
          <div>
            <button className="w-fit rounded-xl bg-primary px-5 py-3 text-[13px] font-medium text-white">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </section>
      <section className="container px-4 py-20 text-[30px] font-bold">
        Mô Tả Sản Phẩm
      </section>
    </>
  );
}
