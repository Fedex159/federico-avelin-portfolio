import { CommonSection, CommonTitle } from "@/shared/components";
import { mixinButton } from "@/shared/styles/mixins";
import { SectionIdEnum } from "@/shared/types/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { INFO_LIST } from "./constants";
import { Classname, SC } from "./Contact.styles";

export const Contact = () => {
  const t = useTranslations("contact");

  return (
    <CommonSection className={Classname.Section} id={SectionIdEnum.CONTACT}>
      <CommonTitle className={Classname.Title}>{t("title")}</CommonTitle>
      <SC.InfoContainer>
        {INFO_LIST.map(({ alt, icon, url, translationKey }) => (
          <SC.InfoItem key={translationKey}>
            <Image
              className={Classname.InfoItemIcon}
              src={icon}
              alt={alt}
              width={50}
            />
            <Link
              className={Classname.InfoItemLink}
              href={url}
              target="_blank "
              rel="noopener noreferrer"
            >
              {t(translationKey)}
            </Link>
          </SC.InfoItem>
        ))}
      </SC.InfoContainer>
      <SC.Form className="group">
        <SC.Input
          maxLength={40}
          name="fullName"
          placeholder={t("form.fullName")}
          required
        />
        <SC.Input
          maxLength={100}
          name="email"
          placeholder={t("form.email")}
          required
          type="email"
        />
        <SC.Input
          maxLength={80}
          name="subject"
          placeholder={t("form.subject")}
          required
        />
        <SC.TextArea
          minLength={30}
          name="message"
          placeholder={t("form.message")}
          required
          rows="5"
        />
        <SC.SubmitButton type="submit" className={mixinButton}>
          {t("form.submit")}
        </SC.SubmitButton>
      </SC.Form>
    </CommonSection>
  );
};
