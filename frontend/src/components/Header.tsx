import { Avatar, Box, Divider, Typography } from "@mui/material";
import logo from "../assets/MingaEaforschnLogo.png";
import profilePicture from "../assets/StephanLe.jpeg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import ProfileMPBar from "./ProfileMPBar";

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
          <ProfileMPBar />
          <Box width={10} />

          <Box display={"flex"} flexDirection="column">
            <Typography variant={"caption"}>Stephan (2)</Typography>
            <Box height={5} />

            <Typography variant={"caption"} color={"text.secondary"}>
              Minga Padawan
            </Typography>
          </Box>
          {/* TODO make logo and avatar size more equal */}
          <Box width={10} />
          <Avatar src={profilePicture}></Avatar>
        </Box>
      </Box>

      <Divider sx={{ marginTop: "5px", marginBottom: "10px" }} />
    </Box>
  );
};

export default Header;
