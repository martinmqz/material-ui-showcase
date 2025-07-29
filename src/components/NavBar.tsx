import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";

import useZStore from "../store/zstore";

export default function NavBar() {
  const darkMode = useZStore(state => state.theme.palette.mode === 'dark');
  const toggleTheme = useZStore(state => state.toggleTheme)
  
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Material UI Component Library
        </Typography>
        <Tooltip title="Toggle theme">
          <IconButton color="inherit" onClick={toggleTheme}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Tooltip>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
