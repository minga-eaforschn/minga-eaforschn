import { Avatar, Box, Divider, SxProps, Typography } from "@mui/material";
import logo from "../assets/MingaEaforschnLogo.png";
import profilePicture from "../assets/StephanLe.jpeg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import ProfileMPBar from "./ProfileMPBar";

// Speech Bubbles inspired by https://freefrontend.com/css-speech-bubbles/
const Header = (headerProps: { sx?: SxProps }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          sx={{ marginLeft: "5px" }}
          onClick={() => {
            navigate("/home/surprise");
          }}
        >
          <Box></Box>
          <img src={logo} height={"80px"} width={"auto"} alt={"logo"} />
        </Button>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginRight: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <ProfileMPBar />
            <Typography
              variant={"caption"}
              color={"text.secondary"}
              sx={{
                flexBasis: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Minga Padawan
            </Typography>
            {/*<Typography*/}
            {/*  variant={"caption"}*/}
            {/*  color={"text.secondary"}*/}
            {/*  sx={{*/}
            {/*    flexBasis: "100%",*/}
            {/*    display: "flex",*/}
            {/*    justifyContent: "center",*/}
            {/*    alignItems: "center",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  (Level 2)*/}
            {/*</Typography>*/}
          </Box>

          <Box
            display={"flex"}
            flexDirection="column"
            sx={{ marginRight: "5px" }}
          >
            <Box>
              <Avatar src={profilePicture}></Avatar>
              <Typography variant={"caption"}>Stephan</Typography>
            </Box>
          </Box>
          {/* TODO make logo and avatar size more equal */}
        </Box>
      </Box>

      <Divider sx={{ marginTop: "5px", marginBottom: "10px" }} />
    </Box>
  );
};

export default Header;
