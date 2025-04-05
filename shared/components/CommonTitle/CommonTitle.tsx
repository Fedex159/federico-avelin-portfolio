import { ComponentProps } from "react";
import { StyledTitle } from "./CommonTitle.styles";

type Props = ComponentProps<"h3">;

export const CommonTitle = ({ children, ...props }: Props) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};
