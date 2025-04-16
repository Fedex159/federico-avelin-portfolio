import { useCallback, useEffect } from "react";
import { useActiveSectionStore } from "../providers/active-section-store-provider";
import { SectionIdEnum } from "../types/common";
import { useIsOnScreen } from "./useIsOnScreen";

const INTERSECTION_OPTIONS: IntersectionObserverInit = {
  threshold: 0,
  rootMargin: "-81px",
};

const ACTIVE_SECTION_ATTRIBUTE = "data-active-section";

type Props = {
  sectionId: SectionIdEnum;
};

export const useActiveSection = ({ sectionId }: Props) => {
  const { activeSections, addSection, removeSection } = useActiveSectionStore(
    (state) => state,
  );

  const { isIntersecting, ref } = useIsOnScreen({
    intersectionOptions: INTERSECTION_OPTIONS,
  });

  const handleIntersection = useCallback(() => {
    if (!sectionId) return;

    const isAlreadyAdded = activeSections.includes(sectionId);
    const isSectionActive = activeSections[0] === sectionId;

    if (!isAlreadyAdded && isIntersecting) {
      addSection(sectionId);
    }

    if (isIntersecting && isSectionActive) {
      document.body.setAttribute(ACTIVE_SECTION_ATTRIBUTE, sectionId);
    }

    if (!isIntersecting && isAlreadyAdded) {
      removeSection(sectionId);
    }
  }, [activeSections, addSection, isIntersecting, removeSection, sectionId]);

  useEffect(handleIntersection, [handleIntersection]);

  return {
    ref,
  };
};
