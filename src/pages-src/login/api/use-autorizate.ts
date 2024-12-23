import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useMutation, useQueryClient } from "react-query";
import { httpPostAutorizate, Schema } from "./http-post-autorizate";

interface IUse {}

export const useAutorizate = ({}: IUse) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const props = useMutation({
    mutationKey: [`httpPostAutorizate`],
    mutationFn: (value: Schema["payload"]) => httpPostAutorizate(value),
    onSuccess: (res: Schema["response"]) => {
      if (!res) return;
      localStorage.setItem(`token`, res.access_token);
      enqueueSnackbar("Вы вошли!", { variant: "success" });
      setTimeout(() => {
        router.push("/");
      }, 200);
      setTimeout(() => {
        queryClient.refetchQueries();
      }, 1000);
    },
    onError: (error: AxiosError<{ error?: string }>) => {
      const detail = error.response?.data?.error || "Ошибка сервера";
      enqueueSnackbar(detail, { variant: "error" });
    },
  });
  return props;
};
