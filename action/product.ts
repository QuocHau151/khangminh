"use server";

import { ProductType } from "@/common/type";
import { db } from "@/lib/db";

export const createProduct = async (value: ProductType) => {
  try {
    const product = await db.product.create({
      data: {
        ten_san_pham: value.ten_san_pham,
        gia_san_pham: value.gia_san_pham,
        so_luong: value.so_luong,
        danh_muc: {
          connect: {
            id: value.id_danh_muc || "1",
          },
        },
        thuoc_tinh_khac: {
          che_do_mau: "RGB",
          chip_led: "5050",
          doan_cat: "5cm",
        },
        // Remove id_danh_muc as it's already handled by danh_muc.connect
      },
    });
    return product;
  } catch (error) {
    console.error(error);
  }
};
export const getAllProduct = async () => {
  try {
    const products = await db.product.findMany({
      include: {
        danh_muc: true,
      },
    });
    return products;
  } catch (error) {
    console.error(error);
  }
};
export const getProductById = async (id: string) => {
  try {
    const product = await db.product.findUnique({
      where: {
        id,
      },
    });
    return product;
  } catch (error) {
    console.error(error);
  }
};
