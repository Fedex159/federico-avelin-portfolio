import { Link } from "@/i18n/routing";
import { logo } from "@/public/assets";
import { HamburgerCheckbox, LanguageSelector } from "@/shared/components";
import { SectionIdEnum } from "@/shared/types/common";
import { Translations } from "@/shared/types/translations";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getNavLinkClassname, SC } from "./Header.styles";

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
    <SC.Header>
      <Link href={`#${NAV_LINKS[0].sectionId}`}>
        <Image src={logo} alt="logo" width={87} />
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
    </SC.Header>
  );
};
