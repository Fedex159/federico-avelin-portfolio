import { FormFieldsEnum } from "@/shared/types/contactForm";
import { useTranslations } from "next-intl";
import { SC } from "./ContactRequiredMessage.styles";

type Props = {
  formField: FormFieldsEnum;
};

export const ContactRequiredMessage = ({ formField }: Props) => {
  const t = useTranslations("contact.form.validation");

  return <SC.Message $formField={formField}>{t("required")}</SC.Message>;
};
