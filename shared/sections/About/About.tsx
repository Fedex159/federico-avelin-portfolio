import { about } from "@/public/assets";
import { CommonSection } from "@/shared/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  aboutImageClassname,
  classNameDownloadButton,
  aboutSectionClassname,
  StyledDescription,
  StyledTitle,
} from "./About.styles";

export const About = () => {
  const t = useTranslations("about");

  return (
    <CommonSection className={aboutSectionClassname} id="about">
      <Image
        className={aboutImageClassname}
        src={about}
        alt="developer-coding"
      />
      <StyledTitle>{t("title")}</StyledTitle>
      <StyledDescription>{t("description")}</StyledDescription>
      <button className={classNameDownloadButton}>{t("downloadCv")}</button>
    </CommonSection>
  );
};
