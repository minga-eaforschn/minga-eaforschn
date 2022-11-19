import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import MuenchnerKindl from "../../../components/MuenchnerKindl";
import SpeechBubble from "../../../components/SpeechBubble";

const Surprise = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box>
        <MuenchnerKindl></MuenchnerKindl>
        <SpeechBubble
          text={"Do you have plans for today?"}
          sx={{ width: "60%" }}
        ></SpeechBubble>
      </Box>
      <Button
        onClick={() => navigate("/activity/recommendation")}
        variant="contained"
      >
        Surprise me!
      </Button>
    </Box>
  );
};

export default Surprise;
