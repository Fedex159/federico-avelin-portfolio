import tw from "@/shared/utils/tailwind";

const Container = tw.div`
  relative
  mr-auto
  flex
  flex-col
  gap-1
`;

const Title = tw.h4`
  font-semibold
`;

const Message = tw.p`
  text-sm
`;

const DismissButton = tw.button`
  absolute
  top-0
  right-0
  h-5
  w-5
  cursor-pointer
  rounded-full
  border-2
  bg-[url('/assets/icons/iconClose.svg')]
  bg-contain
  bg-center
  bg-no-repeat
`;

export const SC = {
  Container,
  Title,
  Message,
  DismissButton,
};
