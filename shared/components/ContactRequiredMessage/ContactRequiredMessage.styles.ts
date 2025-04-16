import { mixinError } from "@/shared/styles/mixins";
import { FormFieldsEnum } from "@/shared/types/contactForm";
import tw from "@/shared/utils/tailwind";

const RequiredClasses = {
  [FormFieldsEnum.FULLNAME]:
    "peer-placeholder-shown/fullname:peer-focus/fullname:peer-invalid/fullname:block",
  [FormFieldsEnum.EMAIL]:
    "peer-placeholder-shown/email:peer-focus/email:peer-invalid/email:block",
  [FormFieldsEnum.SUBJECT]:
    "peer-placeholder-shown/subject:peer-focus/subject:peer-invalid/subject:block",
  [FormFieldsEnum.MESSAGE]:
    "peer-placeholder-shown/message:peer-focus/message:peer-invalid/message:block",
};

const Message = tw.p` ${() => mixinError} ${({ $formField }: { $formField: FormFieldsEnum }) => RequiredClasses[$formField]} `;

export const SC = {
  Message,
};
