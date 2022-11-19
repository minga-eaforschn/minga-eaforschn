import Box from "@mui/material/Box";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { useGetActivityQuery } from "../../generated/graphql";
import Center from "../../components/Center";
import { CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
  return (
    <Box>
      <Box
        component="img"
        src={"https://media.giphy.com/media/3o7TKSjRrfIPjeUGDK/giphy.gif"}
        sx={{
          width: "100%",
          height: "100%",
        }}
      />
      <Typography variant="h5">{activity.name}</Typography>
    </Box>
  );
};

export default ActivityResult;
