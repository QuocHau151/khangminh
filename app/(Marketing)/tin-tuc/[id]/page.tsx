import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  User,
  Youtube,
} from "lucide-react";

export default function BlogDetail() {
  return (
    <>
      <section className="bg-slate-100">
        <div className="container flex h-[140px] w-full flex-col items-center justify-center px-4 pt-[100px] lg:h-[400px] lg:justify-start lg:pt-[120px]">
          <Breadcrumb className="mb-5">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/tin-tuc">Tin Tức</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>
      <section className="container mx-auto px-4 py-5 lg:mb-[50px] lg:mt-[-250px] lg:max-w-[60%]">
        <h1 className="mb-5 px-4 text-left text-[25px] font-bold md:py-3 md:text-[30px] lg:mb-8 lg:text-center lg:text-[35px]">
          Tìm hiểu về công ty Khang Minh Lighting
        </h1>
        <div className="h-fit w-full rounded-2xl bg-slate-400">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/123.png"
            width={1000}
            height={1000}
            alt=""
          />
        </div>
        <div className="flex items-center justify-between border-b-[1px] px-4 py-2">
          <p className="text-[13px] italic">3/12/2024</p>
          <div className="flex items-center">
            <p className="text-[13px] italic">Chia sẻ:</p>

            <ul className="flex items-center gap-1">
              <li>
                <Facebook className="size-3" />
              </li>
              <li>
                <Instagram className="size-3" />
              </li>
              <li>
                <Youtube className="size-3" />
              </li>
            </ul>
          </div>
        </div>
        {/* Description */}
        <div className="px-4 py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, esse.
          At eos numquam tempore quas in a harum, laborum consequuntur quasi
          odio nemo, sit animi officiis autem. Consequatur, culpa atque. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem
          nobis est a assumenda obcaecati, accusantium ipsum quidem minus quis
          quo sequi, reprehenderit explicabo modi maiores illo natus voluptates
          libero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        {/* Tag */}
        <div className="flex h-min items-center rounded-xl bg-primary px-4 py-5 text-white">
          <p>Tag</p>
        </div>
      </section>
      <section className="container px-4 py-10 lg:mb-20">
        <div className="mb-10 text-center lg:mb-20">
          <h2 className="mb-3 text-[25px] font-bold md:text-[30px] lg:text-[35px]">
            Bài Viết Liên Quan
          </h2>
          <p className="px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quidem blanditiis, quas accusamus assumenda
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[100%] md:basis-1/2 lg:basis-1/4"
                >
                  <div className="h-[300px] rounded-2xl bg-slate-100 md:h-[300px] lg:h-[300px]">
                    <Image
                      src="/assets/images/123.png"
                      width={1000}
                      height={1000}
                      alt=""
                      className="h-full w-full overflow-hidden"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 px-2 pt-2">
                    <p className="text-[12px]">3/12/2024</p>
                    <h1 className="line-clamp-2 text-[18px] font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem possimus, ádasdsa
                    </h1>
                    <p className="line-clamp-3 text-[13px] lg:hidden">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sint modi obcaecati quibusdam animi ad minus aperiam vero,
                      possimus esse iusto laboriosam quisquam qui eius
                      voluptatum ratione dolorem ut repellat placeat.
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden items-center justify-center md:flex" />
            <CarouselNext className="hidden items-center justify-center md:flex" />
          </Carousel>
        </div>
      </section>
      <section className="flex items-center justify-center bg-orange-50/50 p-4 py-20">
        <div className="w-full max-w-xl rounded-lg border border-gray-100 bg-white p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-orange-500">
              <span className="text-xl">✧</span>
              <span>Nhận xét</span>
            </div>
            <h2 className="text-navy-900 mb-2 text-2xl font-bold">
              Gửi Nhận Xét
            </h2>
            <p className="text-sm text-gray-500">
              Your email address will not be published. Required fields ar
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="relative">
              <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="save-info"
                className="mt-1 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <label htmlFor="save-info" className="text-sm text-gray-600">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-white transition-colors hover:bg-orange-600"
            >
              Gửi nhận xét
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
