import { useNavigate, useParams } from "react-router";
import { useGetActivityQuery } from "../../generated/graphql";
import Center from "../../components/Center";
import { Card, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { UploadFile } from "@mui/icons-material";

const CompleteActivity = () => {
  const { activityId } = useParams<{ activityId: string }>();
  const { data, loading, error } = useGetActivityQuery({
    variables: {
      id: activityId,
    },
  });

  const navigate = useNavigate();

  const activity = data?.activity_by_pk;
  if (loading || error || !activity) {
    return (
      <Center>
        <CircularProgress />
      </Center>
    );
  }

  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent="center"
    >
      <Card
        sx={{
          padding: "16px",
          maxWidth: "sm",
        }}
      >
        <Typography variant="h5">{activity.name}</Typography>
        <Box height="5px" />
        <Box
          component={"img"}
          src={activity.image_url}
          sx={{
            width: "100%",
            borderRadius: "10px",
            objectPosition: "center",
            objectFit: "cover",
          }}
        />
        <Box height="5px" />
        <Box display={"flex"} justifyContent={"space-between"}>
          <Button
            variant={"outlined"}
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
          <Box width={"10px"} />
          <Button component={"label"} variant={"text"} onClick={() => {}}>
            Upload image <UploadFile />
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              onChange={(event) => {
                console.log(event.currentTarget.value);
              }}
              hidden
            />
          </Button>
          <Box width={"10px"} />
          <Button
            onClick={async () => {
              navigate("/home/activities", {
                replace: true,
              });
            }}
            variant={"contained"}
          >
            Complete
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default CompleteActivity;
