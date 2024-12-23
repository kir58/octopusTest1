"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRegistration } from "../api/use-registration";
import { FormSchema, IForm } from "../model/form";

interface FormElementProps {}

export const FormElement: FC<FormElementProps> = ({}) => {
  const { control, reset, handleSubmit, watch } = useForm<IForm>({
    mode: "onChange",
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const { mutate, isLoading } = useRegistration({});

  const onSubmit = (data: IForm) => {
    mutate(data);
  };

  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h6">Регистрация</Typography>
        <Controller
          name={"login"}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <>
              <TextField
                required
                fullWidth
                id="reg-login"
                label="Логин"
                error={Boolean(error)}
                helperText={error ? error.message : ""}
                onChange={onChange}
                value={value}
                size="small"
              />
            </>
          )}
        />
        <Controller
          name={"password"}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <>
              <TextField
                type="password"
                required
                fullWidth
                id="reg-password"
                label="Пароль"
                error={Boolean(error)}
                helperText={error ? error.message : ""}
                onChange={onChange}
                value={value}
                size="small"
              />
            </>
          )}
        />
        <Stack direction="row" spacing={2}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            disabled={!!isLoading}
          >
            Зарегистрироваться
          </Button>
          <Link href={`/login`}>
            <Button fullWidth variant="outlined">
              Авторизация
            </Button>
          </Link>
        </Stack>
        {isLoading && <LinearProgress />}
      </Stack>
    </>
  );
};
