import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <Button onClick={() => navigate('/activity/recommendation')} variant="contained">
      Surprise me!
    </Button>
  </Box>
}
