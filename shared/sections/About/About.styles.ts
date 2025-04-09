import { mixinButton } from "@/shared/styles/mixins";
import tw, { clsx } from "@/shared/utils/tailwind";

const Section = clsx`
  grid
  grid-cols-[1fr_auto_1fr]
  items-center
  gap-y-10
  not-md:*:col-start-2
  not-md:*:col-end-2
  md:grid-cols-2
  md:grid-rows-[repeat(3,min-content)]
  md:content-center
  md:gap-x-10
`;

const Image = clsx`
  shadow-about-image
  mx-auto
  h-96
  w-80
  object-cover
  md:row-span-3
  lg:h-[576px]
  lg:w-[480px]
`;

const Title = clsx`
  self-end
  [&&]:mt-0
`;

const Description = tw.p`
  max-w-[400px]
  whitespace-pre-line
  md:col-start-2
  md:row-start-2
`;

const DownloadButton = clsx`
  ${mixinButton}
  md:col-start-2
  md:row-start-3
  md:self-start
`;

export const SC = {
  Description,
};

export const Classname = {
  Section,
  Image,
  Title,
  DownloadButton,
};
