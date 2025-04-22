import { ImageAbout } from "@/public/assets";
import {
  CommonSection,
  CommonTitle,
  IncludeImageCheckbox,
} from "@/shared/components";
import { SectionIdEnum } from "@/shared/types/common";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { Classname, SC } from "./About.styles";
import { cookies } from "next/headers";
import { INCLUDE_IMAGE_COOKIE_KEY } from "@/shared/utils/constants";

const YEARS = new Date().getFullYear() - 2021;

const CV_LINKS_WITH_IMAGES = {
  es: "https://drive.google.com/file/d/16sHv4hiNX84BTQlRoA4N6rVChO4psBj7/view?usp=sharing",
  en: "https://drive.google.com/file/d/1a1fx5egnV0kW4Cks2csI4zJNYWUchadJ/view?usp=sharing",
};

const CV_LINKS_WITHOUT_IMAGES = {
  es: "https://drive.google.com/file/d/1fWybqQvBWSPCzC5C9im7sHYXhLb13nNX/view?usp=sharing",
  en: "https://drive.google.com/file/d/132GdtBtvVhUDqcWn8Qm2m3h-ejrNpps6/view?usp=sharing",
};

type Props = {
  locale: string;
};

export const About = async ({ locale }: Props) => {
  const [t, cookieStore] = await Promise.all([
    getTranslations("about"),
    cookies(),
  ]);

  const includeImageDefaultChecked =
    cookieStore.get(INCLUDE_IMAGE_COOKIE_KEY)?.value === "true";

  const key = locale as keyof typeof CV_LINKS_WITH_IMAGES;
  const cvUrlWithImage = CV_LINKS_WITH_IMAGES[key];
  const cvUrlWithoutImage = CV_LINKS_WITHOUT_IMAGES[key];

  return (
    <CommonSection className={Classname.Section} id={SectionIdEnum.ABOUT}>
      <Image
        unoptimized
        className={Classname.Image}
        src={ImageAbout}
        alt="developer-coding"
      />
      <CommonTitle className={Classname.Title}>{t("title")}</CommonTitle>
      <SC.Description>{t("description", { years: YEARS })}</SC.Description>
      <SC.DownloadButtonWrapper>
        <SC.ImageCheckboxLabel htmlFor="include-image">
          <IncludeImageCheckbox
            id="include-image"
            defaultChecked={includeImageDefaultChecked}
          />
          {t("includeImage")}
        </SC.ImageCheckboxLabel>
        <Link
          href={cvUrlWithoutImage}
          className={Classname.DownloadButtonWithoutImage}
          target="_blank"
        >
          {t("downloadCv")}
        </Link>
        <Link
          href={cvUrlWithImage}
          className={Classname.DownloadButtonWithImage}
          target="_blank"
        >
          {t("downloadCv")}
        </Link>
      </SC.DownloadButtonWrapper>
    </CommonSection>
  );
};
