import { HeaderButtons } from "@/src/widgets/header";
import { Stack } from "@mui/material";
import { PaperElement } from "./paper";

export const Page = async () => {
  return (
    <>
      <HeaderButtons />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ width: `100%`, height: `100vh` }}
      >
        <PaperElement />
      </Stack>
    </>
  );
};
