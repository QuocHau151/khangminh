import BreadcrumbSection from "@/components/Breadcrumb";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Share2,
  User,
  Youtube,
} from "lucide-react";

import React from "react";

export default function GioiThieu() {
  return (
    <>
      <BreadcrumbSection
      image=""
        link="/lien-he"
        name="Liên Hệ"
        description=" Kết nối với chúng tôi để được hỗ trợ Ngay"
        title="Liên Hệ Với Chúng Tôi"
      />
      <section className="w-full py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Image */}
            <div className="aspect-square rounded-lg bg-gray-200 lg:aspect-auto lg:h-full" />

            {/* Contact Form */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-orange-500">
                <span className="text-xl">✧</span>
                <span>Liên Hệ</span>
              </div>

              <h2 className="text-navy-900 text-3xl font-bold md:text-4xl">
                Hãy Gửi Thông Tin Cho
                <br />
                Chúng Tôi
              </h2>

              <p className="text-gray-600">
                Fill out the form below, call us, or visit one of our re here to
                provide quick and friendly service. Your satisfaction is our
                priority, and we look forward to hearing from you!
              </p>

              <form className="space-y-4">
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

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-600"
                >
                  Gửi Thông Tin
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container flex flex-col items-center justify-center gap-20 px-4 py-10 md:flex-row md:justify-between lg:justify-around">
          <div className="flex flex-col items-center gap-5 md:gap-10">
            <div className="flex size-20 items-center justify-center rounded-2xl bg-slate-100 shadow-xl">
              <Phone size={30} className="text-primary" />
            </div>
            <p className="text-[18px] font-semibold text-primary">0123456789</p>
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-10">
            <div className="flex size-20 items-center justify-center rounded-2xl bg-slate-100 shadow-xl">
              <Mail size={30} className="text-primary" />
            </div>
            <p className="text-[18px] font-semibold text-primary">
              khangminhlighting@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-10">
            <div className="flex size-20 items-center justify-center rounded-2xl bg-slate-100 shadow-xl">
              <Share2 size={30} className="text-primary" />
            </div>
            <div className="flex items-center gap-3 text-[18px] font-semibold text-primary">
              <Facebook size={20} className="" />
              <Instagram size={20} className="" />
              <Youtube size={20} className="" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-5 py-10">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4372.401040048855!2d106.73561267546629!3d10.862913557591618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175277baa14db1f%3A0xfec8cdadab425c6f!2sC%C3%B4ng%20Ty%20TNHH%20KHANG%20MINH%20LIGHTING!5e1!3m2!1sen!2s!4v1733212939944!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}
