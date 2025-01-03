import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  useColorScheme,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeSelector() {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const handleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <MenuItem onClick={handleMode}>
      <ListItemIcon>
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </ListItemIcon>
      <ListItemText>{mode.toUpperCase()}</ListItemText>
    </MenuItem>
  );
}
