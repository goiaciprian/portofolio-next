/*
  Warnings:

  - A unique constraint covering the columns `[name,environment_id]` on the table `skill` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "skill_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "skill_name_environment_id_key" ON "skill"("name", "environment_id");
