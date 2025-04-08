import tw from "@/shared/utils/tailwind";

const Checkbox = tw.input`
  peer
  absolute
  top-1/2
  right-[10px]
  z-20
  h-10
  w-10
  -translate-y-1/2
  cursor-pointer
  opacity-0
  md:hidden
`;

export const SC = {
  Checkbox,
};
