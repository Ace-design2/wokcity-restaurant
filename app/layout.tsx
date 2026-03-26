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
import Footer from "@/components/Footer";
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased bg-neutral-50 min-h-screen flex flex-col overflow-x-hidden w-full`}>
        <NextTopLoader 
          color="#dc2626" 
          height={3} 
          showSpinner={false} 
          initialPosition={0.3} 
          crawlSpeed={200}
          speed={400}
          easing="ease"
          shadow="0 0 10px #dc2626,0 0 5px #dc2626"
        />
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
