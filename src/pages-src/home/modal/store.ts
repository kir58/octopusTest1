import { create } from 'zustand';

interface IUseFilter {
  limit: number;
  offset: number;
  debouncedSearch: string;
  setLimit: (value: number) => void;
  setOffset: (value: number) => void;
  setDebouncedSearch: (value: string) => void;
}

export const useFilter = create<IUseFilter>()((set) => ({
  limit: 20,
  offset: 0,
  debouncedSearch: '',
  setDebouncedSearch: (value) => set(() => ({ debouncedSearch: value })),
  setLimit: (value) => set(() => ({ limit: value })),
  setOffset: (value) => set(() => ({ offset: value })),
}));
