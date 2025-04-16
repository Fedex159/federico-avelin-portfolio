"use client";

import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { useStore } from "zustand";

import {
  type ActiveSectionStore,
  createActiveSectionStore,
  initActiveSectionStore,
} from "@/shared/stores/active-section-store";

export type ActiveSectionStoreApi = ReturnType<typeof createActiveSectionStore>;

export const ActiveSectionStoreContext = createContext<
  ActiveSectionStoreApi | undefined
>(undefined);

export const ActiveSectionStoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<ActiveSectionStoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createActiveSectionStore(initActiveSectionStore());
  }

  return (
    <ActiveSectionStoreContext.Provider value={storeRef.current}>
      {children}
    </ActiveSectionStoreContext.Provider>
  );
};

export const useActiveSectionStore = <T,>(
  selector: (store: ActiveSectionStore) => T,
): T => {
  const activeSectionStoreContext = useContext(ActiveSectionStoreContext);

  if (!activeSectionStoreContext) {
    throw new Error(
      `useActiveSectionStore must be used within ActiveSectionStoreProvider`,
    );
  }

  return useStore(activeSectionStoreContext, selector);
};
