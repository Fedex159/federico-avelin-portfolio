import { about } from "@/public/assets";
import { CommonSection, CommonTitle } from "@/shared/components";
import { SectionIdEnum } from "@/shared/types/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  aboutImageClassname,
  aboutSectionClassname,
  classNameDownloadButton,
  StyledDescription,
} from "./About.styles";

export const About = () => {
  const t = useTranslations("about");

  return (
    <CommonSection className={aboutSectionClassname} id={SectionIdEnum.ABOUT}>
      <Image
        className={aboutImageClassname}
        src={about}
        alt="developer-coding"
      />
      <CommonTitle>{t("title")}</CommonTitle>
      <StyledDescription>{t("description")}</StyledDescription>
      <button className={classNameDownloadButton}>{t("downloadCv")}</button>
    </CommonSection>
  );
};
