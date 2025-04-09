import { clsx } from "@/shared/utils/tailwind";

export const mixinButton = clsx`
  hover:shadow-button
  bg-primary
  w-52
  max-w-52
  cursor-pointer
  rounded-2xl
  p-3
  text-center
  font-bold
  text-black
  transition-shadow
`;

export const mixinError = clsx`
  -mt-2
  mr-auto
  hidden
  font-semibold
  text-red-500
`;
