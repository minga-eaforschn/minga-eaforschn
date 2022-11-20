import { useGetActivitiesQuery } from "../../generated/graphql";
import { useEffect } from "react";
import Center from "../../components/Center";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router";

let recommendedActivities: string[] = [];
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
    if (data.activity.length <= recommendedActivities.length) {
      recommendedActivities = [];
      console.log("refetching");
      refetch({
        excludedIds: [],
      });
    } else {
      const activities = data.activity.filter(
        (it) => !recommendedActivities.includes(it.id)
      );
      const activitiesWithPos = activities.filter((it) => it.position !== null);
      const activitiesWithOutPos = activities.filter(
        (it) => it.position === null
      );

      let activity;
      if (activitiesWithPos.length !== 0) {
        activity = activitiesWithPos[0];
      } else {
        const min = 0;
        const max = activitiesWithOutPos.length;
        const index = min + Math.random() * (max - min);
        console.log(index);
        activity = activitiesWithOutPos[Math.floor(index)];
      }

      recommendedActivities.push(activity.id);
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
