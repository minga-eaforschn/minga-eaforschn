import { Box, SxProps } from "@mui/material";
import "./SpeechBubble.css";

// Speech Bubbles inspired by https://freefrontend.com/css-speech-bubbles/, see https://codepen.io/alvaromontoro/pen/zYqzgoy
const SpeechBubble = (speechBubbleProps: { text: string; sx?: SxProps }) => {
  // TODO calculate width and height, so that text is always displayed -> otherwise breaks with data from hasura
  // TODO add typewriter effect
  // (TODO complete speech bubble with arrow)
  return (
    <Box>
      <Box className="cartoon">
        <Box className="bubble b r hb" sx={speechBubbleProps.sx}>
          <span className="anim-typewriter">{speechBubbleProps.text}</span>
        </Box>
      </Box>
    </Box>
  );
};

export default SpeechBubble;
