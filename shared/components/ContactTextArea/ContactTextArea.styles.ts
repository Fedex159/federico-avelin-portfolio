import { mixinError } from "@/shared/styles/mixins";
import tw from "@/shared/utils/tailwind";

const TextArea = tw.textarea`
  focus:outline-primary
  peer/message
  z-10
  w-full
  resize-y
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

const RequiredMinMessage = tw.p`
  ${() => mixinError}
  peer-not-placeholder-shown/message:peer-focus/message:peer-invalid/message:block
`;

export const SC = {
  TextArea,
  RequiredMinMessage,
};
