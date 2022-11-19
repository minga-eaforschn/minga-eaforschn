import { useGetActivitiesQuery } from "../../generated/graphql";
import { useEffect } from "react";
import Center from "../../components/Center";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router";

let recommendedActivities: Set<string> = new Set();
const ActivityRecommendationGen = () => {
  const { data, refetch } = useGetActivitiesQuery({
    variables: {
      excludedIds: Array.from(recommendedActivities),
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`useEffect called: ${data}`);
    if (data == null) {
      return;
    }
    if (data.activity.length <= recommendedActivities.size) {
      recommendedActivities.clear();
      console.log("refetching");
      refetch({
        excludedIds: [],
      });
    } else {
      const activities = data.activity;
      const min = 0;
      const max = recommendedActivities.size;
      const index = min + Math.random() * (max - min);
      console.log(index);
      const activity = activities[Math.floor(index)];
      recommendedActivities.add(activity.id);
      navigate(activity.id, { replace: true });
    }
  }, [data]);

  return (
    <Center>
      <CircularProgress />
    </Center>
  );
};

export default ActivityRecommendationGen;
