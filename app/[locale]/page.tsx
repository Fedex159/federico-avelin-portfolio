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
import { ActiveSectionStoreProvider } from "@/shared/providers/active-section-store-provider";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <Header />
      <ActiveSectionStoreProvider>
        <StyledMain>
          <Home />
          <About locale={locale} />
          <Technologies />
          <Projects />
          <Contact />
        </StyledMain>
      </ActiveSectionStoreProvider>
      <Footer />
    </>
  );
}
