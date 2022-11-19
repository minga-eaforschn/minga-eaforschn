import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Surprise from "../pages/home/components/Surprise";
import SearchActivitiesView from "../pages/home/components/SearchActivitiesView";
import ActivityRecommendationGen from "../pages/activity_recommendation/ActivityRecommendationGen";
import MyActivitiesView from "../pages/home/components/MyActivitiesView";

const Loadable = (Component: React.ElementType) => (props: any) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

const Home = Loadable(lazy(() => import("../pages/home/Home")));
const NotFound = Loadable(lazy(() => import("../pages/NotFound")));
const ActivityRecommendation = Loadable(
  lazy(() => import("../pages/activity_recommendation/ActivityRecommendation"))
);
const ActivityResult = Loadable(
  lazy(() => import("../pages/activity_result/ActivityResult"))
);

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { element: <Navigate to="/home" replace />, index: true },

        {
          path: "/home",
          element: <Home />,
          children: [
            {
              path: "surprise",
              element: <Surprise />,
            },
            {
              path: "search",
              element: <SearchActivitiesView />,
            },
            {
              path: "activities",
              element: <MyActivitiesView />,
            },
          ],
        },
        {
          path: "/activity/",
          children: [
            {
              path: "recommendation/:id",
              element: <ActivityRecommendation />,
            },
            {
              path: "recommendation",
              element: <ActivityRecommendationGen />,
            },
            { path: "result/:activityId", element: <ActivityResult /> },
          ],
        },
      ],
    },
    {
      path: "*",
      children: [
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
