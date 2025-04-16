import tw, { clsx } from "@/shared/utils/tailwind";

const Section = clsx`
  flex
  flex-col
  items-center
`;

const ContainerMobileStyles = clsx`
  mb-5
  max-w-[400px]
  auto-rows-fr
`;

const ContainerDesktopStyles = clsx`
  md:mb-0
  md:max-w-4xl
  md:grid-cols-2
  md:border
  md:border-gray-500
  md:not-last:border-b-0
`;

const ProjectContainer = tw.div`
  ${() => ContainerMobileStyles}
  ${() => ContainerDesktopStyles}
  group/tech
  relative
  mx-auto
  grid
  first-of-type:mt-10
`;

const SwapButtonPositionStyles = clsx`
  absolute
  top-5
  right-5
  z-10
  aspect-square
  w-7
  md:hidden
`;

const ProjectSwapCardCheckbox = tw.input`
  ${() => SwapButtonPositionStyles}
  peer
  opacity-0
`;

const ProjectSwapCardLabel = tw.label`
  ${() => SwapButtonPositionStyles}
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

const ColMobileStyles = clsx`
  bg-secondary-background
  col-start-1
  row-start-1
  border
  border-gray-500
  p-2.5
  transition-transform
  duration-500
  backface-hidden
  perspective-distant
`;

const ColDesktopStyles = clsx`
  md:col-start-auto
  md:row-start-auto
  md:border-0
  md:p-5
`;

const ColInfoMobileStyles = clsx`
  rotate-y-180
  not-md:peer-checked:rotate-y-0
`;

const ColInfoDesktopStyles = clsx`
  md:rotate-y-0
  md:group-odd/tech:col-start-2
  md:group-even/tech:border-r
  md:group-even/tech:border-gray-500
`;

const ProjectColInfo = tw.div`
  ${() => ColMobileStyles}
  ${() => ColDesktopStyles}
  ${() => ColInfoMobileStyles}
  ${() => ColInfoDesktopStyles}
  grid
  grid-cols-2
  grid-rows-[auto_1fr_auto]
  gap-y-5
  not-md:rounded-2xl
`;

const ColImageMobileStyles = clsx`
  not-md:peer-checked:rotate-y-180
`;

const ProjectColImage = tw.div`
  ${() => ColMobileStyles}
  ${() => ColDesktopStyles}
  ${() => ColImageMobileStyles}
  flex
  items-center
  justify-center
  not-md:border-0
  not-md:p-0
  group-odd/tech:col-start-1
  group-odd/tech:row-start-1
  md:group-odd/tech:border-r
  md:group-odd/tech:border-gray-500
`;

const ProjectTitle = tw.h4`
  col-span-2
  mt-2
  text-2xl
  font-bold
  md:mt-0
`;

const ProjectDescription = tw.p`
  col-span-2
  row-start-2
  whitespace-pre-line
`;

const ProjectImage = clsx`
  h-full
  w-full
  rounded-2xl
  object-cover
`;

export const Classname = {
  Section,
  ProjectImage,
};

export const SC = {
  ProjectContainer,
  ProjectSwapCardCheckbox,
  ProjectSwapCardLabel,
  ProjectColInfo,
  ProjectColImage,
  ProjectTitle,
  ProjectDescription,
};
