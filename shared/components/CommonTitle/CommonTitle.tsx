import { ComponentProps } from "react";
import { SC } from "./CommonTitle.styles";

type Props = ComponentProps<"h3">;

export const CommonTitle = ({ children, ...props }: Props) => {
  return <SC.Title {...props}>{children}</SC.Title>;
};
