import { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  address: string;
  phone: string;
  role: UserRole;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    user: ExtendedUser;
  }
}
