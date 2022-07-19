// src/pages/_app.tsx
import { withTRPC } from "@trpc/next";
import type { AppRouter } from "./api/trpc/[trpc]";
import type { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withTRPC<AppRouter>({
  config: () => ({
    url: "/api/trpc",
    transformer: superjson,
  }),
  ssr: false,
})(MyApp);
