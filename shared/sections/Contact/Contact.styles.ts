import tw, { clsx } from "@/shared/utils/tailwind";

const Section = clsx`
  flex
  flex-col
  items-center
  justify-center
  gap-10
  md:grid
  md:grid-cols-2
  md:grid-rows-[min-content_min-content]
  md:content-center
  md:items-start
`;

const Title = clsx`
  md:col-span-2
  md:col-start-1
  md:self-end
  md:text-center
`;

const InfoContainer = tw.ul`
  mx-auto
  flex
  w-max
  flex-col
  gap-5
  md:col-start-1
  md:row-start-2
  md:w-min
  md:gap-12
`;

const InfoItem = tw.li`
  flex
  items-center
  gap-2.5
`;

const InfoItemIcon = clsx`
  bg-primary
  rounded-full
  border-8
`;

const InfoItemLink = clsx`
  font-semibold
  text-nowrap
  hover:underline
`;

const Input = tw.input`
  focus:outline-primary
  h-13
  w-full
  rounded-md
  border-[1px]
  border-white
  px-5
  py-2.5
  focus:border-transparent
  focus:outline-1
  not-valid:focus:outline-red-500
`;

const TextArea = tw.textarea`
  focus:outline-primary
  w-full
  resize-y
  rounded-md
  border-[1px]
  border-white
  px-5
  py-2.5
  focus:border-transparent
  focus:outline-1
  not-valid:focus:outline-red-500
`;

export const SC = {
  InfoContainer,
  InfoItem,
  Input,
  TextArea,
};

export const Classname = {
  Section,
  Title,
  InfoItemIcon,
  InfoItemLink,
};
