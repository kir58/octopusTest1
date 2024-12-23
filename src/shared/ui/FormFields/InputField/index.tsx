import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { useFormContext, useController } from 'react-hook-form';

type IFormInputProps = {
  name: string;
} & TextFieldProps;

const InputField: FC<IFormInputProps> = ({ name, ...otherProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { field } = useController({ control, name });
  const error = errors[name];

  return (
    <TextField
      {...otherProps}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
      error={!!error}
      helperText={<>{errors[name]?.message}</>}
    />
  );
};

export { InputField };
