"use client"

import { Box, Paper, Stack } from "@mui/material";
import { FC } from "react";
import { PaginationElement } from "./padding";
import { TableElement } from "./table";

const headerHeight = 50;

export const PaperElement: FC = () => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: `calc(100vw - 130px)`,
          height: `calc(100vh - 130px)`,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{ width: `100%`, height: `${headerHeight}px` }}
        >
          <PaginationElement />
        </Stack>

        <Box
          sx={{
            width: `100%`,
            height: `calc(100vh -  ${130 + headerHeight}px)`,
            overflow: `auto`,
          }}
        >
          <TableElement />
        </Box>
      </Paper>
    </>
  );
};
