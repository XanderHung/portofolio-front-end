import { Stack } from "@chakra-ui/react";
import { Providers } from "../provider";
import { Header } from "../components";

export const metadata = {
  title: "Hung",
  description: "",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      {children}
    </Providers>
  );
}
