// @ts-check
import { z } from "zod";

export const serverSchema = z.object({
  DATABASE_URL: z.string().url(),
});

export const clientSchema = z.object({
  NEXT_PUBLIC_PUSHER_KEY: z.string(),
});

// Next forces you to manually destruct the process.env object due to security concerns.
export const clientEnv = {
  NEXT_PUBLIC_PUSHER_KEY: process.env.NEXT_PUBLIC_PUSHER_KEY,
};
