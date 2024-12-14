import NextAuth, { Session } from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";

import { getUserById } from "@/data/user";
import { UserRole } from "@prisma/client";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
    error: "/auth-error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id as string);

      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      // TODO: Add 2FA check

      return true;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.role = existingUser.role;
      token.phone = existingUser.phone;
      token.address = existingUser.address;
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: {
        sub?: string;
        role?: UserRole;
        phone?: string;
        address?: string;
      };
    }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      if (token.phone && session.user) {
        session.user.phone = token.phone;
      }
      if (token.address && session.user) {
        session.user.address = token.address;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
