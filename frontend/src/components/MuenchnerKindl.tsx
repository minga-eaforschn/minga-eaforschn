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
      <Box sx={kindlProps.sx ?? { width: "80px" }}>
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />

        <Box minWidth={"100px"}>
          <img
            src={MuenchnerKindlImage}
            id={"findMe"}
            loading="lazy"
            alt={"Münchner Kindl"}
            width={"100%"}
            height={"auto"}
          />
        </Box>
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
