import tw, { clsx } from "@/shared/utils/tailwind";

const Container = tw.label`
  bg-secondary-background
  relative
  flex
  min-h-5
  min-w-14
  cursor-pointer
  items-center
  justify-between
  rounded-2xl
  border
  border-white
  px-2
`;

const Checkbox = tw.input`
  peer/flag
  accent-primary
  absolute
  top-0
  left-0
  -z-1
  h-full
  w-full
  appearance-none
`;

const FlagLabelStyles = clsx`
  text-xs
  font-semibold
  transition-opacity
  select-none
`;

const SpanishLabel = tw.span`
  ${() => FlagLabelStyles}
  peer-checked/flag:opacity-0
`;

const EnglishLabel = tw.span`
  ${() => FlagLabelStyles}
  peer-not-checked/flag:opacity-0
`;

const ArgFlag = clsx`
  before:absolute
  before:top-0
  before:left-0
  before:block
  before:h-full
  before:w-full
  before:rounded-full
  before:bg-[url(/assets/icons/iconFlagArg.svg)]
  before:bg-cover
  before:bg-center
  before:bg-no-repeat
`;

const UsaFlag = clsx`
  after:absolute
  after:top-0
  after:left-0
  after:block
  after:h-full
  after:w-full
  after:rounded-full
  after:bg-[url(/assets/icons/iconFlagUsa.svg)]
  after:bg-cover
  after:bg-position-[-7px]
  after:bg-no-repeat
  after:transition-opacity
  peer-not-checked/flag:after:opacity-0
  peer-checked/flag:after:opacity-100
`;

const Flag = tw.span`
  ${() => ArgFlag}
  ${() => UsaFlag}
  border-primary
  absolute
  top-1/2
  -left-0.5
  block
  aspect-square
  w-7
  translate-x-0
  -translate-y-1/2
  rounded-full
  border-2
  transition-all
  peer-checked/flag:left-[calc(100%_+_2px)]
  peer-checked/flag:-translate-x-full
  peer-checked/flag:rotate-[360deg]
`;

export const SC = {
  Container,
  Checkbox,
  SpanishLabel,
  EnglishLabel,
  Flag,
};
