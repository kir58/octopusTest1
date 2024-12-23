import { debounce, TextField } from '@mui/material';
import { useFilter } from '@/src/pages-src/home/modal/store';
import { useMemo, useState } from 'react';

export const Filters = () => {
  const setDebouncedSearch = useFilter((state) => state.setDebouncedSearch);

  const debouncedSearchFn = useMemo(
    () => debounce((value: string) => setDebouncedSearch(value), 500),
    [setDebouncedSearch],
  );

  const [search, setSearch] = useState('');

  return (
    <TextField
      fullWidth
      label="Найти пост по ссылке"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        debouncedSearchFn(e.target.value);
      }}
    />
  );
};
