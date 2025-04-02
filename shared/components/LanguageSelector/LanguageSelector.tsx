"use client";

import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { argFlag, usaFlag } from "@/public/assets";
import Image from "next/image";
import { useCallback, useMemo } from "react";
import { Container, FlagButton } from "./LanguageSelector.styles";

export const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = useCallback(
    ({ newLocale }: { newLocale: Locale }) => {
      router.replace(`${pathname}${window.location.hash}` as never, {
        locale: newLocale,
      });
    },
    [pathname, router],
  );

  const languageOptions = useMemo(
    () => [
      {
        alt: "Español",
        onClick: () => handleClick({ newLocale: "es" }),
        src: argFlag,
      },
      {
        alt: "English",
        onClick: () => handleClick({ newLocale: "en" }),
        src: usaFlag,
      },
    ],
    [handleClick],
  );

  return (
    <Container>
      {languageOptions.map(({ alt, onClick, src }, index) => (
        <FlagButton key={`${alt}-${index.toString()}`} onClick={onClick}>
          <Image className="h-full" src={src} alt={alt} width={30} />
        </FlagButton>
      ))}
    </Container>
  );
};
