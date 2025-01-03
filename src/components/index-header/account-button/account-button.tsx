"use client";

import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import ThemeSelector from "components/theme-selector/theme-selector";
import LoginIcon from "@mui/icons-material/Login";

export default function AccountButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu}>
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText>Log In</ListItemText>
        </MenuItem>
        <ThemeSelector />
      </Menu>
    </>
  );
}
