import NextAuth, { NextAuthResult } from "next-auth";
import AuthentikProvider from "next-auth/providers/authentik";

declare module "next-auth" {
  interface User {
    name: string;
    email: string;
  }
}

const result = NextAuth({
  providers: [AuthentikProvider],
});

export const auth: NextAuthResult["auth"] = result.auth;
export const signIn: typeof result.signIn = result.signIn;
export const handlers = result.handlers;
export const signOut = result.signOut;
