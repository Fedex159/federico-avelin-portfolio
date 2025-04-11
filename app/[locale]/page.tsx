import { ActiveSectionStoreProvider } from "@/shared/providers/active-section-store-provider";
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Home,
  Projects,
  Technologies,
} from "@/shared/sections";
import { setRequestLocale } from "next-intl/server";
import { SC } from "./page.styles";

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
        <SC.Main>
          <Home />
          <About locale={locale} />
          <Experience />
          <Technologies />
          <Projects />
          <Contact />
        </SC.Main>
      </ActiveSectionStoreProvider>
      <Footer />
    </>
  );
}
