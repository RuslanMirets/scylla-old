import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { RegisterFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';

export const RegisterForm: React.FC = () => {
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormField type="text" label="Имя" name="name" />
        <FormField type="text" label="Email" name="email" />
        <FormField type="password" label="Пароль" name="password" />
        <Button
          disabled={!methods.formState.isValid || methods.formState.isSubmitting}
          type="submit"
          color="primary"
          variant="contained">
          Регистрация
        </Button>
      </form>
    </FormProvider>
  );
};
