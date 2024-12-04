import { CheckCircle, ChevronRight, Phone, Play } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import BreadcrumbSection from "@/components/Breadcrumb";
import { partners, steps } from "@/common/data";

export default function GioiThieu() {
  return (
    <>
      <BreadcrumbSection
        link="/gioi-thieu"
        name="Giới Thiệu"
        description=" Đối tác đáng tin cậy của bạn trong ngành chiếu sáng"
        title="Khám phá về công ty chúng tôi"
      />
      <section className="w-full bg-gradient-to-b from-purple-50/50 to-white pt-10 lg:pt-[80px]">
        <div className="container mx-auto px-4 py-12">
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
      <section className="container flex flex-col items-center justify-between gap-10 px-2 py-10 lg:flex-row lg:py-20">
        <div className="lg:basis-1/2">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <span className="text-xl">✧</span>
            <span>Video Profile</span>
          </div>
          <h1 className="mb-8 text-4xl font-bold text-main">
            Quá Trình Hình Thành
            <br />
            Của Chúng Tôi
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-gray-600">
            Quá trình hình thành của chúng tôi bắt đầu từ những bước đi đầu tiên
            đầy nhiệt huyết, với mong muốn mang đến các giải pháp chiếu sáng
            hiện đại và tiết kiệm năng lượng. Trải qua nhiều năm phát triển,
            chúng tôi đã không ngừng đổi mới công nghệ, mở rộng sản phẩm và xây
            dựng uy tín vững chắc trong ngành. Từ những ngày đầu khởi nghiệp,
            đến nay, Khang Minh Lighting tự hào là đối tác đáng tin cậy trong
            cung cấp thiết bị chiếu sáng cho hàng nghìn khách hàng và dự án lớn
            nhỏ trên toàn quốc.
          </p>
        </div>
        <div className="flex h-[300px] w-full items-center justify-center rounded-xl bg-slate-500 lg:basis-1/2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-white">
            <Play className="text-white" />
          </div>
        </div>
      </section>
      <section className="bg-slate-500">
        <div className="container flex flex-col px-2 py-10 md:flex-row md:items-center md:justify-between md:py-[100px]">
          <div className="basis-1/2">
            <div className="mb-4 flex items-center gap-2 text-primary">
              <span className="text-xl">✧</span>
              <span>FQA</span>
            </div>
            <h1 className="mb-8 text-4xl font-bold text-white">
              Hãy Đặt Câu Hỏi <br /> Cho Chúng Tôi
            </h1>
          </div>

          <Accordion
            type="single"
            collapsible
            className="basis-1/2 space-y-2 md:space-y-5"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Khang Minh Lighting cung cấp những loại đèn nào?
              </AccordionTrigger>
              <AccordionContent>
                Chúng tôi cung cấp các sản phẩm đa dạng như đèn LED chiếu sáng
                trong nhà, đèn LED chiếu sáng ngoài trời, đèn năng lượng mặt
                trời, đèn trang trí, và đèn chuyên dụng cho công nghiệp.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Các sản phẩm của Khang Minh Lighting có bảo hành không?
              </AccordionTrigger>
              <AccordionContent>
                Tất cả các sản phẩm đều đi kèm chính sách bảo hành từ 12-36
                tháng tùy thuộc vào từng loại đèn.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Đèn LED của Khang Minh Lighting có tiết kiệm điện hơn đèn thông
                thường không?
              </AccordionTrigger>
              <AccordionContent>
                Có, đèn LED của chúng tôi tiết kiệm đến 80% năng lượng so với
                đèn sợi đốt và có tuổi thọ cao gấp nhiều lần.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
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
            <h2 className="text-navy-900 text-3xl font-bold text-main md:text-4xl">
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
