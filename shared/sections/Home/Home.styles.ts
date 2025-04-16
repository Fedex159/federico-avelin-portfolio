import tw, { clsx } from "@/shared/utils/tailwind";

const Section = clsx`
  [&&]:min-h-home-height
  scroll-mt-header-height
  flex
  flex-col
  items-center
  justify-center
  gap-5
  bg-transparent
  md:flex-row-reverse
  md:justify-between
`;

const Image = clsx`
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

const Content = tw.div`
  flex
  flex-col
  gap-5
`;

const Title = tw.h1`
  text-6xl
  font-bold
`;

const Subtitle = tw.h2`
  text-primary
  text-xl
  font-bold
`;

const Description = tw.p`
  max-w-xl
`;

export const SC = {
  Content,
  Description,
  Subtitle,
  Title,
};

export const Classname = {
  Image,
  Section,
};
