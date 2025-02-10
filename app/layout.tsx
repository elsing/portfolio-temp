import "./globals.css";

import { Signika_Negative } from "@next/font/google";

const font = Signika_Negative({
  weight: "400",
  variable: "--font-signika-negative",
  display: "optional",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
