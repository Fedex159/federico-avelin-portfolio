import { logo } from "@/public/assets";
import { HamburgerCheckbox, LanguageSelector } from "@/shared/components";
import { SectionIdEnum } from "@/shared/types/common";
import { Translations } from "@/shared/types/translations";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  getNavLinkClassname,
  StyledHamburgerMenu,
  StyledHeader,
  StyledNav,
} from "./Header.styles";

type NavLinks = Array<{
  sectionId: SectionIdEnum;
  translationKey: Translations<"header">;
}>;

const NAV_LINKS: NavLinks = [
  {
    sectionId: SectionIdEnum.HOME,
    translationKey: "navlinks.home",
  },
  {
    sectionId: SectionIdEnum.ABOUT,
    translationKey: "navlinks.about",
  },
  {
    sectionId: SectionIdEnum.TECHNOLOGIES,
    translationKey: "navlinks.technologies",
  },
  {
    sectionId: SectionIdEnum.PROJECTS,
    translationKey: "navlinks.projects",
  },
  {
    sectionId: SectionIdEnum.CONTACT,
    translationKey: "navlinks.contact",
  },
];

export const Header = () => {
  const t = useTranslations("header");

  return (
    <StyledHeader>
      <Link href={NAV_LINKS[0].sectionId}>
        <Image src={logo} alt="logo" />
      </Link>
      <StyledHamburgerMenu htmlFor="hamburger-menu" />
      <HamburgerCheckbox id="hamburger-menu" />
      <StyledNav>
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
      </StyledNav>
    </StyledHeader>
  );
};
