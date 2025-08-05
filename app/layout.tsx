import type { Metadata } from "next";
import { unstable_ViewTransition as ViewTransition } from "react";

import "./globals.css";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Ike AI • Real-time AI Teaching Platform",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ViewTransition>
            {auth}
            {children}
          </ViewTransition>
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
