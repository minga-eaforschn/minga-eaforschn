import { useNavigate, useParams } from "react-router";
import { useGetActivityQuery } from "../../generated/graphql";
import Center from "../../components/Center";
import { Card, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { UploadFile } from "@mui/icons-material";
import MuenchnerKindl from "../../components/MuenchnerKindl";

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
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent="center"
      sx={{ margin: "10px" }}
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
              // const event = new Event("completed");
              // document.dispatchEvent(event);

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
      <MuenchnerKindl
        sx={{ width: "20%", paddingTop: "20px" }}
        text={
          "Grias di, congratulations on completing your first exploration! I'm really proud of you."
        }
      ></MuenchnerKindl>
    </Box>
  );
};

export default CompleteActivity;
