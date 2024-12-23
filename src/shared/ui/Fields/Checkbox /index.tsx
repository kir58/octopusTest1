import { Checkbox as MUICheckbox, CheckboxProps } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';

type Props = CheckboxProps & { label?: React.ReactNode };

export const Checkbox = (props: Props) => (
  <FormControlLabel label={props.label} control={<MUICheckbox {...props} />} />
);
