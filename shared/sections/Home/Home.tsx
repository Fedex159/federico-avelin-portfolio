import { Link } from "@/i18n/routing";
import { ImageProfile } from "@/public/assets";
import { CommonSection } from "@/shared/components";
import { mixinButton } from "@/shared/styles/mixins";
import { SectionIdEnum } from "@/shared/types/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Classname, SC } from "./Home.styles";

export const Home = () => {
  const t = useTranslations("home");

  return (
    <CommonSection className={Classname.Section} id={SectionIdEnum.HOME}>
      <Image
        alt="profile-user-image"
        className={Classname.Image}
        priority
        src={ImageProfile}
      />
      <SC.Content>
        <SC.Title>{t("title")}</SC.Title>
        <SC.Subtitle>{t("subtitle")}</SC.Subtitle>
        <SC.Description>{t("description")}</SC.Description>
        <Link href={`#${SectionIdEnum.CONTACT}`} className={mixinButton}>
          {t("chat")}
        </Link>
      </SC.Content>
    </CommonSection>
  );
};
