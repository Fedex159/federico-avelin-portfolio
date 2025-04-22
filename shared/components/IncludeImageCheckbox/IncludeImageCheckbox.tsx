"use client";

import { setIncludeImageCookie } from "@/shared/actions/setIncludeImageCookie";
import { ChangeEvent, ComponentProps, useCallback } from "react";
import { SC } from "./IncludeImageCheckbox.styles";

type Props = Omit<ComponentProps<"input">, "type" | "onChange">;

export const IncludeImageCheckbox = (props: Props) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setIncludeImageCookie({ includeImage: e.currentTarget.checked }),
    [],
  );

  return <SC.Checkbox {...props} onChange={handleChange} type="checkbox" />;
};
