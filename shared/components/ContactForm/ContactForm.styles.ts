import { mixinButton } from "@/shared/styles/mixins";
import tw from "@/shared/utils/tailwind";

const Form = tw.form`
  group
  flex
  w-full
  flex-col
  items-center
  gap-5
  md:col-start-2
  md:row-start-2
`;

const SubmitButton = tw.button`
  ${() => mixinButton}
  group-invalid:cursor-not-allowed
  group-invalid:opacity-55
  disabled:cursor-not-allowed
  disabled:opacity-55
`;

export const SC = {
  Form,
  SubmitButton,
};
