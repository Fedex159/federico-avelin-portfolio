import tw, { clsx } from "@/shared/utils/tailwind";

const Section = clsx`
  flex
  flex-col
  items-center
  justify-center
  gap-10
`;

const Wrapper = tw.div`
  flex
  flex-col
  items-center
  justify-center
  gap-14
  border-l
  border-l-white
`;

const Article = tw.article`
  ml-5
  flex
  flex-col
  items-start
  gap-2
`;

const TimeLine = clsx`
  before:absolute
  before:top-1/2
  before:-left-5
  before:h-[1px]
  before:w-5
  before:bg-white
  before:text-white
  before:content-['']
`;

const TimeLineDot = clsx`
  after:absolute
  after:top-[calc(50%_-_8px)]
  after:-left-7.5
  after:h-4
  after:w-4
  after:rounded-full
  after:bg-white
  after:text-white
  after:content-['']
`;

const Time = tw.span`
  ${() => TimeLine}
  ${() => TimeLineDot}
  text-primary
  relative
  inline-block
  min-w-48
  rounded-3xl
  border
  border-gray-500
  px-2
  py-1
  text-center
`;

const Company = tw.h4`
  text-2xl
  font-semibold
`;

const Position = tw.h5``;

const Description = tw.p``;

export const SC = {
  Wrapper,
  Article,
  Time,
  Company,
  Position,
  Description,
};

export const Classname = {
  Section,
};
