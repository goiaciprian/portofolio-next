import { prisma, SkillType } from "./client";
import { getFileUrl } from "./utils";

async function main() {
  console.info("Starting seeding");
  console.info("Seeding skills");

  const skills = {
    main: ["NextJS", "React", "NestJS", "PostgreSQL", "AWS"],
    other: ["Angular", ".NET", "Java", "MongoDB"],
  };

  await Promise.all(
    [
      ...skills.main.map((skill) => ({ name: skill, type: SkillType.MAIN })),
      ...skills.other.map((skill) => ({ name: skill, type: SkillType.OTHER })),
    ].map((obj) =>
      prisma.skill.upsert({
        where: { name: obj.name },
        create: { name: obj.name, type: obj.type },
        update: { name: obj.name, type: obj.type },
      })
    )
  );

  console.info("Upserted skills");

  console.info("Seeding projects");
  console.info("Getting images");

  const ensemble = await getFileUrl("ensemble.svg");
  const trimble = await getFileUrl("trimble.svg");

  const projects = [
    {
      left: {
        description:
          "Maintenance and development of new features with a focus on performance and scalability. Predominantly working with ReactJS, NestJS, and AWS services.",
        image: ensemble?.url ?? "",
      },
      right: {
        description:
          "Prioritizing the implementation of new features and testing them using technologies such as Angular and .NET Core.",
        image: trimble?.url ?? "",
      },
    },
  ];

  await Promise.all(
    projects.map((project) =>
      prisma.project.create({
        data: {
          left: {
            description: project.left.description,
            image: project.left.image,
          },
          right: {
            description: project.right.description,
            image: project.right.image,
          },
        },
      })
    )
  );

  console.info("Done");
}

main().finally(async () => {
  await prisma.$disconnect();
});
