import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Oswald} from "next/font/google"

const oswald = Oswald({
  subsets:["latin"],
  weight:["200","300","400","500","600","700"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen w-full bg-deepblue md:px-20 px-3 ${oswald.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
