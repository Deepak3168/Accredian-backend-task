/*
  Warnings:

  - A unique constraint covering the columns `[refereeEmail]` on the table `Referral` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `courseName` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Referral` ADD COLUMN `courseName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Referral_refereeEmail_key` ON `Referral`(`refereeEmail`);
