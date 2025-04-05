import tw, { clsx } from "@/shared/utils/tailwind";

export const technologiesSectionClassname = clsx`
  flex
  flex-col
  items-center
  justify-center
`;

export const technologiesTitleClassname = clsx`
  mt-0
  [&&]:mb-7
`;

export const StyledTechContainer = tw.div`
  grid
  grid-cols-1
  items-center
  justify-center
  gap-10
  md:grid-cols-2
`;

export const StyledItemsContainer = tw.div`
  nth-[4]:border-purple-tech
  nth-[4]:[&_h4]:text-purple-tech
  flex
  h-full
  max-w-96
  flex-col
  items-center
  justify-between
  rounded-3xl
  border-2
  bg-(--main-background)
  px-0
  py-2.5
  shadow-(--box-shadow-tech)
  nth-[1]:border-amber-400
  nth-[2]:border-cyan-700
  nth-[3]:border-neutral-700
  md:p-2.5
  nth-[1]:[&_h4]:text-amber-400
  nth-[2]:[&_h4]:text-sky-400
`;

export const StyledCategoryTitle = tw.h4`
  text-center
  text-2xl
  font-bold
`;

export const StyledItemsList = tw.ul`
  flex
  flex-wrap
  content-center
  items-center
  justify-center
  gap-2.5
`;

export const StyledItem = tw.li`
  flex
  h-24
  w-24
  flex-col
  items-center
  justify-center
  gap-2.5
`;

export const StyledTechName = tw.span`
  text-center
  text-sm
  font-semibold
`;
