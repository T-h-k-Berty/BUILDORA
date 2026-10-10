import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BUILDORA | Built with Intention",
    template: "%s | BUILDORA",
  },
  description:
    "Explore BUILDORA's architectural construction, commercial building and renovation concepts. Thoughtful planning. Precise execution. Lasting results.",
  applicationName: "BUILDORA",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f1eb",
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