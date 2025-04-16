"use client";

import { ComponentProps, FocusEvent } from "react";
import { SC } from "./HamburgerCheckbox.styles";

type Props = Omit<ComponentProps<"input">, "onBlur" | "type">;

export const HamburgerCheckbox = (props: Props) => {
  return (
    <SC.Checkbox
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
