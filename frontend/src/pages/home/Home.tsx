import Box from "@mui/material/Box";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Archive, Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import logo from "../../assets/MingaEaforschnLogo-small.png";

export default function Home() {
  const location = useLocation();
  const split = location.pathname.split("/");
  const initialPath = split[split.length - 1];
  const [value, setValue] = useState(initialPath);
  const navigate = useNavigate();

  useEffect(() => {
    if (initialPath === "home" || initialPath === "") {
      setValue("surprise");
    }
  }, []);

  useEffect(() => {
    if (value && value !== initialPath) {
      navigate(`/home/${value}`, {
        replace: true,
      });
    }
  }, [value]);
  return (
    <Box>
      <Outlet />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            value="surprise"
            label="Home"
            icon={<Box component={"img"} src={logo} height={30} width={30} />}
          />
          <BottomNavigationAction
            value="search"
            label="Search"
            icon={<Search />}
          />
          <BottomNavigationAction
            value="activities"
            label="Archive"
            icon={<Archive />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
