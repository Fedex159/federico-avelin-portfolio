import { profileImage } from "@/public/assets";
import { CommonSection } from "@/shared/components";
import { mixinButton } from "@/shared/styles/mixins";
import { SectionIdEnum } from "@/shared/types/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  homeSectionClassname,
  imageClassname,
  StyledContent,
  StyledDescription,
  StyledSubtitle,
  StyledTitle,
} from "./Home.styles";
import Link from "next/link";

export const Home = () => {
  const t = useTranslations("home");

  return (
    <CommonSection className={homeSectionClassname} id={SectionIdEnum.HOME}>
      <Image
        className={imageClassname}
        src={profileImage}
        alt="profile-user-image"
      />
      <StyledContent>
        <StyledTitle>{t("title")}</StyledTitle>
        <StyledSubtitle>{t("subtitle")}</StyledSubtitle>
        <StyledDescription>{t("description")}</StyledDescription>
        <Link href={`#${SectionIdEnum.CONTACT}`} className={mixinButton}>
          {t("chat")}
        </Link>
      </StyledContent>
    </CommonSection>
  );
};
