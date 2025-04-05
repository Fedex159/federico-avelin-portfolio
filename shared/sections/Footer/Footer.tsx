import { useTranslations } from "next-intl";
import { StyledFooter } from "./Footer.styles";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <StyledFooter>
      {t("copyright", { year: new Date().getFullYear() })}
    </StyledFooter>
  );
};
