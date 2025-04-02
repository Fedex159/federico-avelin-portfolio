import { profileImage } from "@/public/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  imageClassname,
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledHireButton,
  StyledIntro,
  StyledSubtitle,
  StyledTitle,
} from "./Home.styles";

export const Home = () => {
  const t = useTranslations();

  return (
    <StyledContainer id="home">
      <Image
        className={imageClassname}
        src={profileImage}
        alt="profile-user-image"
      />
      <StyledContent>
        <StyledIntro>{t("home.intro")}</StyledIntro>
        <StyledTitle>{t("home.title")}</StyledTitle>
        <StyledSubtitle>{t("home.subtitle")}</StyledSubtitle>
        <StyledDescription>{t("home.description")}</StyledDescription>
        <StyledHireButton>{t("home.hireMe")}</StyledHireButton>
      </StyledContent>
    </StyledContainer>
  );
};
