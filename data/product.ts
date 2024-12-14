import { db } from "@/lib/db";
// chỉ dùng ở use server cho các server action
export const getProductById = async (id: string) => {
  try {
    const product = await db.product.findUnique({
      where: { id },
    });
    return product;
  } catch {
    return null;
  }
};
