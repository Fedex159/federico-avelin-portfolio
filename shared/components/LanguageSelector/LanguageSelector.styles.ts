import tw from "@/shared/utils/tailwind";

export const StyledContainer = tw.div`
  flex
  max-h-5
  gap-2.5
`;

export const StyledFlagButton = tw.button`
  cursor-pointer
  transition-shadow
  hover:shadow-(--box-shadow-button)
`;
