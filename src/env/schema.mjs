// @ts-check
import { z } from "zod";

export const serverSchema = z.object({
  DATABASE_URL: z.string().url(),
});

export const clientSchema = z.object({
  NEXT_PUBLIC_PUSHER_KEY: z.string(),
});
