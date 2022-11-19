import Box from "@mui/material/Box";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Archive, HomeMax, Search } from "@mui/icons-material";
import { useState } from "react";
import Surprise from "./components/Surprise";
import SearchActivitiesView from "./components/SearchActivitiesView";

export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <Box>
      {value === 0 && <Surprise />}
      {value === 1 && <SearchActivitiesView />}
      {value === 2 && <Surprise />}
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
          <BottomNavigationAction label="Home" icon={<HomeMax />} />
          <BottomNavigationAction label="Search" icon={<Search />} />
          <BottomNavigationAction label="Archive" icon={<Archive />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
