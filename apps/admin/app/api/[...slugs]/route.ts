import Elysia, { t } from "elysia";
import { cors } from "@elysiajs/cors";
import node from "@elysiajs/node";

import {
  cloneEnvironment,
  Environment,
  getEnvironments,
} from "@portofolio/internal/cms";

const app = new Elysia({
  adapter: node(),
  prefix: "/api",
})
  .use(
    cors({
      origin: /https:\/\/stage(-cms)?.cipriang-software.work/,
    }),
  )
  .get("environments", async () => {
    const envs = await getEnvironments();
    return envs.map((env) => env.name) as Environment[];
  })
  .post(
    "publish",
    async ({ body }) => {
      await cloneEnvironment(body.from, body.to);
    },
    {
      body: t.Object({
        from: t.Enum({
          [Environment.PRODUCTION]: Environment.PRODUCTION,
          [Environment.BACKUP_PRODUCTION]: Environment.BACKUP_PRODUCTION,
          [Environment.STAGING]: Environment.STAGING,
        }),
        to: t.Enum({
          [Environment.PRODUCTION]: Environment.PRODUCTION,
          [Environment.BACKUP_PRODUCTION]: Environment.BACKUP_PRODUCTION,
          [Environment.STAGING]: Environment.STAGING,
        }),
      }),
    },
  );
export type app = typeof app;

export const GET = app.fetch;
export const POST = app.fetch;
