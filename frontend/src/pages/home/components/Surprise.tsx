import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import MuenchnerKindl from "../../../components/MuenchnerKindl";

const Surprise = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box sx={{ paddingLeft: "2rem", maxWidth: "750px" }}>
          <MuenchnerKindl
            sx={{ width: "55%" }}
            text={"Do you have plans for today?"}
          ></MuenchnerKindl>
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
        {/*TODO increase button size dynamically*/}
        <Button
          onClick={() => navigate("/activity/recommendation")}
          variant="contained"
          size={"large"}
        >
          Surprise me!
        </Button>
      </Box>
    </Box>
  );
};

export default Surprise;
