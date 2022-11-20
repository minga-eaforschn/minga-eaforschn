import { useGetActivityQuery } from "../../generated/graphql";
import Center from "../../components/Center";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Container,
  useTheme,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router";
import PixlKindl from "./components/PixlKindl";
import MpAvatar from "./components/Avatar";
// @ts-ignore
import okayLetsGo from "../../assets/sounds/okayLetsGo.mp3";
const playOkayyLetsGoo = async () => {
  const audio = new Audio(okayLetsGo);
  await audio.play();
  await new Promise((resolve) => setTimeout(resolve, 2000));
};

const ActivityRecommendation = () => {
  const params = useParams();
  const { data, loading, error, refetch } = useGetActivityQuery({
    variables: {
      id: params.id,
    },
  });
  const navigate = useNavigate();
  if (loading) {
    return (
      <Center>
        <CircularProgress />
      </Center>
    );
  }
  const activity = data?.activity_by_pk;
  if (!activity || error) {
    return (
      <Center>
        <Box display="flex" alignItems={"center"} flexDirection={"column"}>
          <Typography>Could not load activity...</Typography>
          <Box height="5px" />
          <Button onClick={() => refetch()}>Try again</Button>
        </Box>
      </Center>
    );
  }

  return (
    <Container
    // sx={{
    //   maxWidth: "sm",
    //   height: "100vh",
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "space-between",
    //   alignItems: "center",
    // }}
    >
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: "20px",
          width: "50%",
          minWidth: "300px",
        }}
      >
        <CardMedia
          image={activity.image_url}
          sx={{ height: 0, paddingTop: "56.25%" }}
        />
        <CardContent
          sx={{
            padding: "50px",
            minWidth: "300px",
          }}
        >
          {/*<Box*/}
          {/*  component="img"*/}
          {/*  height="400px"*/}
          {/*  maxWidth={"sm"}*/}
          {/*  src={activity.image_url}*/}
          {/*  alt=""*/}
          {/*  sx={{*/}
          {/*    marginTop: "16px",*/}
          {/*    objectFit: "cover",*/}
          {/*    objectPosition: "center",*/}
          {/*    borderRadius: "20px",*/}
          {/*  }}*/}
          {/*/>*/}
          {/*<Card*/}
          {/*  elevation={0}*/}
          {/*  sx={{*/}
          {/*    borderRadius: "20px 20px 0 0",*/}
          {/*    padding: "20px",*/}
          {/*  }}*/}
          {/*>*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "20px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">{activity.name}</Typography>
            <Chip
              avatar={<MpAvatar />}
              label={activity.gainable_xp}
              color="primary"
            />
          </Box>
          <Typography>{activity.short_description}</Typography>
          {/*{activity.estimated_duration_in_hours != null && (*/}
          {/*  <Typography variant="subtitle2">*/}
          {/*    Estimated duration: {activity.estimated_duration_in_hours} hrs*/}
          {/*  </Typography>*/}
          {/*)}*/}
          {/*{activity.estimated_pricing != null && (*/}
          {/*  <Typography variant="subtitle2">*/}
          {/*    Estimated price: {activity.estimated_pricing}€*/}
          {/*  </Typography>*/}
          {/*)}*/}
          {/*</Card>*/}
        </CardContent>
      </Card>

      <Box display={"flex"} justifyContent="space-between" padding={"20px"}>
        <PixlKindl
          direction="left"
          instruction="No, thanks"
          onInteraction={() => {
            navigate("/activity/recommendation", {
              replace: true,
            });
          }}
        />
        <PixlKindl
          instruction="Okayyy, let's gooo"
          onInteraction={async () => {
            await playOkayyLetsGoo();
            navigate(`/activity/result/${activity.id}`);
          }}
        />
      </Box>
    </Container>
  );
};

export default ActivityRecommendation;
