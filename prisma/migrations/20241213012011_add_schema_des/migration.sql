/*
  Warnings:

  - Made the column `ten_san_pham` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `so_luong` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "mo_ta_san_pham" TEXT,
ALTER COLUMN "ten_san_pham" SET NOT NULL,
ALTER COLUMN "so_luong" SET NOT NULL;
