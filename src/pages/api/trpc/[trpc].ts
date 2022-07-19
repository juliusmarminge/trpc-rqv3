// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from "@trpc/server/adapters/next";
import superjson from "superjson";
import * as trpc from "@trpc/server";

import { env } from "../../../env/server.mjs";

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .query("getDbUrl", {
    resolve: () => env.DATABASE_URL,
  });

// export API handler
export default createNextApiHandler({
  router: appRouter,
});

// src/server/router/index.ts

// export type definition of API
export type AppRouter = typeof appRouter;
