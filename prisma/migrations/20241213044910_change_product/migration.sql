/*
  Warnings:

  - You are about to drop the column `danh_muc` on the `Product` table. All the data in the column will be lost.
  - Changed the type of `ten_danh_muc` on the `Category` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "Product_danh_muc_idx";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "ten_danh_muc",
ADD COLUMN     "ten_danh_muc" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "danh_muc";

-- DropEnum
DROP TYPE "CategoryType";

-- CreateIndex
CREATE INDEX "Product_id_danh_muc_ten_san_pham_idx" ON "Product"("id_danh_muc", "ten_san_pham");
