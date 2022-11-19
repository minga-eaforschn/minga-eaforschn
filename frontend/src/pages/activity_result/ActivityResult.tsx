import Box from "@mui/material/Box";
import React from "react";
import { useParams } from "react-router";
import { useGetActivityQuery } from "../../generated/graphql";
import Center from "../../components/Center";
import {
  Card,
  CardContent,
  CircularProgress,
  createStyles,
  makeStyles,
  Stack,
  Theme,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AccessTime, Payments, Scoreboard } from "@mui/icons-material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     attributeCard: {
//       flexGrow: 1,
//       margin: "10px",
//     },
//   })
// );

const ActivityResult: React.FC = (props) => {
  // const classes = useStyles();
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

  const coordinates = activity.coordinates;
  const lat = coordinates["lat"];
  const lon = coordinates["lon"];

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;

  return (
    <Box>
      <Card
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CardContent
          sx={{
            boxShadow: 3,
            margin: "50px",
            borderRadius: "20px",
            padding: "50px",
            width: "50%",
            minWidth: "300px",
          }}
        >
          <div
            id={"map"}
            style={{
              height: "500px",
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
              <Card sx={{ flexGrow: 1 }}>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <AccessTime />
                    <Typography variant="body2">
                      {activity.estimated_duration_in_hours} hours
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
              <Card sx={{ flexGrow: 1 }}>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <AccessTime />
                    <Typography variant="body2">
                      {activity.estimated_duration_in_hours} hours
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
              <Card sx={{ flexGrow: 1 }}>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <AccessTime />
                    <Typography variant="body2">
                      {activity.estimated_duration_in_hours} hours
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Box>

            <Stack direction="row" spacing={1}>
              <AccessTime />
              <Typography variant="body2">
                {activity.estimated_duration_in_hours} hours
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Payments />
              <Typography variant="body2">
                {activity.estimated_pricing} euros
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Scoreboard />
              <Typography variant="body2">{activity.gainable_xp} MP</Typography>
            </Stack>
          </div>
          <Button href={mapUrl}>Zu Google Maps</Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ActivityResult;
