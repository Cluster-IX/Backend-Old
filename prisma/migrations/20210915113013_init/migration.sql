/*
  Warnings:

  - You are about to drop the column `isCorrect` on the `Jawaban` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Jawaban` DROP COLUMN `isCorrect`,
    ADD COLUMN `jawaban_benar` BOOLEAN NOT NULL DEFAULT false;
