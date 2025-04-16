import { createStore } from "zustand/vanilla";
import { SectionIdEnum } from "../types/common";

export type ActiveSectionState = {
  activeSections: SectionIdEnum[];
};

export type ActiveSectionActions = {
  addSection: (section: SectionIdEnum) => void;
  removeSection: (section: SectionIdEnum) => void;
};

export type ActiveSectionStore = ActiveSectionState & ActiveSectionActions;

export const initActiveSectionStore = (): ActiveSectionState => {
  return { activeSections: [SectionIdEnum.HOME] };
};

export const defaultInitState: ActiveSectionState = {
  activeSections: [SectionIdEnum.HOME],
};

export const createActiveSectionStore = (
  initState: ActiveSectionState = defaultInitState,
) => {
  return createStore<ActiveSectionStore>()((set) => ({
    ...initState,
    addSection: (section) =>
      set((state) => ({ activeSections: [...state.activeSections, section] })),
    removeSection: (section) =>
      set((state) => ({
        activeSections: state.activeSections.filter((s) => s !== section),
      })),
  }));
};
