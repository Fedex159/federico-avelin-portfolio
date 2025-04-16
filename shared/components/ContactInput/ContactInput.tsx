import { FormFieldsEnum } from "@/shared/types/contactForm";
import { Translations } from "@/shared/types/translations";
import { useTranslations } from "next-intl";
import { ComponentProps } from "react";
import { ContactRequiredMessage } from "../ContactRequiredMessage/ContactRequiredMessage";
import { FloatLabel } from "../FloatLabel/FloatLabel";
import { Classname, InputFieldName, SC } from "./ContactInput.styles";

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
  const placeholder = t(placeholderTranslationKey);

  return (
    <FloatLabel
      errorMessage={
        <>
          <ContactRequiredMessage formField={fieldName} />
          {children}
        </>
      }
      fieldName={fieldName}
      input={
        <SC.Input
          className={Classname.InputPeer(fieldName)}
          id={fieldName}
          name={fieldName}
          placeholder={placeholder}
          required
          {...props}
        />
      }
      placeholder={placeholder}
    />
  );
};
