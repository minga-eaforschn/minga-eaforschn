import {useGetActivityQuery} from "../../generated/graphql";
import Center from "../../components/Center";
import {Card, CircularProgress, useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ActivityRecommendation = () => {
  const theme = useTheme();
  const {data, loading, error, refetch} = useGetActivityQuery({
    variables: {
      id:
        "96e4473d-d41e-4a52-94dc-7f1d97dd7cbc",
    }
  });
  if (loading) {
    return <Center>
      <CircularProgress/>
    </Center>
  }

  const activity = data?.activity_by_pk;
  if (!activity || error) {
    return <Center>
      <Typography>Could not load activity...</Typography>
      <Box height="5px"/>
      <Button onClick={() => refetch()}>Try again</Button>
    </Center>
  }
  return <Box display="flex" flexDirection="column">
    <Box  component="img"  width="100vw" src={activity.image_url} alt=""/>
    <Card elevation={0} sx={{
      borderRadius: "20px 20px 0 0",
      padding: "20px",
      flexGrow: 1,
      height: "100%",
    }}>
      <Typography variant="h5">
        {activity.name}
      </Typography>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography>
          {activity.short_description}
        </Typography>
        {activity.gainable_xp != null && <Typography>
            +{activity.gainable_xp} XP
        </Typography>}
      </Box>
      {activity.estimated_duration_in_hours != null && <Typography variant="subtitle2">
          Estimated duration: {activity.estimated_duration_in_hours} hrs
      </Typography>}
      {activity.estimated_pricing != null && <Typography variant="subtitle2">
          Estimated price: {activity.estimated_pricing}€
      </Typography>}
    </Card>
  </Box>
}

export default ActivityRecommendation;