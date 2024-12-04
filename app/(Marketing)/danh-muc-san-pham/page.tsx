import React from "react";

import Image from "next/image";
import { ArrowUpRight, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { partners, testimonials } from "@/common/data";
import BreadcrumbSection from "@/components/Breadcrumb";

const products = [
  {
    id: 1,
    name: "Đèn Trong Nhà",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque fugiat nihil natus beatae nobis. Soluta ab, dolorem iure culpa ipsa facere tempore ullam hic, laudantium placeat illo dolore quos.",
    image: "/assets/images/123.png",
    link: "/san-pham/1",
  },
  {
    id: 2,
    name: "Đèn Ngoài Trời",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque fugiat nihil natus beatae nobis. Soluta ab, dolorem iure culpa ipsa facere tempore ullam hic, laudantium placeat illo dolore quos.",
    image: "/assets/images/123.png",
    link: "/san-pham/1",
  },
  {
    id: 3,
    name: "Đèn Văn Phòng",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque fugiat nihil natus beatae nobis. Soluta ab, dolorem iure culpa ipsa facere tempore ullam hic, laudantium placeat illo dolore quos.",
    image: "/assets/images/123.png",
    link: "/san-pham/1",
  },
  {
    id: 4,
    name: "Đèn Năng Lượng Tái Tạo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque fugiat nihil natus beatae nobis. Soluta ab, dolorem iure culpa ipsa facere tempore ullam hic, laudantium placeat illo dolore quos.",
    image: "/assets/images/123.png",
    link: "/san-pham/1",
  },
  {
    id: 5,
    name: "Nguồn và Phụ Kiện",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque fugiat nihil natus beatae nobis. Soluta ab, dolorem iure culpa ipsa facere tempore ullam hic, laudantium placeat illo dolore quos.",
    image: "/assets/images/123.png",
    link: "/san-pham/1",
  },
];

export default function DanhMucSP() {
  return (
    <>
      <BreadcrumbSection
        link="/danh-muc-san-pham"
        name="Danh Mục Sản Phẩm"
        description=" Chúng tôi cung cấp giải pháp chiếu sáng chất lượng, tiết kiệm."
        title="Danh Mục Sản Phẩm"
      />
      <section>
        <div className="container px-4 py-10 lg:px-16">
          <div className="mb-6 flex items-center justify-center gap-2 text-primary">
            <span className="text-xl">✧</span>
            <span>Danh Mục Sản Phẩm</span>
          </div>
          <div className="mx-auto mb-16 max-w-3xl text-center text-main">
            <h2 className="text-navy-900 mb-6 text-3xl font-bold md:text-4xl">
              Sản Phẩm Chúng Tôi <br className="md:hidden" /> Cung Cấp
            </h2>
            <p className="text-gray-600">
              Chúng tôi cung cấp bao gồm các giải pháp chiếu sáng tối ưu, lắp
              đặt đèn LED, đèn năng lượng mặt trời, thiết kế hệ thống chiếu sáng
              tiết kiệm năng lượng và bảo trì định kỳ.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="flex h-fit w-full flex-col items-start rounded-lg bg-primary"
              >
                <div className="h-[250px] w-full rounded-t-lg bg-slate-100">
                  <Image
                    src={item.image}
                    alt=""
                    width={100}
                    height={100}
                    className="h-full w-full overflow-hidden rounded-lg"
                  />
                </div>
                <div className="w-full px-4 py-6 lg:py-8">
                  <div className="mb-2 flex w-full items-center justify-between lg:mb-4">
                    <h1 className="text-[20px] font-bold text-white">
                      {item.name}
                    </h1>
                    <ArrowUpRight className="text-white" />
                  </div>
                  <p className="line-clamp-2 text-[13px] text-white lg:line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container flex flex-col-reverse items-center justify-center gap-3 px-4 py-10 md:flex-row md:gap-5 lg:gap-10 lg:py-20">
        <div className="h-[300px] w-full rounded-2xl bg-slate-200 lg:h-[500px] lg:basis-3/5">
          <Image
            src="/assets/images/123.png"
            width={1000}
            height={1000}
            alt=""
            className="h-full w-full overflow-hidden"
          />
        </div>
        <div className="lg:basis-2/5">
          <div className="mb-6 flex items-center justify-center gap-2 text-primary">
            <span className="text-xl">✧</span>
            <span>Video & Hình ảnh</span>
          </div>
          <div className="mx-auto mb-16 max-w-3xl text-center text-main">
            <h2 className="text-navy-900 mb-6 text-3xl font-bold md:text-4xl">
              Tổng quan về Công Ty Chúng Tôi
            </h2>
            <p className="text-gray-600">
              Toàn cảnh cơ sở sản xuất của chúng tôi rộng rãi, hiện đại, trang
              bị công nghệ tiên tiến, đảm bảo quy trình sản xuất khép kín, chất
              lượng sản phẩm vượt trội, đáp ứng nhu cầu khách hàng.
            </p>
          </div>
          <div className="hidden h-[200px] w-full rounded-2xl bg-slate-200 lg:block lg:basis-3/5">
            <Image
              src="/assets/images/123.png"
              width={1000}
              height={1000}
              alt=""
              className="h-full w-full overflow-hidden"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 flex items-end justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-2 text-orange-500">
                <span className="text-xl">✧</span>
                <span>Mọi Người Nói Gì?</span>
              </div>

              <h2 className="text-navy-900 text-4xl font-bold text-main md:text-4xl">
                Feedback Của Khách Hàng
              </h2>

              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>

            <button className="hidden rounded-lg bg-orange-500 px-6 py-3 text-white transition-colors hover:bg-orange-600 md:block">
              Xem thêm
            </button>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:basis-1/2 md:pl-4"
                  >
                    <Card className="border-0 bg-orange-50/50">
                      <CardContent className="flex gap-6 p-6">
                        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-lg bg-gray-200">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={128}
                            height={128}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-4">
                          <Quote className="h-8 w-8 text-orange-500" />
                          <div>
                            <h3 className="text-navy-900 mb-1 text-xl font-medium">
                              {testimonial.name}
                            </h3>
                            <p className="text-orange-500">
                              {testimonial.role}
                            </p>
                          </div>
                          <p className="text-gray-600">{testimonial.quote}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>

            <div className="mt-8 flex justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              <div className="h-2 w-2 rounded-full bg-gray-300" />
              <div className="h-2 w-2 rounded-full bg-gray-300" />
            </div>
          </div>

          <button className="mt-8 w-full rounded-lg bg-orange-500 px-6 py-3 text-white transition-colors hover:bg-orange-600 md:hidden">
            Xem thêm
          </button>
        </div>
      </section>
      <section className="w-full bg-orange-50/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-navy-900 mb-6 text-4xl font-bold text-main md:text-4xl">
              Đối Tác Kinh Doanh Đáng Tin Cậy
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Chúng tôi là đối tác kinh doanh đáng tin cậy, cam kết cung cấp sản
              phẩm chất lượng cao, dịch vụ chuyên nghiệp và giải pháp tối ưu cho
              mọi khách hàng. Với kinh nghiệm lâu năm và uy tín vững vàng, chúng
              tôi luôn đồng hành cùng bạn trên con đường thành công.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="basis-full pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="flex h-24 items-center justify-center p-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={48}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 lg:hidden" />
              <CarouselNext className="-right-12 lg:hidden" />
            </div>
          </Carousel>
        </div>
      </section>
      <section className="relative w-full bg-gray-400 py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <h2 className="max-w-2xl text-center text-3xl font-medium text-white md:text-4xl lg:text-left lg:text-5xl">
            Đặt Hàng Sản Phẩm Ngay Để Có Thể Nhận Voucher 30%
          </h2>

          <button className="rounded-lg bg-orange-500 px-6 py-3 text-white transition-colors hover:bg-orange-600">
            Đặt Hàng Ngay
          </button>
        </div>
      </section>
    </>
  );
}
