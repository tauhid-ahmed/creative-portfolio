import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {},
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_AUTHOR_NAME: z.string().min(1),
    NEXT_PUBLIC_AUTHOR_FIRST_NAME: z.string().min(1),
    NEXT_PUBLIC_AUTHOR_LAST_NAME: z.string().min(1),
    NEXT_PUBLIC_AUTHOR_TITLE: z.string().min(1),
    NEXT_PUBLIC_AUTHOR_PHONE: z.string().min(1),
    NEXT_PUBLIC_AUTHOR_EMAIL: z.string().min(1),
    NEXT_PUBLIC_AUTHOR_LINKEDIN: z.string().min(1),
    NEXT_PUBLIC_AUTHOR_GITHUB: z.string().min(1),
    NEXT_PUBLIC_AUTHOR_X: z.string().min(1),
    NEXT_PUBLIC_AUTHOR_LOCATION: z.string().min(1),
    NEXT_PUBLIC_AUTHOR_BIO: z.string().min(1),
    NEXT_PUBLIC_AUTHOR_LIVE_RESUME: z.string().min(1),
  },
  /*
   * Specify what values should be validated by your schemas above.
   *
   * If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
   * For Next.js >= 13.4.4, you can use the experimental__runtimeEnv option and
   * only specify client-side variables.
   */
  runtimeEnv: {
    NEXT_PUBLIC_AUTHOR_NAME: process.env.NEXT_PUBLIC_AUTHOR_NAME,
    NEXT_PUBLIC_AUTHOR_FIRST_NAME: process.env.NEXT_PUBLIC_AUTHOR_FIRST_NAME,
    NEXT_PUBLIC_AUTHOR_LAST_NAME: process.env.NEXT_PUBLIC_AUTHOR_LAST_NAME,
    NEXT_PUBLIC_AUTHOR_TITLE: process.env.NEXT_PUBLIC_AUTHOR_TITLE,
    NEXT_PUBLIC_AUTHOR_PHONE: process.env.NEXT_PUBLIC_AUTHOR_PHONE,
    NEXT_PUBLIC_AUTHOR_EMAIL: process.env.NEXT_PUBLIC_AUTHOR_EMAIL,
    NEXT_PUBLIC_AUTHOR_LINKEDIN: process.env.NEXT_PUBLIC_AUTHOR_LINKEDIN,
    NEXT_PUBLIC_AUTHOR_GITHUB: process.env.NEXT_PUBLIC_AUTHOR_GITHUB,
    NEXT_PUBLIC_AUTHOR_X: process.env.NEXT_PUBLIC_AUTHOR_X,
    NEXT_PUBLIC_AUTHOR_LOCATION: process.env.NEXT_PUBLIC_AUTHOR_LOCATION,
    NEXT_PUBLIC_AUTHOR_BIO: process.env.NEXT_PUBLIC_AUTHOR_BIO,
    NEXT_PUBLIC_AUTHOR_LIVE_RESUME: process.env.NEXT_PUBLIC_AUTHOR_LIVE_RESUME,
  },
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
