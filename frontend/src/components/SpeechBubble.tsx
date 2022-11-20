import { Box, SxProps } from "@mui/material";
import "./SpeechBubble.css";
import { within } from "@testing-library/react";

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

const calculateSpeechBubbleSize = () => {
  let width = 50 + windowWidth / 20;
  let height = 10 + windowHeight / 10;

  console.log(height);
  console.log(width);
  if (height > 30) {
    height = 20 + windowHeight / 50;
  }
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
        {/* eslint-disable-next-line react/style-prop-object */}
        <span className={"type"}>{speechBubbleProps.text}</span>
      </Box>
    </Box>
  );
};

export default SpeechBubble;
