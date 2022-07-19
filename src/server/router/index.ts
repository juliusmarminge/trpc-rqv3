// src/server/router/index.ts
import superjson from "superjson";
import * as trpc from "@trpc/server";

import { env } from "../../env/server.mjs";

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .query("getDbUrl", {
    resolve: () => env.DATABASE_URL,
  });

// export type definition of API
export type AppRouter = typeof appRouter;
