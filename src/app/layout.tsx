import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const bristol = localFont({
  src: "../fonts/Bristol-Regular.otf",
  variable: "--font-bristol",
});

export const metadata: Metadata = {
  title: "ABOE",
  description: "Aboe Restaurant Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${caveat.variable} ${bristol.variable} antialiased font-caveat`}
      >
        {children}
      </body>
    </html>
  );
}
