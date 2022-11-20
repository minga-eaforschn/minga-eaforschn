import { Box, SxProps } from "@mui/material";
import MuenchnerKindlImage from "../assets/MuenchnerKindlPicture.png";
import SpeechBubble from "./SpeechBubble";

// Speech Bubbles inspired by https://freefrontend.com/css-speech-bubbles/
const MuenchnerKindl = (kindlProps: {
  sx?: SxProps;
  text?: string;
  textSx?: SxProps;
}) => {
  return (
    <Box sx={{ display: "flex" }}>
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
      {kindlProps.text && (
        <SpeechBubble
          text={kindlProps.text}
          sx={kindlProps.textSx}
        ></SpeechBubble>
      )}
    </Box>
  );
};

export default MuenchnerKindl;
