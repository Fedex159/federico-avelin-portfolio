import tw from "@/shared/utils/tailwind";

const Container = tw.div`
  flex
  max-h-5
  gap-2.5
`;

const FlagButton = tw.button`
  hover:shadow-button
  cursor-pointer
  transition-shadow
`;

export const SC = {
  Container,
  FlagButton,
};
