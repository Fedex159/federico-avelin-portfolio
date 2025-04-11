import { FormFieldsEnum } from "@/shared/types/contactForm";
import tw, { clsx } from "@/shared/utils/tailwind";

const Wrapper = tw.div`
  relative
  flex
  w-full
  flex-col
  gap-1
`;

const FullnameStyles = clsx`
  peer-not-placeholder-shown/fullname:z-10
  peer-not-placeholder-shown/fullname:transform-(--float-label)
  peer-not-placeholder-shown/fullname:opacity-100
  peer-focus/fullname:z-10
  peer-focus/fullname:transform-(--float-label)
  peer-focus/fullname:opacity-100
`;

const EmailStyles = clsx`
  peer-not-placeholder-shown/email:z-10
  peer-not-placeholder-shown/email:transform-(--float-label)
  peer-not-placeholder-shown/email:opacity-100
  peer-focus/email:z-10
  peer-focus/email:transform-(--float-label)
  peer-focus/email:opacity-100
`;

const SubjectStyles = clsx`
  peer-not-placeholder-shown/subject:z-10
  peer-not-placeholder-shown/subject:transform-(--float-label)
  peer-not-placeholder-shown/subject:opacity-100
  peer-focus/subject:z-10
  peer-focus/subject:transform-(--float-label)
  peer-focus/subject:opacity-100
`;

const MessageStyles = clsx`
  peer-not-placeholder-shown/message:z-10
  peer-not-placeholder-shown/message:transform-(--float-label)
  peer-not-placeholder-shown/message:opacity-100
  peer-focus/message:z-10
  peer-focus/message:transform-(--float-label)
  peer-focus/message:opacity-100
`;

const FloatLabelClasses = {
  [FormFieldsEnum.FULLNAME]: FullnameStyles,
  [FormFieldsEnum.EMAIL]: EmailStyles,
  [FormFieldsEnum.SUBJECT]: SubjectStyles,
  [FormFieldsEnum.MESSAGE]: MessageStyles,
};

const Label = tw.label`
  ${({ $fieldName }: { $fieldName: FormFieldsEnum }) => FloatLabelClasses[$fieldName]}
  bg-secondary-background
  absolute
  top-3.5
  left-3.5
  z-0
  flex
  items-center
  rounded-2xl
  px-2
  opacity-50
  transition-transform
`;

export const SC = {
  Wrapper,
  Label,
  FloatLabel: FloatLabelClasses,
};
