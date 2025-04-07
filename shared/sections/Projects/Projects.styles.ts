import tw, { clsx } from "@/shared/utils/tailwind";

export const projectsSectionClassname = clsx`
  flex
  flex-col
  items-center
`;

export const projectTitleClassname = clsx`
  mt-20
`;

const projectContainerMobileStyles = clsx`
  mb-5
  max-w-[400px]
  auto-rows-fr
`;

const projectContainerDesktopStyles = clsx`
  md:mb-0
  md:max-w-4xl
  md:grid-cols-2
  md:border
  md:border-gray-500
  md:not-last:border-b-0
`;

export const StyledProjectContainer = tw.div`
  ${() => projectContainerMobileStyles}
  ${() => projectContainerDesktopStyles}
  group/tech
  relative
  mx-auto
  grid
  first-of-type:mt-10
`;

const swapButtonPosition = clsx`
  absolute
  top-5
  right-5
  z-10
  aspect-square
  w-7
  md:hidden
`;

export const StyledProjectSwapCardCheckbox = tw.input`
  ${() => swapButtonPosition}
  peer
  opacity-0
`;

export const StyledProjectSwapCardLabel = tw.label`
  ${() => swapButtonPosition}
  cursor-pointer
  rounded-full
  border-2
  border-white
  bg-[url('/assets/icons/iconRightArrow.svg')]
  bg-contain
  bg-center
  bg-no-repeat
  transition-all
  duration-500
  not-peer-checked:animate-pulse
  peer-checked:bg-[url('/assets/icons/iconClose.svg')]
`;

const colMobileStyles = clsx`
  col-start-1
  row-start-1
  border
  border-gray-500
  bg-(--secondary-background)
  p-2.5
  transition-transform
  duration-500
  backface-hidden
  perspective-distant
`;

const colDesktopStyles = clsx`
  md:col-start-auto
  md:row-start-auto
  md:border-0
  md:p-5
`;

const colInfoMobileStyles = clsx`
  rotate-y-180
  not-md:peer-checked:rotate-y-0
`;

const colInfoDesktopStyles = clsx`
  md:rotate-y-0
  md:group-odd/tech:col-start-2
  md:group-even/tech:border-r
  md:group-even/tech:border-gray-500
`;

export const StyledColInfo = tw.div`
  ${() => colMobileStyles}
  ${() => colDesktopStyles}
  ${() => colInfoMobileStyles}
  ${() => colInfoDesktopStyles}
  grid
  grid-cols-2
  grid-rows-[auto_1fr_auto]
  gap-y-5
`;

const colImageMobileStyles = clsx`
  not-md:peer-checked:rotate-y-180
`;

export const StyledColImage = tw.div`
  ${() => colMobileStyles}
  ${() => colDesktopStyles}
  ${() => colImageMobileStyles}
  flex
  items-center
  justify-center
  group-odd/tech:col-start-1
  group-odd/tech:row-start-1
  group-odd/tech:border-r
  group-odd/tech:border-gray-500
`;

export const StyledProjectTitle = tw.h4`
  col-span-2
  mt-2
  text-2xl
  font-bold
  md:mt-0
`;

export const StyledProjectDescription = tw.p`
  col-span-2
  row-start-2
`;

export const projectImageClassname = clsx`
  rounded-2xl
`;
