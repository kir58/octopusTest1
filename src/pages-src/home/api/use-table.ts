import { enqueueSnackbar } from 'notistack';
import { useQuery } from 'react-query';
import { useFilter } from '../modal/store';
import { httpGetTable } from './http-get-table';

export const useBloggerPosts = () => {
  const limit = useFilter((state) => state.limit);
  const offset = useFilter((state) => state.offset);
  const debouncedSearch = useFilter((state) => state.debouncedSearch);

  return useQuery({
    queryKey: [`httpGetTable`, limit, offset, debouncedSearch],
    queryFn: () => {
      return httpGetTable({ limit, offset, search: debouncedSearch });
    },
    onError: (error: Error) => {
      enqueueSnackbar('Ошибка загрузки данных', { variant: 'error' });
    },
  });
};
