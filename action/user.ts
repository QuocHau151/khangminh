"use server";

import { UserType } from "@/common/type";
import { db } from "@/lib/db";

export const updateUserProfile = async (value: UserType) => {
  try {
    await db.user.update({
      where: { email: value.email },
      data: {
        email: value.email,
        name: value.name,
        phone: value.phone,
        address: value.address,
      },
    });
    return { success: "Sửa thông tin thành công" };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { error: "Sửa thông tin thất bại" };
  }
};
export const getUserProfile = async (email: string) => {
  try {
    const user = await db.user.findFirst({
      where: { email: email },
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};
export const getUser = async () => {
  try {
    const user = await db.user.findMany();
    return user;
  } catch (error) {
    console.error(error);
  }
};
