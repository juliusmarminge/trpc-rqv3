// @ts-check
import { serverSchema } from "./schema.mjs";
import { env as clientEnv } from "./client.mjs";

const formatErrors = (
  /** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */
  errors
) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && "_errors" in value)
        return `${name}: ${value._errors.join(", ")}\n`;
    })
    .filter(Boolean);

const serverEnv = serverSchema.safeParse(process.env);

if (!serverEnv.success) {
  console.error(
    "❌ Invalid environment variables:\n",
    ...formatErrors(serverEnv.error.format())
  );
  throw new Error("Invalid environment variables");
}

for (let key of Object.keys(serverEnv.data)) {
  if (key.startsWith("NEXT_PUBLIC_")) {
    console.warn("❌ You are exposing a serverside env-variable:", key);

    throw new Error("You are exposing a serverside env-variable");
  }
}

export const env = { ...serverEnv.data, ...clientEnv };
