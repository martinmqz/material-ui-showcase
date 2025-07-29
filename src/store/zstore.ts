import { createTheme } from "@mui/material";
import { create } from "zustand";

import type { Theme } from "@mui/material";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}
const useZStore = create<ThemeState>((set, get) => ({
  theme: createTheme({
    palette: {
      mode: "dark",
    },
  }),
  toggleTheme: () =>
    set(() => {
      const currentMode = get().theme.palette.mode;
      const newMode = currentMode === "dark" ? "light" : "dark";
      return {
        theme: createTheme({
          palette: {
            mode: newMode,
          },
        }),
      };
    }),
}));

export default useZStore;
