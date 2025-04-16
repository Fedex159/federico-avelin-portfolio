"use client";

import { sendContactForm } from "@/shared/actions/sendContactForm";
import { FormMessageState } from "@/shared/types/contactForm";
import { errorToast, successToast, warningToast } from "@/shared/utils/toast";
import { useLocale, useTranslations } from "next-intl";
import { ComponentProps, useActionState, useCallback, useEffect } from "react";
import { SC } from "./ContactForm.styles";
import { Translations } from "@/shared/types/translations";

type Props = Omit<ComponentProps<"form">, "action">;

const INITIAL_STATE: FormMessageState = { status: null, timestamp: Date.now() };

export const ContactForm = ({ children }: Props) => {
  const t = useTranslations("contact.form");
  const locale = useLocale();

  const [state, action, isPending] = useActionState(
    sendContactForm,
    INITIAL_STATE,
  );

  const { invalidFields, status, timestamp } = state || {};

  const getFormattedFields = useCallback(() => {
    const fieldsFormatter = new Intl.ListFormat(locale, {
      style: "long",
      type: "conjunction",
    });

    const translatedFields =
      invalidFields?.map((fieldTranslationKey) =>
        t(fieldTranslationKey as Translations<"contact.form">).replace("*", ""),
      ) || [];

    const formattedFields = fieldsFormatter.format(translatedFields);

    return formattedFields;
  }, [invalidFields, locale, t]);

  const handleActionMessage = useCallback(() => {
    if (!status || !timestamp) return;

    const showToastFnConfig = {
      success: () =>
        successToast({
          message: t("success.message"),
          title: t("success.title"),
        }),
      error: () =>
        errorToast({ message: t("error.message"), title: t("error.title") }),
      warning: () => {
        const formattedFields = getFormattedFields();

        warningToast({
          message: t("warning.message", { fields: formattedFields }),
          title: t("warning.title"),
        });
      },
    };

    const toastFn = showToastFnConfig[status];

    toastFn();
  }, [getFormattedFields, status, t, timestamp]);

  useEffect(handleActionMessage, [handleActionMessage]);

  return (
    <SC.Form action={action}>
      {children}
      <SC.SubmitButton disabled={isPending} type="submit">
        {isPending ? t("submitting") : t("submit")}
      </SC.SubmitButton>
    </SC.Form>
  );
};
