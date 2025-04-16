import {
  CommonSection,
  CommonTitle,
  ContactForm,
  ContactInput,
  ContactTextArea,
} from "@/shared/components";
import { SectionIdEnum } from "@/shared/types/common";
import { FormFieldsEnum } from "@/shared/types/contactForm";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { INFO_LIST } from "./constants";
import { Classname, SC } from "./Contact.styles";
import { FIELD_LENGTHS } from "@/shared/schemas/validationSchemaContactForm";

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
        <ContactInput
          fieldName={FormFieldsEnum.FULLNAME}
          maxLength={FIELD_LENGTHS[FormFieldsEnum.FULLNAME].max}
        />
        <ContactInput
          fieldName={FormFieldsEnum.EMAIL}
          maxLength={FIELD_LENGTHS[FormFieldsEnum.EMAIL].max}
          type="email"
        >
          <SC.EmailInvalidFormatMessage>
            {t("form.validation.email")}
          </SC.EmailInvalidFormatMessage>
        </ContactInput>
        <ContactInput
          fieldName={FormFieldsEnum.SUBJECT}
          maxLength={FIELD_LENGTHS[FormFieldsEnum.SUBJECT].max}
        />
        <ContactTextArea
          fieldName={FormFieldsEnum.MESSAGE}
          minLength={FIELD_LENGTHS[FormFieldsEnum.MESSAGE].min}
        />
      </ContactForm>
    </CommonSection>
  );
};
