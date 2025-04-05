import { About, Header, Home } from "@/shared/sections";
import { setRequestLocale } from "next-intl/server";
import { StyledMain } from "./page.styles";
import { Technologies } from "@/shared/sections/Technologies/Technologies";

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
      </StyledMain>
    </>
  );
}
