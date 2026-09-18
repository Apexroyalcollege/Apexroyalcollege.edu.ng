import SiteHeader from "./SiteHeader";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader/>{children}<Footer/></>;
}
