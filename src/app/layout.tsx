import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "M3 by Alloy",
  description: "Introducing M3, the Miracle Menopause Moisturizer by Alloy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
