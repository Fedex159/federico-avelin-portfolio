import { clsx } from "@/shared/utils/tailwind";

export const mixinButton = clsx`
  w-52
  max-w-52
  cursor-pointer
  rounded-2xl
  bg-(--color-primary)
  p-3
  font-bold
  text-black
  transition-shadow
  hover:shadow-(--box-shadow-button)
`;
