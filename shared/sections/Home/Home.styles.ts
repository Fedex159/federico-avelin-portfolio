import tw, { clsx } from "@/shared/utils/tailwind";

export const homeSectionClassname = clsx`
  flex
  flex-col
  items-center
  justify-center
  gap-5
  md:flex-row-reverse
  md:justify-between
  [&&]:min-h-[calc(100dvh_-_var(--header-height))]
`;

export const imageClassname = clsx`
  max-h-72
  min-h-72
  max-w-72
  min-w-72
  rounded-full
  object-cover
  lg:h-96
  lg:max-h-96
  lg:w-96
  lg:max-w-96
`;

export const StyledContent = tw.div`
  flex
  flex-col
  gap-5
`;

export const StyledIntro = tw.span`
  text-xl
  font-bold
`;

export const StyledTitle = tw.h1`
  text-6xl
  font-bold
`;

export const StyledSubtitle = tw.h2`
  text-xl
  font-bold
  text-(--color-primary)
`;

export const StyledDescription = tw.p`
  max-w-xl
`;
