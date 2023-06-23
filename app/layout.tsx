"use client";
import { ColorModeScript } from "@chakra-ui/react";
import { Providers } from "./provider";
import theme from "@/theme";

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
