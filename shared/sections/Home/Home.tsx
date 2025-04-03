import { profileImage } from "@/public/assets";
import { CommonSection } from "@/shared/components";
import { mixinButton } from "@/shared/styles/mixins";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  homeSectionClassname,
  imageClassname,
  StyledContent,
  StyledDescription,
  StyledIntro,
  StyledSubtitle,
  StyledTitle,
} from "./Home.styles";

export const Home = () => {
  const t = useTranslations("home");

  return (
    <CommonSection className={homeSectionClassname} id="home">
      <Image
        className={imageClassname}
        src={profileImage}
        alt="profile-user-image"
      />
      <StyledContent>
        <StyledIntro>{t("intro")}</StyledIntro>
        <StyledTitle>{t("title")}</StyledTitle>
        <StyledSubtitle>{t("subtitle")}</StyledSubtitle>
        <StyledDescription>{t("description")}</StyledDescription>
        <button className={mixinButton}>{t("hireMe")}</button>
      </StyledContent>
    </CommonSection>
  );
};
