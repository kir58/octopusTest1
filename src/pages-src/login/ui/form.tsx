'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, LinearProgress, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import { Controller, useForm, FormProvider } from 'react-hook-form';
import { useAutorizate } from '../api/use-autorizate';
import { FormSchema, IForm } from '../model/form';
import { InputField } from '@/src/shared/ui/FormFields/InputField';
import { CheckboxField } from '@/src/shared/ui/FormFields/CheckboxField';

interface FormElementProps {}

export const FormElement: FC<FormElementProps> = ({}) => {
  const methodsForm = useForm<IForm>({
    mode: 'onChange',
    defaultValues: {
      login: '',
      password: '',
      isRememberMe: false,
    },
    resolver: zodResolver(FormSchema),
  });

  const {
    handleSubmit,
    formState: { isDirty, isValid },
    getValues,
  } = methodsForm;

  const onSubmit = (data: IForm) => {
    mutate(data);
  };

  const { isRememberMe } = getValues();
  const { mutate, isLoading } = useAutorizate({ isRememberMe });

  return (
    <>
      <FormProvider {...methodsForm}>
        <Stack spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h6">Авторизация</Typography>
          <Typography variant="body2">
            Стандартные данные для входа: логин "admin" пароль "admin"
          </Typography>

          <InputField name="login" size="small" label="Логин" required />
          <InputField name="password" size="small" label="Пароль" required />
          <CheckboxField name="isRememberMe" label="Запомнить меня" />

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={isLoading || !isDirty || !isValid}
            >
              Войти
            </Button>
            <Link href={`/registration`}>
              <Button fullWidth variant="outlined">
                Регистрация
              </Button>
            </Link>
          </Stack>

          {isLoading && <LinearProgress />}
        </Stack>
      </FormProvider>
    </>
  );
};
