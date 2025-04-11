import { Link } from "@/i18n/routing";
import { ImageLogo } from "@/public/assets";
import {
  HamburgerCheckbox,
  LanguageSelector,
  ProgressBar,
} from "@/shared/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getNavLinkClassname, SC } from "./Header.styles";
import { NAV_LINKS } from "./constants";

export const Header = () => {
  const t = useTranslations("header");

  return (
    <SC.Header>
      <Link href={`#${NAV_LINKS[0].sectionId}`}>
        <Image src={ImageLogo} alt="logo" width={87} />
      </Link>
      <SC.HamburgerMenu htmlFor="hamburger-menu" />
      <HamburgerCheckbox id="hamburger-menu" aria-label="hamburger-menu" />
      <SC.Nav>
        {NAV_LINKS.map(({ sectionId, translationKey }, index) => (
          <Link
            className={getNavLinkClassname(sectionId)}
            href={`#${sectionId}`}
            key={`${translationKey}-${index.toString()}`}
          >
            {t(translationKey)}
          </Link>
        ))}
        <LanguageSelector />
      </SC.Nav>
      <ProgressBar />
    </SC.Header>
  );
};
