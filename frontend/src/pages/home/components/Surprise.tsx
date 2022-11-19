import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import MuenchnerKindl from "../../../components/MuenchnerKindl";
import SpeechBubble from "../../../components/SpeechBubble";

const Surprise = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box sx={{ paddingTop: "45%", paddingLeft: "2rem" }}>
          <MuenchnerKindl sx={{ width: "55%" }}></MuenchnerKindl>
          <SpeechBubble
            text={"Do you have plans for today?"}
            sx={{ width: "60%", left: "73%" }}
          ></SpeechBubble>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <Button
          onClick={() => navigate("/activity/recommendation")}
          variant="contained"
        >
          Surprise me!
        </Button>
      </Box>
    </Box>
  );
};

export default Surprise;
