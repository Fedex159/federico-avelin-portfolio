import { SectionIdEnum } from "@/shared/types/common";
import { Translations } from "@/shared/types/translations";

type NavLinks = Array<{
  sectionId: SectionIdEnum;
  translationKey: Translations<"header">;
}>;

export const NAV_LINKS: NavLinks = [
  {
    sectionId: SectionIdEnum.HOME,
    translationKey: "navlinks.home",
  },
  {
    sectionId: SectionIdEnum.ABOUT,
    translationKey: "navlinks.about",
  },
  {
    sectionId: SectionIdEnum.EXPERIENCE,
    translationKey: "navlinks.experience",
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
