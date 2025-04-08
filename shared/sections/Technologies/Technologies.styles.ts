import tw, { clsx } from "@/shared/utils/tailwind";

const Section = clsx`
  flex
  flex-col
  items-center
  justify-center
`;

const Title = clsx`
  mt-0
  [&&]:mb-7
`;

const Container = tw.div`
  grid
  grid-cols-1
  items-center
  justify-center
  gap-10
  md:grid-cols-2
`;

const ItemsContainer = tw.div`
  nth-[4]:border-purple-tech
  nth-[4]:[&_h4]:text-purple-tech
  bg-main-background
  shadow-tech
  flex
  h-full
  max-w-96
  flex-col
  items-center
  justify-between
  rounded-3xl
  border-2
  px-0
  py-2.5
  nth-[1]:border-amber-400
  nth-[2]:border-cyan-700
  nth-[3]:border-neutral-700
  md:p-2.5
  nth-[1]:[&_h4]:text-amber-400
  nth-[2]:[&_h4]:text-sky-400
`;

const ItemsCategoryTitle = tw.h4`
  text-center
  text-2xl
  font-bold
`;

const ItemsList = tw.ul`
  flex
  flex-wrap
  content-center
  items-center
  justify-center
  gap-2.5
`;

const Item = tw.li`
  flex
  h-24
  w-24
  flex-col
  items-center
  justify-center
  gap-2.5
`;

const ItemTechName = tw.span`
  text-center
  text-sm
  font-semibold
`;

export const SC = {
  Container,
  ItemsContainer,
  ItemsCategoryTitle,
  ItemsList,
  Item,
  ItemTechName,
};

export const Classname = {
  Section,
  Title,
};
