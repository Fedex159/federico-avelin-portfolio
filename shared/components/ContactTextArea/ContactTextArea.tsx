import { FormFieldsEnum } from "@/shared/types/contactForm";
import { useTranslations } from "next-intl";
import { ComponentProps } from "react";
import { ContactRequiredMessage } from "../ContactRequiredMessage/ContactRequiredMessage";
import { FloatLabel } from "../FloatLabel/FloatLabel";
import { SC } from "./ContactTextArea.styles";

type Props = Omit<
  ComponentProps<"textarea">,
  "name" | "placeholder" | "children"
> & {
  fieldName: FormFieldsEnum;
};

export const ContactTextArea = ({
  fieldName,
  minLength = 0,
  ...props
}: Props) => {
  const t = useTranslations("contact");
  const placeholder = t("form.message");

  return (
    <FloatLabel
      errorMessage={
        <>
          <ContactRequiredMessage formField={fieldName} />
          <SC.RequiredMinMessage>
            {t("form.validation.min", { min: minLength })}
          </SC.RequiredMinMessage>
        </>
      }
      fieldName={fieldName}
      input={
        <SC.TextArea
          minLength={minLength}
          name={fieldName}
          placeholder={placeholder}
          required
          rows="5"
          {...props}
        />
      }
      placeholder={placeholder}
    />
  );
};
