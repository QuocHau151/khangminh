import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              alt=""
              src="/assets/images/logo/logo.png"
              width={300}
              height={300}
              className="h-[100px] w-auto"
            />
            <p className="text-sm text-gray-600">
              Giới thiệu về công ty hoặc slogan của công ty...
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <HiPhone className="text-xl" />
                <span>0123456789</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <HiMail className="text-xl" />
                <span>khangminhlighting@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-600">
                <HiLocationMarker className="mt-1 text-xl" />
                <span>123 Main Street, Suite 101 Cityville, CA 90001</span>
              </div>
            </div>
          </div>

          {/* Tim Nhanh */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Tìm Nhanh</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Tin Tức
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Ve Cong Ty */}
          <div>
            <h3 className="mb-6 text-xl font-medium">Về Công Ty</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Về Công Ty
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Liên Hệ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="mb-6 text-xl font-medium">Đăng kí nhận tin</h3>
            <p className="mb-4 text-gray-600">
              Đăng ký bản tin của chúng tôi để nhận được thông tin cập nhật và
              tin tức mới nhất mỗi ngày.
            </p>
            <div className="mb-6 flex gap-2">
              <input
                type="email"
                placeholder="Your email adress"
                className="flex-1 rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="rounded-lg bg-orange-500 px-4 py-1 text-[14px] text-white transition-colors hover:bg-orange-600 lg:py-4">
                Gửi
              </button>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram size={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <FaLinkedin size={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <FaFacebook size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
      </div>
      <div className="mt-16 border-t bg-primary py-4">
        <p className="text-center text-white">
          © 2024 Khang Minh Lighting. All rights reserved. Design By
          Quochau.com
        </p>
      </div>
    </footer>
  );
}
