import { mixinError } from "@/shared/styles/mixins";
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

const EmailInvalidFormatMessage = tw.p`
  ${() => mixinError}
  peer-not-placeholder-shown/email:peer-focus/email:peer-invalid/email:block
`;

export const SC = {
  InfoContainer,
  InfoItem,
  EmailInvalidFormatMessage,
};

export const Classname = {
  Section,
  Title,
  InfoItemIcon,
  InfoItemLink,
};
