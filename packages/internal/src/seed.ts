import { prisma, SkillType } from "./client";
import { Environment } from "./types";
import { getFileUrl } from "./utils";

async function main() {
  console.info("Starting seeding");

  console.info("Seeding environments");

  const envs = await prisma.environment.createManyAndReturn({
    data: [{ name: "PRODUCTION" }, { name: "STAGING" }],
  });

  const envMap = envs.reduce(
    (final, current) => {
      final[current.name] = current.id;
      return final;
    },
    {} as Record<string, string>
  );

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
        create: {
          name: obj.name,
          type: obj.type,
          environment: { connect: { id: envMap[Environment.PRODUCTION] } },
        },
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
        imageURL: "https://www.ensemblesoftware.ro/"
      },
      right: {
        description:
          "Prioritizing the implementation of new features and testing them using technologies such as Angular and .NET Core.",
        image: trimble?.url ?? "",
        imageURL: "https://www.trimble.com/en"
      },
    },
  ];

  await Promise.all(
    projects.map((project) =>
      prisma.project.create({
        data: {
          environment: {
            connect: {
              id: envMap[Environment.PRODUCTION],
            },
          },
          left: {
            description: project.left.description,
            image: project.left.image,
            imageURL: project.left.imageURL
          },
          right: {
            description: project.right.description,
            image: project.right.image,
            imageURL: project.right.imageURL
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
