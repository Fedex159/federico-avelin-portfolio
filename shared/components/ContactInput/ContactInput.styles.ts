import { FormFieldsEnum } from "@/shared/types/contactForm";
import tw, { clsx } from "@/shared/utils/tailwind";

export type InputFieldName =
  | FormFieldsEnum.FULLNAME
  | FormFieldsEnum.EMAIL
  | FormFieldsEnum.SUBJECT;

const PeerClasses: Record<InputFieldName, string> = {
  [FormFieldsEnum.FULLNAME]: "peer/fullname",
  [FormFieldsEnum.EMAIL]: "peer/email",
  [FormFieldsEnum.SUBJECT]: "peer/subject",
};

const InputPeer = (formField: InputFieldName) =>
  clsx`${PeerClasses[formField]}`;

const Input = tw.input`
  focus:outline-primary
  h-13
  w-full
  rounded-md
  border
  border-white
  px-5
  py-2.5
  not-valid:not-placeholder-shown:not-focus:border-red-500
  placeholder:opacity-0
  focus:border-transparent
  focus:outline-1
  not-valid:focus:outline-red-500
`;

export const SC = { Input };

export const Classname = { InputPeer };
