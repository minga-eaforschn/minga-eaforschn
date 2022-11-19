import {
  Activity_Status_Enum,
  useGetUserActivitiesQuery,
} from "../../../generated/graphql";
import moment from "moment";
import { Avatar, Box, Card, CircularProgress, Icon, List } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  CalendarTodayOutlined,
  CheckCircle,
  Done,
  PendingActions,
  SvgIconComponent,
  SyncLock,
  TimerOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const getIconColor = (status: Activity_Status_Enum) => {
  switch (status) {
    case Activity_Status_Enum.Done:
      return "success";
    case Activity_Status_Enum.Ongoing:
      return "warning";
    case Activity_Status_Enum.Outstanding:
      return "error";
  }
};

const getTextColor = (status: Activity_Status_Enum) => {
  switch (status) {
    case Activity_Status_Enum.Done:
      return "success.main";
    case Activity_Status_Enum.Ongoing:
      return "warning.main";
    case Activity_Status_Enum.Outstanding:
      return "error.main";
  }
};

const getIcon = (status: Activity_Status_Enum) => {
  let Icon: SvgIconComponent;
  switch (status) {
    case Activity_Status_Enum.Done:
      Icon = CheckCircle;
      break;
    case Activity_Status_Enum.Ongoing:
      Icon = TimerOutlined;
      break;

    case Activity_Status_Enum.Outstanding:
      Icon = CalendarTodayOutlined;
  }
  return <Icon />;
};

const MyActivitiesView = () => {
  const { data, loading, error } = useGetUserActivitiesQuery();
  const activities = data?.user_activity;
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar
        sx={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
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
                    display: "flex",
                    flexDirection: "column",
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
                            color={getTextColor(userActivity.status)}
                          >
                            {userActivity.status}
                          </Typography>
                          <Box width={10} />
                          {getIcon(userActivity.status)}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {userActivity.status === Activity_Status_Enum.Ongoing && (
                    <>
                      <Box height="10px" />

                      <Box display={"flex"} justifyContent={"end"}>
                        <Button
                          onClick={() => {
                            navigate("/activity/complete/" + activity.id);
                          }}
                          variant="contained"
                          color="success"
                        >
                          Complete Now <Done />
                        </Button>
                      </Box>
                    </>
                  )}
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
