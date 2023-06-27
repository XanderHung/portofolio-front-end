"use client";
import { ColorModeScript } from "@chakra-ui/react";
import { Providers } from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
