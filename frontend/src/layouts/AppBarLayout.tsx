import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { NavLink as RouterLink, Outlet } from "react-router-dom";

export default function AppBarLayout() {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Minga eaforschn
          </Typography>
          <Button color="inherit" component={RouterLink} to={"/home"}>
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to={"/page1"}>
            Page 1
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}
