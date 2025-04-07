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
import Link from "next/link";

const YEARS = new Date().getFullYear() - 2021;

const CV_LINKS = {
  es: "https://drive.google.com/file/d/1YknFJJPy9p7QfCPxH8VmoF-c3WZ5aU0J/view?usp=sharing",
  en: "https://drive.google.com/file/d/1SbpEuBhXu_17X85YFGg7HFuSl8UqvuGB/view?usp=sharing",
};

type Props = {
  locale: string;
};

export const About = ({ locale }: Props) => {
  const t = useTranslations("about");
  const cvUrl = CV_LINKS[locale as keyof typeof CV_LINKS];

  return (
    <CommonSection className={aboutSectionClassname} id={SectionIdEnum.ABOUT}>
      <Image
        className={aboutImageClassname}
        src={about}
        alt="developer-coding"
      />
      <CommonTitle>{t("title")}</CommonTitle>
      <StyledDescription>
        {t("description", { years: YEARS })}
      </StyledDescription>
      <Link href={cvUrl} className={classNameDownloadButton} target="_blank">
        {t("downloadCv")}
      </Link>
    </CommonSection>
  );
};
