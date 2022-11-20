import "./activity-result.css";
import Box from "@mui/material/Box";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { useGetActivityQuery } from "../../generated/graphql";
import Center from "../../components/Center";
import { Card, CardContent, CircularProgress, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Scoreboard } from "@mui/icons-material";
import CostCard from "../../components/CostCard";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const ActivityResult: React.FC = (props) => {
  const { activityId } = useParams();
  const navigate = useNavigate();
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

  return (
    <Box
      key={`activity-${activity.id}`}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "white",
      }}
    >
      <CardContent
        sx={{
          boxShadow: 3,
          margin: "50px",
          borderRadius: "20px",
          padding: "50px",
          width: "50%",
          minWidth: "300px",
          background: "white",
        }}
      >
        <div
          id={"map"}
          style={{
            height: "500px",
            borderRadius: "10px",
          }}
        >
          <MapContainer
            id="osm-map"
            center={[lat, lon]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lon]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div>
          <Typography variant="h2" sx={{ marginTop: "40px" }}>
            {activity.name}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "20px" }}>
            {activity.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignContent: "space-around",
              marginTop: "20px",
            }}
          >
            <CostCard cost={activity.estimated_costs} />
            <Card className={"info-card"}>
              <CardContent className={"info-card-content"}>
                <Stack direction="row" spacing={"20px"}>
                  <Scoreboard />
                  <Typography variant="body2">
                    {activity.gainable_xp} MP
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </div>
        <Box
          sx={{ marginTop: "20px" }}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Button
            onClick={() => {
              navigate(-1);
            }}
            variant="outlined"
          >
            Discard
          </Button>
          <Button
            onClick={() => {
              navigate("/home/activities", {
                replace: true,
              });
            }}
            variant="contained"
          >
            Start challenge
          </Button>
        </Box>
      </CardContent>
    </Box>
  );
};

export default ActivityResult;
