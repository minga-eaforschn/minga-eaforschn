import { Box, CircularProgress, Paper } from "@mui/material";
import MuenchnerKindlImage from "../assets/MuenchnerKindlPicture.jpeg";
import MingaEaforschnLogo from "../assets/MingaEaforschnLogo.jpg";
import skyline from "../assets/muinichSkyline.png";

const BackgroundHead = {
  backgroundImage: "url(" + skyline + ")",
};

// Speech Bubbles inspired by https://freefrontend.com/css-speech-bubbles/
const Header = (kindlProps: { sx?: any }) => {
  return (
    <Box sx={{ backgroundImage: `url(${MingaEaforschnLogo})`, width: "100%" }}>
      abc
    </Box>
  );
};

export default Header;
