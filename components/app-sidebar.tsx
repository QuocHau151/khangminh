"use client";

import * as React from "react";
import { Home, List, Package, User } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import Link from "next/link";
import Image from "next/image";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center bg-white">
                  <div className="size-10">
                    <Image
                      src="/assets/images/logo/logo.png"
                      alt="Logo"
                      className="h-full w-full"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Khang Minh</span>
                  <span className="truncate text-xs">Lighting</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="space-y-3 px-4 pt-5">
        <Link href="/admin" className="flex items-center gap-3">
          <Home className="size-5" />
          <span className="text-[16px] font-semibold">Dashboard</span>
        </Link>
        <Link href="/admin/users" className="flex items-center gap-3">
          <User className="size-5" />
          <span className="text-[16px] font-semibold">User</span>
        </Link>
        <Link href="/admin/category" className="flex items-center gap-3">
          <List className="size-5" />
          <span className="text-[16px] font-semibold">Category</span>
        </Link>
        <Link href="/admin/products" className="flex items-center gap-3">
          <Package className="size-5" />
          <span className="text-[16px] font-semibold">Products</span>
        </Link>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
