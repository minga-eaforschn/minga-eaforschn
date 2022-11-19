import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";

const Surprise = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
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
