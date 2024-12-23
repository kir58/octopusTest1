import { create } from "zustand";

interface IUseFilter {
  limit: number;
  offset: number;
  setLimit: (value: number) => void;
  setOffset: (value: number) => void;
}

export const useFilter = create<IUseFilter>()((set) => ({
  limit: 20,
  offset: 0,
  setLimit: (value) => set(() => ({ limit: value })),
  setOffset: (value) => set(() => ({ offset: value })),
}));
