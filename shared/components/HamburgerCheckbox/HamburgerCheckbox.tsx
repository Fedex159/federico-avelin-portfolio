"use client";

import { ComponentProps, FocusEvent } from "react";
import { StyledCheckbox } from "./HamburgerCheckbox.styles";

type Props = Omit<ComponentProps<"input">, "onBlur" | "type">;

export const HamburgerCheckbox = (props: Props) => {
  return (
    <StyledCheckbox
      {...props}
      type="checkbox"
      onBlur={(e: FocusEvent<HTMLInputElement, Element>) => {
        setTimeout(() => {
          e.target.checked = false;
        }, 100);
      }}
    />
  );
};
