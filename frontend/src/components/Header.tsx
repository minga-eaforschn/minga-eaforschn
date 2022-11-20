import { Avatar, Box, Divider, Typography } from "@mui/material";
import logo from "../assets/MingaEaforschnLogo.png";
import profilePicture from "../assets/StephanLe.jpeg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

// Speech Bubbles inspired by https://freefrontend.com/css-speech-bubbles/
const Header = (kindlProps: { sx?: any }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() => {
            navigate("/home/surprise");
          }}
        >
          <img src={logo} height={"80px"} width={"auto"} alt={"logo"} />
        </Button>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
          }}
        >
          <Typography variant={"caption"} sx={{ marginRight: "3px" }}>
            Stephan
          </Typography>
          {/* TODO make logo and avatar size more equal */}
          <Avatar src={profilePicture}></Avatar>
        </Box>
      </Box>

      <Divider sx={{ marginTop: "5px", marginBottom: "10px" }} />
    </Box>
  );
};

export default Header;
