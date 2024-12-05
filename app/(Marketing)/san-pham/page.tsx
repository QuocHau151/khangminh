import BreadcrumbSection from "@/components/Breadcrumb";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Filter, Menu } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export default function Products() {
  return (
    <>
      <BreadcrumbSection
        image=""
        link="/san-pham"
        name="Sản Phẩm"
        description="Chúng tôi cung cấp các sản phẩm đèn led, đèn thông minh..."
        title="Sản phẩm cốt lõi"
      />
      <section className="container px-4 py-10">
        <div className="mb-10 flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <div className="flex basis-1/2 items-center gap-2 rounded-xl bg-primary px-3 py-2 text-white md:hidden">
                <Menu />
                <p className="font-semibold">Danh Mục</p>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="mb-3">Danh Mục Sản Phẩm</SheetTitle>
              </SheetHeader>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="border-b font-semibold hover:no-underline">
                    Đèn Trong Nhà
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-5 py-4 pb-0 pl-4">
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="border-b font-semibold hover:no-underline">
                    Đèn Ngoài Trời
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-5 py-4 pb-0 pl-4">
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="border-b font-semibold hover:no-underline">
                    Đèn Văn Phòng
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-5 py-4 pb-0 pl-4">
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="border-b font-semibold hover:no-underline">
                    Đèn Năng Lượng Tái Tạo
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-5 py-4 pb-0 pl-4">
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                    <div>Sản phẩm 1</div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <div className="flex basis-1/2 items-center gap-2 rounded-xl bg-primary px-3 py-2 text-white md:hidden">
                <Filter />
                <p className="font-semibold">Bộ Lọc</p>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Bộ Lọc Sản Phẩm</SheetTitle>
              </SheetHeader>
              <div></div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="mb-10 grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-min w-full rounded-xl border-[1px] bg-slate-100"
            >
              <div className="rounded-t-xl">
                <Image
                  src="/assets/images/123.png"
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-t py-3">
                <h1 className="font-semibold text-primary">Tên Sản Phẩm</h1>
                <p className="text-[12px] font-medium text-red-600">Liên Hệ</p>
              </div>
            </div>
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
      <section className="container mx-auto px-4">
        <div className="mb-10 mt-10 space-y-4 text-center">
          <h2 className="text-[25px] font-bold">Gợi Ý Sản Phẩm</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ea
            animi assumenda
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="mx-auto w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div
                  key={index}
                  className="h-min w-full rounded-xl border-[1px] bg-slate-100"
                >
                  <div className="rounded-t-xl">
                    <Image
                      src="/assets/images/123.png"
                      alt=""
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 border-t py-3">
                    <h1 className="font-semibold text-primary">Tên Sản Phẩm</h1>
                    <p className="text-[12px] font-medium text-red-600">
                      Liên Hệ
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden items-center justify-center md:flex" />
          <CarouselNext className="hidden items-center justify-center md:flex" />
        </Carousel>
      </section>
    </>
  );
}
