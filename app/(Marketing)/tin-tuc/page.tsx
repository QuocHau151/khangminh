import BreadcrumbSection from "@/components/Breadcrumb";
import Image from "next/image";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function BLog() {
  return (
    <>
      <BreadcrumbSection
        image=""
        link="/tin-tuc"
        name="Tin Tức"
        description=" Cập nhật thông tin với các bài đăng mới nhất trên blog của chúng tôi"
        title="Tin Tức"
      />
      <section className="">
        <div className="container mx-auto w-full border-b-[1px] px-4 py-16">
          <div className="mb-6 flex items-center justify-center gap-2 text-primary">
            <span className="text-xl">✧</span>
            <span>Tin Tức và Bài Viết </span>
          </div>
          <div className="mx-auto mb-16 max-w-3xl text-center text-main">
            <h2 className="text-navy-900 mb-6 text-3xl font-bold md:text-4xl">
              Bài Viết Mới Nhất
            </h2>
            <p className="line-clamp-2 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
              quaerat. Consequuntur inventore magni ducimus tenetur iure odio
              consequatur asperiores repellat atque reiciendis ex nesciunt,
              eaque libero. Blanditiis vel harum perferendis.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-2 lg:gap-5">
            <div className="flex flex-col">
              <div className="h-[300px] rounded-2xl bg-slate-100 md:h-[500px] lg:h-full">
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
                <p className="line-clamp-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  modi obcaecati quibusdam animi ad minus aperiam vero, possimus
                  esse iusto laboriosam quisquam qui eius voluptatum ratione
                  dolorem ut repellat placeat.
                </p>
              </div>
            </div>
            <div className="grid gap-10 lg:grid lg:grid-cols-2">
              <div className="flex flex-col">
                <div className="h-[300px] rounded-2xl bg-slate-100 md:h-[500px] lg:h-[300px]">
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
                    possimus esse iusto laboriosam quisquam qui eius voluptatum
                    ratione dolorem ut repellat placeat.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="h-[300px] rounded-2xl bg-slate-100 md:h-[500px] lg:h-[300px]">
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
                    possimus esse iusto laboriosam quisquam qui eius voluptatum
                    ratione dolorem ut repellat placeat.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="h-[300px] rounded-2xl bg-slate-100 md:h-[500px] lg:h-[300px]">
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
                    possimus esse iusto laboriosam quisquam qui eius voluptatum
                    ratione dolorem ut repellat placeat.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="h-[300px] rounded-2xl bg-slate-100 md:h-[500px] lg:h-[300px]">
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
                    possimus esse iusto laboriosam quisquam qui eius voluptatum
                    ratione dolorem ut repellat placeat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Pagination className="mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
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
        </div>
      </section>
      <section className="container space-y-10 px-4 py-10">
        <h2 className="text-center text-[25px] font-bold text-main">
          Bài Viết Nổi Bật
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-y-10 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex flex-col">
              <div className="h-[300px] rounded-2xl bg-slate-100 md:h-[300px] lg:h-full">
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
                <p className="line-clamp-3 text-[13px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  modi obcaecati quibusdam animi ad minus aperiam vero, possimus
                  esse iusto laboriosam quisquam qui eius voluptatum ratione
                  dolorem ut repellat placeat.
                </p>
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
              <PaginationLink href="#">2</PaginationLink>
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
    </>
  );
}
