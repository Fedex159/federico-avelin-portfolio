import { Header } from "@/shared/sections/Header";
import { Home } from "@/shared/sections/Home";
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
      </StyledMain>
    </>
  );
}
