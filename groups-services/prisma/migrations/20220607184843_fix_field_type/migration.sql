/*
  Warnings:

  - You are about to alter the column `code` on the `groups` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "groups" ALTER COLUMN "code" SET DATA TYPE INTEGER;
