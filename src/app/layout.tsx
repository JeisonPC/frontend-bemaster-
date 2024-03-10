import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./background.scss";
import "./globals.css";
import Star from "@/components/Star";
import Navbar  from "@/components/Navbar";
import { AuthProvider } from "@/context/authContext/authProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

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
    <html lang="es">
      <body className={montserrat.className}>
        <AuthProvider>
          <Navbar />
          <Star />
          {(children as React.ReactElement)}
        </AuthProvider>
      </body>
    </html>
  );
}
