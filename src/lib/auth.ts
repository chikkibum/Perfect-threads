import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/db";

const socialProviders: Record<string, { clientId: string; clientSecret: string }> = {};

// Add Google provider if credentials are available
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  console.log('Google provider is available');
  console.log(process.env.GOOGLE_CLIENT_ID);
  console.log(process.env.GOOGLE_CLIENT_SECRET);
  socialProviders.google = {
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  };
}

// Add GitHub provider if credentials are available
// if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
//   socialProviders.github = {
//     clientId: process.env.GITHUB_CLIENT_ID,
//     clientSecret: process.env.GITHUB_CLIENT_SECRET,
//   };
// }

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  socialProviders: Object.keys(socialProviders).length > 0 ? socialProviders : undefined,
  baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET || "change-this-secret-in-production",
  plugins: [
    nextCookies(), // Essential for Server Actions and RSC
  ],
});
