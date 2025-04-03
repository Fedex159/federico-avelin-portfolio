"use client";

import { ComponentProps } from "react";
import { StyledContainer } from "./CommonSection.styles";
import { useIsOnScreen } from "@/shared/hooks/useIsOnScreen";

type Props = Omit<ComponentProps<"section">, "ref">;

const INTERSECTION_OPTIONS: IntersectionObserverInit = {
  threshold: 0.5,
};

const ACTIVE_SECTION_ATTRIBUTE = "data-active-section";

const handleIntersection = (entry: IntersectionObserverEntry) => {
  const {
    isIntersecting,
    target: { id },
  } = entry;

  if (isIntersecting) {
    document.body.setAttribute(ACTIVE_SECTION_ATTRIBUTE, id);
  }

  // console.log({ isIntersecting, id, entry });
};

export const CommonSection = ({ children, ...props }: Props) => {
  const { ref } = useIsOnScreen({
    intersectionOptions: INTERSECTION_OPTIONS,
    onIntersection: handleIntersection,
  });

  return (
    <StyledContainer ref={ref} {...props}>
      {children}
    </StyledContainer>
  );
};
