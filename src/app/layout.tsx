import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "../providers/query-provider";
import { Toaster } from "../components/ui/sonner";

export const metadata: Metadata = {
  title: "Katsera",
  description: "Katsera Creator & Fan Platform",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>

        <QueryProvider>
          {children}
        </QueryProvider>

        <Toaster />

      </body>
    </html>
  );
}