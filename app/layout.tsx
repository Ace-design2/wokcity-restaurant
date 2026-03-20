import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WokCity E-commerce",
  description: "Product listing page for WokCity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-neutral-50 min-h-screen flex flex-col overflow-x-hidden w-full`}>
        {children}
      </body>
    </html>
  );
}
