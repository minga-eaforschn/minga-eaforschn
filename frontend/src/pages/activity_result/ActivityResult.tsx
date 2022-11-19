import Box from "@mui/material/Box";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { useGetActivityQuery } from "../../generated/graphql";
import Center from "../../components/Center";
import { CircularProgress, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AccessTime, Payments, Scoreboard } from "@mui/icons-material";

const ActivityResult: React.FC = (props) => {
  const { activityId } = useParams();

  const { data, loading, error, refetch } = useGetActivityQuery({
    variables: {
      id: activityId,
    },
  });
  if (loading) {
    return (
      <Center>
        <CircularProgress />
      </Center>
    );
  }

  if (activityId === undefined) {
    return (
      <Box>
        <h1>Activity Id is undefined</h1>
      </Box>
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

  const coordinates = activity.coordinates;
  const lat = coordinates["lat"];
  const lon = coordinates["lon"];

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;

  return (
    <Box>
      <Typography variant="h5">{activity.name}</Typography>
      <img src={activity.image_url} />
      <Stack direction="row" spacing={1}>
        <AccessTime />
        <Typography variant="body2">
          {activity.estimated_duration_in_hours} hours
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Payments />
        <Typography variant="body2">
          {activity.estimated_pricing} euros
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Scoreboard />
        <Typography variant="body2">{activity.gainable_xp} MP</Typography>
      </Stack>
      <Button href={mapUrl}>Zu Google Maps</Button>
    </Box>
  );
};

export default ActivityResult;
