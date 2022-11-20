import { LinearProgress, useTheme } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const maxMp = 100;
const ProfileMPBar = () => {
  const [mp, setMp] = useState(73);
  const theme = useTheme();
  return (
    <Box position={"relative"}>
      <LinearProgress
        sx={{ width: "100px", padding: "12px", borderRadius: "10px" }}
        variant="determinate"
        value={(mp / maxMp) * 100}
        aria-readonly={true}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 10,
        }}
      >
        <Typography
          color={theme.palette.getContrastText(theme.palette.primary.main)}
        >
          {mp}/{maxMp}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileMPBar;
