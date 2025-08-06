import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL:
    (process.env.NEXT_PUBLIC_APP_URL as string) || "http://localhost:3000",
});

export const { signIn, signOut, useSession } = authClient;
