import tw, { clsx } from "@/shared/utils/tailwind";

export const StyledHeader = tw.header`
  sticky
  top-0
  mx-auto
  flex
  h-20
  w-full
  items-center
  bg-(--header-background)
  px-[calc((100%_-_var(--container-7xl))_/_2)]
  text-white
`;

export const StyledHamburgerMenu = tw.label`
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

export const StyledNav = tw.nav`
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
  bg-(--header-background)
  px-2.5
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

export const navLinkClassname = clsx`
  after:block
  after:h-0.5
  after:w-0
  after:bg-white
  after:transition-[width]
  after:duration-300
  hover:after:w-full
`;
