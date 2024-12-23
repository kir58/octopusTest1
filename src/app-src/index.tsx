"use client";

import { theme } from "@/src/shared/lib/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { FC, ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./providers/query-provider";

interface AppProps {
  children: ReactNode;
}

const App: FC<AppProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={5} autoHideDuration={3000}>
          <CssBaseline />
          {children}
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
