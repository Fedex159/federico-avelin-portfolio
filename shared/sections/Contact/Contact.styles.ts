import tw, { clsx } from "@/shared/utils/tailwind";

export const contactSectionClassname = clsx`
  flex
  flex-col
  items-center
  justify-center
  gap-10
  md:grid
  md:grid-cols-2
  md:grid-rows-[min-content_min-content]
  md:content-center
  md:items-start
`;

export const contactTitleClassname = clsx`
  md:col-span-2
  md:col-start-1
  md:self-end
  md:text-center
  [&&]:mb-5
`;

export const StyledInfoContainer = tw.ul`
  mx-auto
  flex
  w-max
  flex-col
  gap-5
  md:col-start-1
  md:row-start-2
  md:w-min
  md:gap-12
`;

export const StyledInfoItem = tw.li`
  flex
  items-center
  gap-2.5
`;

export const infoItemIconClassname = clsx`
  bg-primary
  rounded-full
  border-8
`;

export const infoItemLinkClassname = clsx`
  font-semibold
  text-nowrap
  hover:underline
`;

export const StyledForm = tw.form`
  flex
  w-full
  flex-col
  items-center
  gap-5
  md:col-start-2
  md:row-start-2
`;

export const StyledInput = tw.input`
  focus:outline-primary
  h-13
  w-full
  rounded-md
  border-[1px]
  border-white
  px-5
  py-2.5
  focus:border-transparent
  focus:outline-1
  not-valid:focus:outline-red-500
`;

export const StyledTextArea = tw.textarea`
  focus:outline-primary
  w-full
  resize-y
  rounded-md
  border-[1px]
  border-white
  px-5
  py-2.5
  focus:border-transparent
  focus:outline-1
  not-valid:focus:outline-red-500
`;

export const StyledSubmitButton = tw.button`
  group-invalid:cursor-not-allowed
  group-invalid:opacity-20
`;
