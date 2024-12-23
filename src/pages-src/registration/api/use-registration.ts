import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useMutation, useQueryClient } from "react-query";
import { httpPostRegistration, Schema } from "./http-post-registration";

interface IUse {}

export const useRegistration = ({}: IUse) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const props = useMutation({
    mutationKey: [`httpPostRegistration`],
    mutationFn: (value: Schema["payload"]) => httpPostRegistration(value),
    onSuccess: (res) => {
      if (!res) return;
      localStorage.setItem(`token`, res.access_token);
      enqueueSnackbar("Вы зарегистрировались!", { variant: "success" });
      setTimeout(() => {
        router.push("/");
      }, 200);
      setTimeout(() => {
        queryClient.refetchQueries();
      }, 1000);
    },
    onError: (error: AxiosError<{ detail?: string }>) => {
      const detail = error.response?.data?.detail || "Ошибка сервера";
      enqueueSnackbar(detail, { variant: "error" });
    },
  });
  return props;
};
