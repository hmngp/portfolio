import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hemang Patel",
  description: "IT student. JCU Brisbane.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmMono.variable}>
      <body className="font-mono">
        <a
          href="#internships"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:m-0 focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:rounded focus:border focus:border-[var(--border)] focus:bg-bg focus:px-3 focus:py-2 focus:text-xs focus:text-surface"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
