import tw, { clsx } from "@/shared/utils/tailwind";

export const StyledContainer = tw.section`
  grid
  min-h-dvh
  grid-cols-[1fr_auto_1fr]
  items-center
  gap-y-10
  bg-(--secondary-background)
  px-[calc((100%_-_var(--container-7xl))_/_2)]
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
  mt-2.5
  h-96
  w-80
  object-cover
  shadow-[-5px_-5px_var(--main-background),-13px_-13px_0px_-2px_var(--color-primary)]
  md:col-start-1
  md:col-end-1
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

export const StyledDownloadButton = tw.button`
  w-52
  max-w-52
  cursor-pointer
  rounded-2xl
  bg-(--color-primary)
  p-3
  font-bold
  text-black
  hover:shadow-(--box-shadow-button)
  md:mt-auto
`;
