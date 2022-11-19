import { Box, CircularProgress } from "@mui/material";
import MuenchnerKindlImage from "../assets/MuenchnerKindlPicture.jpeg";

// Speech Bubbles inspired by https://freefrontend.com/css-speech-bubbles/
const MuenchnerKindl = (kindlProps: { sx?: any }) => {
  return (
    <Box sx={kindlProps.sx ?? {}}>
      <link
        href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@1,700&display=swap"
        rel="stylesheet"
      />

      <img
        src={MuenchnerKindlImage}
        loading="lazy"
        alt={"Münchner Kindl"}
        width={"100%"}
        height={"auto"}
      />
    </Box>
  );
};

export default MuenchnerKindl;
