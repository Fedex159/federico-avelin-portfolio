import { mixinButton } from "@/shared/styles/mixins";
import tw from "@/shared/utils/tailwind";

const SubmitButton = tw.button`
  ${() => mixinButton}
  group-invalid:cursor-not-allowed
  group-invalid:opacity-20
  disabled:cursor-not-allowed
  disabled:opacity-25
`;

export const SC = {
  SubmitButton,
};
