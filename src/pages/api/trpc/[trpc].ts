// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from "@trpc/server/adapters/next";
import superjson from "superjson";
import * as trpc from "@trpc/server";

import { env } from "../../../env/server.mjs";

const appRouter = trpc
  .router()
  .transformer(superjson)
  .query("getDbUrl", {
    resolve: () => env.DATABASE_URL,
  });

// export API handler
export default createNextApiHandler({
  router: appRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
