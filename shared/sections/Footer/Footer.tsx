import { useTranslations } from "next-intl";
import { SC } from "./Footer.styles";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <SC.Footer>{t("copyright", { year: new Date().getFullYear() })}</SC.Footer>
  );
};
