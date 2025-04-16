import { clsx } from "@/shared/utils/tailwind";

const Link = clsx`
  hover:shadow-project-link
  row-start-3
  mx-2
  flex
  justify-center
  gap-2.5
  rounded-xl
  bg-white
  p-2.5
  font-semibold
  text-black
  transition-shadow
  md:mx-5
`;

export const Classname = {
  Link,
};
