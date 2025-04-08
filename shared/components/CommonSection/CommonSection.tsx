"use client";

import { useActiveSection } from "@/shared/hooks/useActiveSection";
import { SectionIdEnum } from "@/shared/types/common";
import { ComponentProps } from "react";
import { SC } from "./CommonSection.styles";

type Props = Omit<ComponentProps<"section">, "ref">;

export const CommonSection = ({ children, id, ...props }: Props) => {
  const { ref } = useActiveSection({ sectionId: id as SectionIdEnum });

  return (
    <SC.Container ref={ref} id={id} {...props}>
      {children}
    </SC.Container>
  );
};
