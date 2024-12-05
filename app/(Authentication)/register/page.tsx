import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Đăng Ký</CardTitle>
          <CardDescription>
            Điền thông tin để đăng ký vào tài khoản của bạn
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="khangminhlight@gmail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Họ Tên</Label>
              <Input
                id="email"
                type="email"
                placeholder="Nguyễn Văn A"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Số điện thoại</Label>
              <Input
                id="email"
                type="email"
                placeholder="0123456789"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mật khẩu</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Xác nhận mật khẩu</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Đăng ký
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Bạn đã có tài khoản?{" "}
            <Link href="#" className="underline">
              Đăng nhập
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
