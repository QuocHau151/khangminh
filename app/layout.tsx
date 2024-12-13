import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["vietnamese"],
});

export const metadata: Metadata = {
  title: "Khang Minh Lighting",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Suspense>
          <SessionProvider>{children}</SessionProvider>
        </Suspense>
      </body>
    </html>
  );
}
