import {
  Activity_Status_Enum,
  useGetUserActivitiesQuery,
} from "../../../generated/graphql";
import moment from "moment";
import {
  Avatar,
  Box,
  Card,
  CircularProgress,
  Icon,
  List,
  useTheme,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  CalendarTodayOutlined,
  CheckCircle,
  PendingActions,
  SvgIconComponent,
} from "@mui/icons-material";

const getColor = (status: Activity_Status_Enum) => {
  switch (status) {
    case Activity_Status_Enum.Done:
      return "success";
    case Activity_Status_Enum.Ongoing:
      return "warning";
    case Activity_Status_Enum.Outstanding:
      return "error";
  }
};

const getIcon = (status: Activity_Status_Enum) => {
  let Icon: SvgIconComponent;
  switch (status) {
    case Activity_Status_Enum.Done:
      Icon = CheckCircle;
      break;
    case Activity_Status_Enum.Ongoing:
      Icon = PendingActions;
      break;

    case Activity_Status_Enum.Outstanding:
      Icon = CalendarTodayOutlined;
  }
  return <Icon color={getColor(status)} />;
};

const MyActivitiesView = () => {
  const { data, loading, error } = useGetUserActivitiesQuery();
  const activities = data?.user_activity;
  return (
    <Box>
      <AppBar
        sx={{
          position: "sticky",
          padding: "16px",
        }}
      >
        My activities
      </AppBar>
      <Box height={5} />
      <Box
        sx={{
          padding: "16px",
        }}
      >
        {loading || error || activities == null ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : activities.length === 0 ? (
          <Typography>
            You have no activities yet. Search for an activity to add it to your
            list.
          </Typography>
        ) : (
          <List
            sx={{
              paddingX: "20px",
              paddingY: "5px",
            }}
          >
            {activities.map((userActivity, index) => {
              const activity = userActivity.activity;
              const dueTo = moment(userActivity.due_to).format("DD.MM.YYYY");
              return (
                <Card
                  key={activity.id}
                  sx={{
                    padding: "20px",
                    marginY: "8px",
                    marginBottom: index === activities.length - 1 ? "70px" : 0,
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <Avatar src={activity.image_url} />
                    <Box width={10} />
                    <Box width={"100%"}>
                      <Typography>{activity.name}</Typography>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"end"}
                      >
                        <Typography variant="subtitle2" flexGrow={1}>
                          {dueTo}
                        </Typography>
                        <Box width={10} />
                        <Box display="flex" alignItems="center">
                          <Typography
                            variant="subtitle2"
                            color={getColor(userActivity.status)}
                          >
                            {userActivity.status}
                          </Typography>
                          <Box width={10} />
                          {getIcon(userActivity.status)}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              );
            })}
          </List>
        )}
      </Box>
    </Box>
  );
};

export default MyActivitiesView;
