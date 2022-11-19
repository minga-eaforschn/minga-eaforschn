import { useGetActivityQuery } from "../../generated/graphql";
import Center from "../../components/Center";
import { Card, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import pixlkindl from "../../assets/pixlkindl.png";

const ActivityRecommendation = () => {
  const { data, loading, error, refetch } = useGetActivityQuery({
    variables: {
      id: "96e4473d-d41e-4a52-94dc-7f1d97dd7cbc",
    },
  });
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
        <Typography>Could not load activity...</Typography>
        <Box height="5px" />
        <Button onClick={() => refetch()}>Try again</Button>
      </Center>
    );
  }
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Box component="img" width="100vw" src={activity.image_url} alt="" />
        <Card
          elevation={0}
          sx={{
            borderRadius: "20px 20px 0 0",
            padding: "20px",
          }}
        >
          <Typography variant="h5">{activity.name}</Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography>{activity.short_description}</Typography>
            {activity.gainable_xp != null && (
              <Typography>+{activity.gainable_xp} XP</Typography>
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
        <PixlKindl direction="left" instruction="No, thanks" />
        <PixlKindl instruction="Okay, let's gooo" />
      </Box>
    </Box>
  );
};

interface PixlKindlProps {
  direction?: "left" | "right";
  instruction: string;
}

const PixlKindl: React.FC<PixlKindlProps> = ({ direction, instruction }) => {
  direction ??= "right";
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        flexDirection="column"
      >
        <Box
          width="50%"
          component="img"
          src={pixlkindl}
          sx={{
            transform: `scaleX(${direction === "left" ? -1 : 1})`,
          }}
        />
        <Box height={5} />
        <Button variant={direction === "left" ? "outlined" : "contained"}>
          {instruction}
        </Button>
      </Box>
    </Box>
  );
};

export default ActivityRecommendation;
