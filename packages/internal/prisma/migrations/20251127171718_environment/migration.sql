/*
  Warnings:

  - Added the required column `environment_id` to the `project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `environment_id` to the `skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "project" ADD COLUMN     "environment_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "skill" ADD COLUMN     "environment_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "environment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "environment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "environment_name_key" ON "environment"("name");

-- AddForeignKey
ALTER TABLE "skill" ADD CONSTRAINT "skill_environment_id_fkey" FOREIGN KEY ("environment_id") REFERENCES "environment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_environment_id_fkey" FOREIGN KEY ("environment_id") REFERENCES "environment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
