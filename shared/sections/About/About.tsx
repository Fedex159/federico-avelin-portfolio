import { about } from "@/public/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  aboutImageClassname,
  StyledContainer,
  StyledDescription,
  StyledDownloadButton,
  StyledTitle,
} from "./About.styles";

export const About = () => {
  const t = useTranslations("about");

  return (
    <StyledContainer id="about">
      <Image
        className={aboutImageClassname}
        src={about}
        alt="developer-coding"
      />
      <StyledTitle>{t("title")}</StyledTitle>
      <StyledDescription>{t("description")}</StyledDescription>
      <StyledDownloadButton>{t("downloadCv")}</StyledDownloadButton>
    </StyledContainer>
  );
};
