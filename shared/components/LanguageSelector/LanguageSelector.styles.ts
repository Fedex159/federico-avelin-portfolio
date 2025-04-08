import tw from "@/shared/utils/tailwind";

const Container = tw.div`
  flex
  max-h-5
  gap-2.5
`;

const FlagButton = tw.button<{ $isArgFlag: boolean }>`
  ${({ $isArgFlag }) => ($isArgFlag ? "bg-[url(/assets/icons/iconFlagArg.svg)]" : "bg-[url(/assets/icons/iconFlagUsa.svg)]")}
  hover:shadow-button
  h-5
  w-8
  cursor-pointer
  bg-cover
  bg-center
  bg-no-repeat
  transition-shadow
  disabled:opacity-30
`;

export const SC = {
  Container,
  FlagButton,
};
