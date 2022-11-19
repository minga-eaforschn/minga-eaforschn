import { useGetActivityQuery } from "../../generated/graphql";
import Center from "../../components/Center";
import { Card, CircularProgress, Container, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router";
import PixlKindl from "./components/PixlKindl";

const ActivityRecommendation = () => {
  const params = useParams();
  const { data, loading, error, refetch } = useGetActivityQuery({
    variables: {
      id: params.id,
    },
  });
  const theme = useTheme();
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
      sx={{
        maxWidth: "sm",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection={"column"}
        width={"100%"}
        alignItems={"center"}
      >
        <Box
          component="img"
          height="400px"
          maxWidth={"sm"}
          src={activity.image_url}
          alt=""
          sx={{
            marginTop: "16px",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "20px",
          }}
        />
        <Card
          elevation={0}
          sx={{
            borderRadius: "20px 20px 0 0",
            padding: "20px",
          }}
        >
          <Typography variant="h5">{activity.name}</Typography>
          <Box display={"flex"}>
            <Typography>{activity.short_description}</Typography>
            {activity.gainable_xp != null && (
              <>
                <Box width="10px" />
                <Typography color={theme.palette.secondary.main}>
                  +{activity.gainable_xp} MP
                </Typography>
              </>
            )}
          </Box>
          {activity.estimated_duration_in_hours != null && (
            <Typography variant="subtitle2">
              Estimated duration: {activity.estimated_duration_in_hours} hrs
            </Typography>
          )}
          {activity.estimated_pricing != null && (
            <Typography variant="subtitle2">
              Estimated price: {activity.estimated_pricing}€
            </Typography>
          )}
        </Card>
      </Box>
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
          instruction="Okay, let's gooo"
          onInteraction={() => {
            navigate(`/activity/result/${activity.id}`);
          }}
        />
      </Box>
    </Container>
  );
};

export default ActivityRecommendation;
