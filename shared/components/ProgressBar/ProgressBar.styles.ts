import tw from "@/shared/utils/tailwind";

const Container = tw.div`
  top-header-height
  fixed
  left-0
  h-0.5
  w-full
`;

const ProgressContainer = tw.div`
  bg-primary
  h-full
`;

export const SC = { Container, ProgressContainer };
