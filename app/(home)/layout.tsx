import { HomeProviders } from "./home-provider";

export const metadata = {
  title: "Hung",
  description: "",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <HomeProviders>{children}</HomeProviders>;
}
