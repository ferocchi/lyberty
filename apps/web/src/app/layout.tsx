import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter font - Primary UI and fallback font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lyberty™ - The AI Venture Engine for Builders Who Think Bigger",
  description:
    "Automate the Venture. Amplify the Vision. The AI Engine for Builders Who Think Bigger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
        {/* Satoshi font from Fontshare CDN */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2,3,4,5,6,7,8,9&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
