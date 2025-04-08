"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { SC } from "./SubmitContactFormButton.styles";
import { useTranslations } from "next-intl";

type Props = Omit<ComponentProps<"button">, "children" | "type">;

export const SubmitContactFormButton = (props: Props) => {
  const t = useTranslations("contact.form");
  const { pending } = useFormStatus();

  return (
    <SC.SubmitButton disabled={pending} {...props} type="submit">
      {pending ? t("submitting") : t("submit")}
    </SC.SubmitButton>
  );
};
