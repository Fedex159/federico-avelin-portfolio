import tw from "@/shared/utils/tailwind";

export const Container = tw.div`
  flex
  max-h-5
  gap-2.5
`;

export const FlagButton = tw.button`
  cursor-pointer
  hover:shadow-(--box-shadow-button)
`;
