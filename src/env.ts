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
  },
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
