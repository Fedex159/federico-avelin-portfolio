import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Projects,
  Technologies,
} from "@/shared/sections";
import { setRequestLocale } from "next-intl/server";
import { StyledMain } from "./page.styles";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <Header />
      <StyledMain>
        <Home />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </StyledMain>
      <Footer />
    </>
  );
}
