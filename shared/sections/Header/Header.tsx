import { logo } from "@/public/assets";
import { HamburgerCheckbox } from "@/shared/components/HamburgerCheckbox";
import { LanguageSelector } from "@/shared/components/LanguageSelector";
import { Translations } from "@/shared/types/translations";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  navLinkClassname,
  StyledHamburgerMenu,
  StyledHeader,
  StyledNav,
} from "./Header.styles";

const NAV_LINKS: Array<{ href: string; translationKey: Translations }> = [
  { href: "#home", translationKey: "header.navlinks.home" },
  { href: "#about", translationKey: "header.navlinks.about" },
  { href: "#technologies", translationKey: "header.navlinks.technologies" },
  { href: "#projects", translationKey: "header.navlinks.projects" },
  { href: "#contact", translationKey: "header.navlinks.contact" },
];

export const Header = () => {
  const t = useTranslations();

  return (
    <StyledHeader>
      <Link href={NAV_LINKS[0].href}>
        <Image src={logo} alt="logo" />
      </Link>
      <StyledHamburgerMenu htmlFor="hamburger-menu" />
      <HamburgerCheckbox id="hamburger-menu" />
      <StyledNav>
        {NAV_LINKS.map(({ href, translationKey }, index) => (
          <Link
            className={navLinkClassname}
            href={href}
            key={`${translationKey}-${index.toString()}`}
          >
            {t(translationKey)}
          </Link>
        ))}
        <LanguageSelector />
      </StyledNav>
    </StyledHeader>
  );
};
