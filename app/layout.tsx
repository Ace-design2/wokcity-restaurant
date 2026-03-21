import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "WokCity E-commerce",
  description: "Product listing page for WokCity",
};

import { CartProvider } from "@/contexts/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased bg-neutral-50 min-h-screen flex flex-col overflow-x-hidden w-full`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
