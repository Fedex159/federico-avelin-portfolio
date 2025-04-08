import { mixinButton } from "@/shared/styles/mixins";
import tw, { clsx } from "@/shared/utils/tailwind";

const Section = clsx`
  grid
  grid-cols-[1fr_auto_1fr]
  items-center
  gap-y-10
  *:col-start-2
  *:col-end-2
  md:grid-cols-2
  md:content-center
  md:gap-x-10
  md:*:row-start-1
`;

const Image = clsx`
  shadow-about-image
  mx-auto
  h-96
  w-80
  object-cover
  md:col-start-1
  md:col-end-1
  md:mt-2.5
  lg:scale-150
`;

const Description = tw.p`
  max-w-[400px]
  whitespace-pre-line
  md:my-24
`;

const DownloadButton = clsx`
  ${mixinButton}
  md:mt-auto
`;

export const SC = {
  Description,
};

export const Classname = {
  Section,
  Image,
  DownloadButton,
};
