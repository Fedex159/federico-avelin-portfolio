"use client";

import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useCallback, useMemo, useTransition } from "react";
import { SC } from "./LanguageSelector.styles";

export const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleClick = useCallback(
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

  const languageOptions = useMemo(
    () => [
      {
        flagId: "Español",
        isArgFlag: true,
        onClick: () => handleClick({ newLocale: "es" }),
      },
      {
        flagId: "English",
        isArgFlag: false,
        onClick: () => handleClick({ newLocale: "en" }),
      },
    ],
    [handleClick],
  );

  return (
    <SC.Container>
      {languageOptions.map(({ flagId, isArgFlag, onClick }, index) => (
        <SC.FlagButton
          aria-label={flagId}
          disabled={isPending}
          $isArgFlag={isArgFlag}
          key={`${flagId}-${index.toString()}`}
          onClick={onClick}
        />
      ))}
    </SC.Container>
  );
};
