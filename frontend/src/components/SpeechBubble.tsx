import { Box, SxProps } from "@mui/material";
import "./SpeechBubble.css";
import { useEffect, useState } from "react";

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

const calculateSpeechBubbleSize = () => {
  let width = 50 + windowWidth / 20;
  let height = 10 + windowHeight / 10;

  if (height > 30) {
    height = 20 + windowHeight / 50;
  }
  if (width > 100) {
    width = 100;
  }
  return { width: width + "%", height: height + "%" };
};

function wrapLettersInElement(text: string) {
  let result = "";

  for (let index = 0; index < text.length; index++) {
    let currentLetter = text.charAt(index);
    if (currentLetter === " ") {
      currentLetter = "&nbsp;";
    }
    result += `<span style="padding: 0; visibility: hidden" id="letter-${index}">${currentLetter}</span>`;
  }
  return result;
}

const DELAY_NEXT_LETTER_IN_MILLISECONDS = 60;

export default function SpeechBubble(speechBubbleProps: {
  text: string;
  sx?: SxProps;
}) {
  function delay(milliseconds: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }

  useEffect(() => {
    revealLettersWithTypewriterEffect(speechBubbleProps.text.length);
  });

  async function revealLettersWithTypewriterEffect(stringLength: number) {
    for (let index = 0; index < stringLength; index++) {
      let currentLetterHtmlElement = document.getElementById(`letter-${index}`);
      if (currentLetterHtmlElement) {
        currentLetterHtmlElement.style.visibility = "visible";
        await delay(DELAY_NEXT_LETTER_IN_MILLISECONDS);
      }
    }
  }

  return (
    <Box className="cartoon">
      <Box
        className="bubble b r hb"
        sx={calculateSpeechBubbleSize()}
        dangerouslySetInnerHTML={{
          __html: wrapLettersInElement(speechBubbleProps.text),
        }}
      ></Box>
    </Box>
  );
}
