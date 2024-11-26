"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import EmblaCarousel from "@/components/ui/EmblaCarousel";

import {
  CheckCircle,
  Star,
  ChevronRight,
  ArrowRight,
  Quote,
  Calendar,
  Clock,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const steps = [
  {
    number: "01",
    title: "Khách hàng đặt hàng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    number: "02",
    title: "Tiếp nhận đơn hàng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    number: "03",
    title: "Đóng gói hàng hoá",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    number: "04",
    title: "Gửi đến khách hàng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
const products = [
  {
    id: 1,
    name: "Đèn Led 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Đèn Led 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Đèn Led 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
  },
];
const testimonials = [
  {
    name: "Laura Mitchell",
    role: "Marketing Manager, Rui Company",
    image: "/placeholder.svg",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Emma Johnson",
    role: "Event Planner, Right Zone",
    image: "/placeholder.svg",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Sarah Wilson",
    role: "CEO, Tech Solutions",
    image: "/placeholder.svg",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
const news = [
  {
    id: 1,
    date: "July 29, 2024",
    title: "Chất lượng sản phẩm của Khang Minh Lighting",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    date: "July 29, 2024",
    title: "Chất lượng sản phẩm của Khang Minh Lighting",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    date: "July 29, 2024",
    title: "Chất lượng sản phẩm của Khang Minh Lighting",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    date: "July 29, 2024",
    title: "Chất lượng sản phẩm của Khang Minh Lighting",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/placeholder.svg",
  },
];
const partners = [
  {
    id: 1,
    name: "Partner 1",
    logo: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Partner 2",
    logo: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Partner 3",
    logo: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Partner 4",
    logo: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Partner 5",
    logo: "/placeholder.svg",
  },
];
export default function Home() {
  return (
    <>
      <Header />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <section className="mt-10 w-full bg-gradient-to-b from-purple-50/50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Left column with images */}
            <div className="relative w-full lg:w-1/2">
              {/* Main image */}
              <div className="aspect-square w-full rounded-lg bg-gray-300" />

              {/* Experience badge */}
              <div className="absolute left-6 top-6 max-w-[200px] rounded-lg bg-orange-500 p-4 text-white">
                <div className="flex items-center gap-2 text-3xl font-bold">
                  10+
                  <span className="text-yellow-300">☀</span>
                </div>
                <div className="text-sm font-medium">Năm kinh nghiệm</div>
                <div className="mt-1 text-xs">
                  Cung cấp sản phẩm thiết bị
                  <br />
                  công nghệ thông minh
                </div>
              </div>

              {/* Secondary image */}
              <div className="absolute -bottom-8 right-0 aspect-video w-2/3 rounded-lg bg-gray-400" />
            </div>

            {/* Right column with content */}
            <div className="w-full pt-8 lg:w-1/2 lg:pt-0">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <span className="text-xl">✧</span>
                <span>Về Chúng Tôi</span>
              </div>

              <h1 className="mb-8 text-4xl font-bold text-main">
                Công Ty TNHH
                <br />
                Khang Minh Lighting
              </h1>

              <p className="mb-8 text-sm leading-relaxed text-gray-600">
                Công ty TNHH Khang Minh Lighting là đơn vị chuyên cung cấp các
                giải pháp chiếu sáng hiện đại, tiết kiệm năng lượng và thân
                thiện với môi trường. Với hơn X năm kinh nghiệm trong ngành,
                chúng tôi cung cấp đa dạng các sản phẩm đèn chiếu sáng chất
                lượng cao, bao gồm bóng đèn LED, đèn năng lượng mặt trời, đèn
                tiết kiệm năng lượng và các sản phẩm đèn decor tạo điểm nhấn cho
                không gian sống và làm việc của bạn.
              </p>

              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-medium text-gray-900">
                  Sản phẩm của chúng tôi
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="text-orange-500" />
                    <span>Đèn LED</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="text-orange-500" />
                    <span>Đèn năng lượng mặt trời</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="text-orange-500" />
                    <span>Đèn tiết kiệm năng lượng</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="text-orange-500" />
                    <span>Đèn decor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-br from-orange-100 to-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="mb-6 flex items-center justify-center gap-2 text-primary">
            <span className="text-xl">✧</span>
            <span>Dịch Vụ</span>
          </div>

          {/* Title */}
          <div className="mx-auto mb-16 max-w-3xl text-center text-main">
            <h2 className="text-navy-900 mb-6 text-3xl font-extrabold md:text-4xl">
              Lý Do Chọn
              <br />
              Khang Minh Lighting ?
            </h2>
            <p className="text-gray-600">
              Cam kết của chúng tôi về chất lượng, sự tiện lợi và sự hài lòng
              của khách hàng thúc đẩy mọi khía cạnh trong dịch vụ của chúng tôi,
              đảm bảo quản áo của bạn nhận được sự chăm sóc xứng đáng.
            </p>
          </div>

          {/* Grid of features */}
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 h-16 w-16 rounded-lg bg-gray-400"></div>
              <h3 className="text-navy-900 mb-4 text-xl font-medium">
                Chất lượng vượt trội
              </h3>
              <p className="text-sm text-gray-600">
                Chúng tôi cam kết cung cấp các sản phẩm chính hãng, đạt tiêu
                chuẩn quốc tế về chất lượng và an toàn.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 h-16 w-16 rounded-lg bg-gray-400"></div>
              <h3 className="text-navy-900 mb-4 text-xl font-medium">
                Tiết kiệm năng lượng
              </h3>
              <p className="text-sm text-gray-600">
                Các sản phẩm của chúng tôi không chỉ giúp giảm chi phí điện năng
                mà còn góp phần bảo vệ môi trường.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 h-16 w-16 rounded-lg bg-gray-400"></div>
              <h3 className="text-navy-900 mb-4 text-xl font-medium">
                Giá cả hợp lý
              </h3>
              <p className="text-sm text-gray-600">
                Đội ngũ tư vấn nhiệt tình,chính sách giá cạnh tranh, chúng tôi
                mang đến những lựa chọn tối ưu nhất cho nhu cầu chiếu sáng.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 h-16 w-16 rounded-lg bg-gray-400"></div>
              <h3 className="text-navy-900 mb-4 text-xl font-medium">
                Dịch vụ hậu mãi tận tâm
              </h3>
              <p className="text-sm text-gray-600">
                Chúng tôi cung cấp dịch vụ bảo hành chu đáo và hỗ trợ khách hàng
                nhanh chóng khi có yêu cầu.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100">
        <div className="container px-4">
          {/* Top Section */}
          <div className="relative grid gap-8 py-16 lg:grid-cols-2">
            {/* Customer satisfaction card */}
            <div className="md:self-center">
              <div className="mb-4 inline-flex w-full flex-col items-center gap-4 rounded-2xl bg-orange-100 p-6 backdrop-blur-sm md:absolute md:bottom-10 md:w-[350px]">
                <div className="flex w-full items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="h-10 w-10 rounded-full border-2 border-primary bg-gray-300" />
                    <div className="h-10 w-10 rounded-full border-2 border-primary bg-gray-300" />
                    <div className="h-10 w-10 rounded-full border-2 border-primary bg-gray-300" />
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary text-[10px]">
                      3.5k
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold">4.8</span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between gap-20">
                  <div className="text-sm">
                    Khách hàng hài lòng và Chúng tôi cung cấp hơn 3000 sản phẩm
                  </div>
                  <div>-{">"}</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="">
              <div className="mb-3 flex items-center gap-2 text-orange-500">
                <span className="text-xl">✧</span>
                <span>Chúng tôi là !</span>
              </div>

              <h2 className="mb-5 text-[35px] font-bold text-main md:text-4xl">
                Sự Lựa Chọn Uy Tín Về Sản Phẩm Thiết Bị Thông Minh Gia Đình
              </h2>

              <p className="text-gray-605 mb-10">
                Với xu hướng công nghệ ngày càng phát triển, các thiết bị thông
                minh gia đình không chỉ mang lại sự tiện nghi mà còn giúp tối ưu
                hóa quản lý năng lượng, đảm bảo an toàn và nâng cao chất lượng
                cuộc sống. Công ty TNHH Khang Minh Lighting tự hào là đơn vị
                cung cấp những sản phẩm chiếu sáng thông minh, tiết kiệm năng
                lượng, phù hợp với nhu cầu của mọi gia đình và doanh nghiệp.
              </p>

              {/* Statistics Grid */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-16 w-16 rounded-lg bg-gray-300" />
                  <div className="flex flex-col">
                    <div className="text-xl font-bold">95%</div>
                    <div className="text-gray-600">Giao hàng siêu nhanh</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-16 w-16 rounded-lg bg-gray-300" />
                  <div className="flex flex-col">
                    <div className="text-xl font-bold">95%</div>
                    <div className="text-gray-600">Giao hàng siêu nhanh</div>
                  </div>
                </div>{" "}
                <div className="flex items-center gap-3">
                  <div className="flex h-16 w-16 rounded-lg bg-gray-300" />
                  <div className="flex flex-col">
                    <div className="text-xl font-bold">95%</div>
                    <div className="text-gray-600">Giao hàng siêu nhanh</div>
                  </div>
                </div>{" "}
                <div className="flex items-center gap-3">
                  <div className="flex h-16 w-16 rounded-lg bg-gray-300" />
                  <div className="flex flex-col">
                    <div className="text-xl font-bold">95%</div>
                    <div className="text-gray-600">Giao hàng siêu nhanh</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom Section with Wave Background */}
      <section className="relative">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-12 text-white">
          <div className="container">
            <h2 className="mb-4 text-3xl font-medium md:text-4xl">
              Hãy Liên Hệ Để Đăng Ký Đại Lý Của Chúng Tôi
            </h2>
            <p className="mb-8">
              Khám phá ngay bộ sưu tập thiết bị chiếu sáng thông minh gia đình
              của chúng tôi và trải nghiệm cuộc sống hiện đại hơn!
            </p>
            <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-orange-500">
              <Phone className="h-5 w-5" />
              <span className="font-medium">24/7 Gọi Ngay</span>
              <span className="font-bold">0123456789</span>
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-primary">
              <span className="text-xl">✧</span>
              <span>Quy Trình Của Chúng Tôi</span>
            </div>
            <h2 className="text-navy-900 text-3xl font-extrabold text-main md:text-4xl">
              Đơn Giản, Nhanh Chóng <br /> Uy Tín, Đáng Tin Cậy
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Image and number */}
                <div className="relative z-30 mb-6 h-24 w-24 rounded-xl bg-gray-200">
                  <div className="z-1 absolute -right-5 -top-3 h-12 w-12 rounded-full bg-main"></div>
                  <div className="absolute -right-10 top-[50%] z-10 translate-y-[-50%]">
                    <span className="text-[25px] font-semibold text-black">
                      . {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-navy-900 mb-4 text-xl font-medium">
                  {step.title}
                </h3>
                <p className="mb-6 text-gray-600">{step.description}</p>

                {/* Arrow - Hide on last item and on mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-24 z-10 hidden translate-x-1/2 lg:block">
                    <ChevronRight className="h-8 w-8 text-black" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-start justify-between md:items-end">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-orange-500">
                <span className="text-xl">✧</span>
                <span>Sản phẩm nổi bật</span>
              </div>

              <h2 className="text-navy-900 text-4xl font-bold text-main md:text-4xl">
                Sản Phẩm Bán Chạy
                <br />
                Của Chúng Tôi
              </h2>

              <p className="max-w-2xl text-gray-600">
                Sản phẩm bán chạy của chúng tôi bao gồm đèn LED tiết kiệm điện,
                đèn năng lượng mặt trời thân thiện môi trường, đèn trang trí
                decor tinh tế và các giải pháp chiếu sáng tiết kiệm năng lượng
                cho mọi không gian.
              </p>
            </div>

            <button className="hidden items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-white transition-colors hover:bg-orange-600 md:flex">
              Xem Thêm
            </button>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group overflow-hidden rounded-lg">
                    <div className="relative aspect-[4/3] bg-gray-200">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-orange-500 p-6 text-white">
                      <div className="mb-4 flex items-start justify-between">
                        <h3 className="text-xl font-medium">{product.name}</h3>
                        <button className="rounded-full bg-white p-2 text-orange-500 transition-colors hover:bg-orange-50">
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-orange-50">{product.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-white transition-colors hover:bg-orange-600 md:hidden">
            Xem Thêm
          </button>
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
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-primary">
              <span className="text-xl">✧</span>
              <span>Tin Tức Sản Phẩm</span>
            </div>

            <h2 className="text-navy-900 mb-6 text-4xl font-bold text-main md:text-4xl">
              Tin Tức Mới Nhất
            </h2>

            <p className="mx-auto max-w-3xl text-gray-600">
              Bài viết mới nhất của chúng tôi cập nhật những xu hướng chiếu sáng
              mới, giải pháp tiết kiệm năng lượng và các sản phẩm công nghệ tiên
              tiến giúp tối ưu hóa không gian sống, mang lại hiệu quả cao và
              thân thiện với môi trường.
            </p>
          </div>

          {/* News Carousel */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {news.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="border-[0.5px] border-slate-500">
                    <CardContent className="p-0">
                      <div className="relative mb-4 aspect-[4/3]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="border-b-2 border-slate-500 object-cover"
                        />
                      </div>
                      <div className="space-y-3 px-3 pb-5">
                        <time className="text-sm text-gray-500">
                          {item.date}
                        </time>
                        <h3 className="text-navy-900 text-xl font-medium">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                        <Link
                          href="#"
                          className="inline-flex items-center text-orange-500 transition-colors hover:text-orange-600"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden" />
            <CarouselNext className="hidden" />
          </Carousel>
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
      <section className="w-full py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Image */}
              <div className="aspect-[2/1] w-full rounded-lg bg-gray-200" />

              {/* Content */}
              <div>
                <div className="mb-4 flex items-center gap-2 text-orange-500">
                  <span className="text-xl">✧</span>
                  <span>Liên hệ với chúng tôi</span>
                </div>

                <h2 className="text-navy-900 mb-4 text-3xl font-medium md:text-4xl">
                  Ghé Thăm Của Hàng
                  <br />
                  Của Chúng Tôi
                </h2>

                <p className="mb-8 text-gray-600">
                  Các cửa hàng của chúng tôi được thiết kế để mang đến cho bạn
                  trải nghiệm liền mạch và hiệu quả.
                </p>

                {/* Branches */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-navy-900 mb-2 flex items-center gap-2 font-medium">
                      <MapPin className="text-orange-500" />
                      Chi Nhánh Hà Nội
                    </h3>
                    <p className="pl-6 text-gray-600">
                      Address : 123 Main Street, Suite 101, Cityville, CA 90001
                    </p>
                  </div>

                  <div>
                    <h3 className="text-navy-900 mb-2 flex items-center gap-2 font-medium">
                      <MapPin className="text-orange-500" />
                      Chi Nhánh Thành Phố Hồ Chí Minh
                    </h3>
                    <p className="pl-6 text-gray-600">
                      Address : 456 Oak Avenue, Unit 5B Township, CA 90002
                    </p>
                  </div>
                </div>

                {/* Hotline Button */}
                <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-4 text-white transition-colors">
                  <span>Mọi vấn đề liên hệ hotline</span>
                  <Phone className="h-5 w-5" />
                  <span className="text-orange-500">Call: 0123456789</span>
                </button>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="flex h-full w-full items-center justify-center bg-orange-50">
              <div className="w-full rounded-lg p-8">
                <h3 className="mb-8 px-4 text-center text-xl font-bold text-main lg:text-3xl">
                  Lên lịch nhận hàng hoặc giao hàng, chúng tôi sẽ lo phần còn
                  lại!
                </h3>

                <form className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="relative">
                    <Calendar className="absolute left-4 top-3.5 text-gray-400" />
                    <input
                      type="date"
                      placeholder="Select Date"
                      className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="relative">
                    <Clock className="absolute left-4 top-3.5 text-gray-400" />
                    <input
                      type="time"
                      placeholder="Pickup Time"
                      className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-white transition-colors hover:bg-orange-600"
                  >
                    Đăng ký
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
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
      <Footer />
    </>
  );
}
