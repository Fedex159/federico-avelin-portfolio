import { mixinButton } from "@/shared/styles/mixins";
import tw, { clsx } from "@/shared/utils/tailwind";

export const StyledContainer = tw.section`
  grid
  min-h-dvh
  grid-cols-[1fr_auto_1fr]
  items-center
  gap-y-10
  bg-(--secondary-background)
  px-(--padding-inline)
  py-8
  *:col-start-2
  *:col-end-2
  md:grid-cols-2
  md:content-center
  md:gap-x-10
  md:*:row-start-1
`;

export const aboutImageClassname = clsx`
  mx-auto
  h-96
  w-80
  object-cover
  shadow-[-5px_-5px_var(--main-background),-13px_-13px_0px_-2px_var(--color-primary)]
  md:col-start-1
  md:col-end-1
  md:mt-2.5
  lg:scale-150
`;

export const StyledTitle = tw.h3`
  text-2xl
  font-bold
  md:mb-auto
`;

export const StyledDescription = tw.p`
  max-w-[400px]
  whitespace-pre-line
  md:my-24
`;

export const classNameDownloadButton = clsx`
  ${mixinButton}
  md:mt-auto
`;
