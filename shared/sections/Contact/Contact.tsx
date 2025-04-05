import { CommonSection, CommonTitle } from "@/shared/components";
import { mixinButton } from "@/shared/styles/mixins";
import { SectionIdEnum } from "@/shared/types/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { INFO_LIST } from "./constants";
import {
  contactSectionClassname,
  contactTitleClassname,
  infoItemIconClassname,
  infoItemLinkClassname,
  StyledForm,
  StyledInfoContainer,
  StyledInfoItem,
  StyledInput,
  StyledSubmitButton,
  StyledTextArea,
} from "./Contact.styles";

export const Contact = () => {
  const t = useTranslations("contact");

  return (
    <CommonSection
      className={contactSectionClassname}
      id={SectionIdEnum.CONTACT}
    >
      <CommonTitle className={contactTitleClassname}>{t("title")}</CommonTitle>
      <StyledInfoContainer>
        {INFO_LIST.map(({ alt, icon, url, translationKey }) => (
          <StyledInfoItem key={translationKey}>
            <Image
              className={infoItemIconClassname}
              src={icon}
              alt={alt}
              width={50}
            />
            <Link
              className={infoItemLinkClassname}
              href={url}
              target="_blank "
              rel="noopener noreferrer"
            >
              {t(translationKey)}
            </Link>
          </StyledInfoItem>
        ))}
      </StyledInfoContainer>
      <StyledForm className="group">
        <StyledInput
          maxLength={40}
          name="fullName"
          placeholder={t("form.fullName")}
          required
        />
        <StyledInput
          maxLength={100}
          name="email"
          placeholder={t("form.email")}
          required
          type="email"
        />
        <StyledInput
          maxLength={80}
          name="subject"
          placeholder={t("form.subject")}
          required
        />
        <StyledTextArea
          minLength={30}
          name="message"
          placeholder={t("form.message")}
          required
          rows="5"
        />
        <StyledSubmitButton type="submit" className={mixinButton}>
          {t("form.submit")}
        </StyledSubmitButton>
      </StyledForm>
    </CommonSection>
  );
};
