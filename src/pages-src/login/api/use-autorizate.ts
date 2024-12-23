import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { useMutation, useQueryClient } from 'react-query';
import { httpPostAutorizate, Schema } from './http-post-autorizate';
import { IForm } from '@/src/pages-src/login/model/form';

interface IUse {
  isRememberMe: boolean;
}

export const useAutorizate = ({ isRememberMe }: IUse) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const props = useMutation({
    mutationKey: [`httpPostAutorizate`],
    mutationFn: ({ password, login }: IForm) => httpPostAutorizate({ password, login }),
    onSuccess: (res) => {
      if (!res) return;

      if (isRememberMe) {
        localStorage.setItem(`token`, res.access_token);
      } else {
        sessionStorage.setItem(`token`, res.access_token);
      }

      enqueueSnackbar('Вы вошли!', { variant: 'success' });
      setTimeout(() => {
        router.push('/');
      }, 200);
      setTimeout(() => {
        queryClient.refetchQueries();
      }, 1000);
    },
    onError: (error: AxiosError<{ error?: string }>) => {
      const detail = error.response?.data?.error || 'Ошибка сервера';
      enqueueSnackbar(detail, { variant: 'error' });
    },
  });
  return props;
};
