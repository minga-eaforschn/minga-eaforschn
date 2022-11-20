import { Box, SxProps } from "@mui/material";
import "./SpeechBubble.css";

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

const calculateSpeechBubbleSize = () => {
  const width = 100 - windowWidth / 20;
  const height = 100 - windowHeight / 10;
  return { width: width + "%", height: height + "%" };
};

// Speech Bubbles inspired by https://freefrontend.com/css-speech-bubbles/, see https://codepen.io/alvaromontoro/pen/zYqzgoy
const SpeechBubble = (speechBubbleProps: { text: string; sx?: SxProps }) => {
  // TODO calculate width and height, so that text is always displayed -> otherwise breaks with data from hasura
  // TODO add typewriter effect
  // (TODO complete speech bubble with arrow)
  return (
    <Box className="cartoon">
      <Box className="bubble b r hb" sx={calculateSpeechBubbleSize()}>
        <span className="anim-typewriter">{speechBubbleProps.text}</span>
      </Box>
    </Box>
  );
};

export default SpeechBubble;
