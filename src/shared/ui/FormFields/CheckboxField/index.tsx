import { useController, useFormContext } from 'react-hook-form';
import { CheckboxProps } from '@mui/material/Checkbox';
import { Checkbox } from '@/src/shared/ui/Fields/Checkbox ';

type Props = Omit<CheckboxProps, 'name'> & { name: string; label?: React.ReactNode };

export const CheckboxField = ({ name, ...restProps }: Props) => {
  const { control } = useFormContext();

  const { field } = useController({ control, name });

  return (
    <Checkbox
      color="primary"
      {...restProps}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
    />
  );
};
