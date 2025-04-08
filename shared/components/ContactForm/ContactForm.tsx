"use client";

import { sendContactForm } from "@/shared/actions/sendContactForm";
import { FormMessageState } from "@/shared/types/contactForm";
import { errorToast, successToast } from "@/shared/utils/toast";
import { useTranslations } from "next-intl";
import { ComponentProps, useActionState, useCallback, useEffect } from "react";
import { SC } from "./ContactForm.styles";

type Props = Omit<ComponentProps<"form">, "action">;

const INITIAL_STATE: FormMessageState = { status: null, timestamp: Date.now() };

export const ContactForm = ({ children }: Props) => {
  const t = useTranslations("contact.form");
  const [state, action, isPending] = useActionState(
    sendContactForm,
    INITIAL_STATE,
  );

  const { status, timestamp } = state || {};

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
    };

    const toastFn = showToastFnConfig[status];

    toastFn();
  }, [status, t, timestamp]);

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
