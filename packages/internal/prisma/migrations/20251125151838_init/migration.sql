-- CreateEnum
CREATE TYPE "SkillType" AS ENUM ('OTHER', 'MAIN');

-- CreateTable
CREATE TABLE "skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "SkillType" NOT NULL,

    CONSTRAINT "skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" TEXT NOT NULL,
    "left" JSONB,
    "right" JSONB,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "skill_name_key" ON "skill"("name");
