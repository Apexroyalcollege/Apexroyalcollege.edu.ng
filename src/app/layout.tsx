import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "APEX ROYAL COLLEGE | Benin City",
    template: "%s | APEX ROYAL COLLEGE",
  },
  description:
    "APEX ROYAL COLLEGE — Building exceptional minds through academic excellence, technology, character and purposeful innovation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
