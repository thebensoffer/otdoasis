import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OTD Oasis — A Safe Harbor for the OTD Community",
  description:
    "OTD Oasis is a nonprofit supporting people who have left Orthodox Judaism with resources, community, and a sense of belonging.",
  openGraph: {
    title: "OTD Oasis — A Safe Harbor for the OTD Community",
    description:
      "Supporting people who have left Orthodox Judaism with resources, community, and belonging.",
    url: "https://otdoasis.org",
    siteName: "OTD Oasis",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
