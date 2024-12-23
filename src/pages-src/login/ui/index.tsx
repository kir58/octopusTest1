import { Paper, Stack } from "@mui/material";
import { FormElement } from "./form";

export const Page = async () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ width: `100%`, height: `100vh` }}
      >
        <Paper sx={{ width: `500px`, padding: 2 }}>
          <FormElement />
        </Paper>
      </Stack>
    </>
  );
};
