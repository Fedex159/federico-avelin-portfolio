import { FormFieldsEnum } from "@/shared/types/contactForm";
import { ReactNode } from "react";
import { SC } from "./FloatLabel.styles";

type Props = {
  errorMessage: ReactNode;
  fieldName: FormFieldsEnum;
  input: ReactNode;
  placeholder: string;
};

export const FloatLabel = ({
  errorMessage,
  fieldName,
  input,
  placeholder,
}: Props) => {
  return (
    <SC.Wrapper>
      {input}
      <SC.Label htmlFor={fieldName} $fieldName={fieldName}>
        {placeholder}
      </SC.Label>
      {errorMessage}
    </SC.Wrapper>
  );
};
