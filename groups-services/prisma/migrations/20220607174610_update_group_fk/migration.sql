/*
  Warnings:

  - You are about to drop the column `groupId` on the `group_accounts` table. All the data in the column will be lost.
  - Added the required column `group_id` to the `group_accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "group_accounts" DROP CONSTRAINT "group_accounts_groupId_fkey";

-- AlterTable
ALTER TABLE "group_accounts" DROP COLUMN "groupId",
ADD COLUMN     "group_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "group_accounts" ADD CONSTRAINT "group_accounts_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
