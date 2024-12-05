import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
export default function BreadcrumbSection({
  name,
  description,
  link,
  title,
  image,
}: {
  name: string;
  description: string;
  link: string;
  title: string;
  image: string;
}) {
  return (
    <section
      className={`h-[150px] w-full ${image ? "bg-[]" : "bg-slate-200"} pt-[70px] md:h-[350px]`}
    >
      <div className="container flex h-full items-center justify-center px-4 md:justify-between">
        <div className="">
          <div className="mb-4 hidden items-center gap-2 italic text-primary md:flex">
            <span className="text-xs">✧</span>
            <span>{title}</span>
          </div>
          <h2 className="hidden max-w-xl text-4xl font-semibold text-white md:block">
            {description}
          </h2>
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang Chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={link}>{name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
}
