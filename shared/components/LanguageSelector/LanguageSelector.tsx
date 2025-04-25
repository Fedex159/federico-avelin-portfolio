"use client";

import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { ChangeEvent, useCallback, useTransition } from "react";
import { SC } from "./LanguageSelector.styles";
import { useLocale } from "next-intl";

export const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const defaultChecked = currentLocale === "en";

  const handleSwitchLanguage = useCallback(
    ({ newLocale }: { newLocale: Locale }) => {
      startTransition(() => {
        router.replace(`${pathname}${window.location.hash}`, {
          locale: newLocale,
          scroll: false,
        });
      });
    },
    [pathname, router],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.currentTarget.checked;
      const newLocale = isChecked ? "en" : "es";

      handleSwitchLanguage({ newLocale });
    },
    [handleSwitchLanguage],
  );

  return (
    <SC.Container htmlFor="language-selector">
      <SC.Checkbox
        defaultChecked={defaultChecked}
        disabled={isPending}
        id="language-selector"
        onChange={handleChange}
        type="checkbox"
      />
      <SC.Flag />
      <SC.EnglishLabel>EN</SC.EnglishLabel>
      <SC.SpanishLabel>ES</SC.SpanishLabel>
    </SC.Container>
  );
};
