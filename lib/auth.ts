import { auth } from "@/auth";
import { cookies } from "next/headers";

export const getCookies = async () => {
  const cookieStore = await cookies();
  const name = cookieStore.get("theme");
  return name;
};
export const useGetSession = async () => {
  const session = await auth();
  return session?.user;
};
