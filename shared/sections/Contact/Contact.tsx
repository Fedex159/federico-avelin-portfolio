import {
  CommonSection,
  CommonTitle,
  ContactForm,
  ContactInput,
  ContactRequiredMessage,
} from "@/shared/components";
import { SectionIdEnum } from "@/shared/types/common";
import { FormFieldsEnum } from "@/shared/types/contactForm";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { INFO_LIST } from "./constants";
import { Classname, SC } from "./Contact.styles";

const MIN_TEXT_AREA_LENGTH = 30;

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
      <ContactForm>
        <ContactInput fieldName={FormFieldsEnum.FULLNAME} maxLength={40} />
        <ContactInput
          fieldName={FormFieldsEnum.EMAIL}
          maxLength={100}
          type="email"
        >
          <SC.EmailInvalidFormatMessage>
            {t("form.validation.email")}
          </SC.EmailInvalidFormatMessage>
        </ContactInput>
        <ContactInput fieldName={FormFieldsEnum.SUBJECT} maxLength={80} />
        <SC.TextArea
          minLength={MIN_TEXT_AREA_LENGTH}
          name={FormFieldsEnum.MESSAGE}
          placeholder={t("form.message")}
          required
          rows="5"
        />
        <ContactRequiredMessage formField={FormFieldsEnum.MESSAGE} />
        <SC.TextAreaRequiredMinMessage>
          {t("form.validation.min", { min: MIN_TEXT_AREA_LENGTH })}
        </SC.TextAreaRequiredMinMessage>
      </ContactForm>
    </CommonSection>
  );
};
