import { useTranslations } from "next-intl";
import { ComponentProps } from "react";
import { Classname, InputFieldName, SC } from "./ContactInput.styles";
import { FormFieldsEnum } from "@/shared/types/contactForm";
import { Translations } from "@/shared/types/translations";
import { ContactRequiredMessage } from "../ContactRequiredMessage/ContactRequiredMessage";

type Props = {
  fieldName: InputFieldName;
} & ComponentProps<"input">;

const PLACEHOLDER_CONFIG: Record<
  InputFieldName,
  Translations<"contact.form">
> = {
  [FormFieldsEnum.FULLNAME]: "fullName",
  [FormFieldsEnum.EMAIL]: "email",
  [FormFieldsEnum.SUBJECT]: "subject",
};

export const ContactInput = ({ fieldName, children, ...props }: Props) => {
  const t = useTranslations("contact.form");
  const placeholderTranslationKey = PLACEHOLDER_CONFIG[fieldName];

  return (
    <>
      <SC.Input
        className={Classname.InputPeer(fieldName)}
        name={fieldName}
        placeholder={t(placeholderTranslationKey)}
        required
        {...props}
      />
      <ContactRequiredMessage formField={fieldName} />
      {children}
    </>
  );
};
