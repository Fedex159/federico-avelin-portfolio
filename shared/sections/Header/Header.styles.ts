import { SectionIdEnum } from "@/shared/types/common";
import tw, { clsx } from "@/shared/utils/tailwind";

const Header = tw.header`
  bg-header-background
  h-header-height
  sticky
  top-0
  z-10
  mx-auto
  flex
  w-full
  items-center
  px-(--padding-inline)
  text-white
`;

const HamburgerMenu = tw.label`
  absolute
  top-1/2
  right-[10px]
  z-10
  block
  h-10
  w-10
  -translate-y-1/2
  cursor-pointer
  bg-[url('/assets/hamburger.png')]
  bg-contain
  bg-[40px]
  bg-repeat-x
  md:hidden
`;

const Nav = tw.nav`
  bg-header-background
  fixed
  top-20
  right-0
  ml-auto
  flex
  h-full
  w-full
  max-w-2xs
  translate-x-full
  flex-col
  items-center
  justify-start
  gap-2.5
  transition-[translate]
  duration-300
  peer-checked:translate-x-0
  md:static
  md:ml-auto
  md:w-auto
  md:max-w-full
  md:translate-x-0!
  md:flex-row
  md:gap-10
  md:bg-transparent
`;

const activeSectionClasses: Record<SectionIdEnum, string> = {
  [SectionIdEnum.HOME]:
    "group-[[data-active-section=home]]:text-primary group-[[data-active-section=home]]:font-bold",
  [SectionIdEnum.ABOUT]:
    "group-[[data-active-section=about]]:text-primary group-[[data-active-section=about]]:font-bold",
  [SectionIdEnum.TECHNOLOGIES]:
    "group-[[data-active-section=technologies]]:text-primary group-[[data-active-section=technologies]]:font-bold",
  [SectionIdEnum.PROJECTS]:
    "group-[[data-active-section=projects]]:text-primary group-[[data-active-section=projects]]:font-bold",
  [SectionIdEnum.CONTACT]:
    "group-[[data-active-section=contact]]:text-primary group-[[data-active-section=contact]]:font-bold",
};

export const getNavLinkClassname = (sectionId: SectionIdEnum) => {
  const activeSectionClass = activeSectionClasses[sectionId];

  return clsx`
  ${activeSectionClass}
  after:block
  after:h-0.5
  after:w-0
  after:bg-white
  after:transition-[width]
  after:duration-300
  hover:after:w-full
`;
};

export const SC = {
  Header,
  HamburgerMenu,
  Nav,
};
