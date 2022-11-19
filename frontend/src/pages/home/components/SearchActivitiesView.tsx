import {
  Avatar,
  Box,
  Card,
  CircularProgress,
  FormControl,
  List,
  TextField,
} from "@mui/material";
import React from "react";
import { useSearchActivitiesQuery } from "../../../generated/graphql";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { PlayArrow } from "@mui/icons-material";
import { useNavigate } from "react-router";

interface SearchBarProps {
  setSearchQuery: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => (
  <FormControl
    sx={{
      padding: "16px",
    }}
    fullWidth
  >
    <TextField
      id="search-bar"
      className="text"
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Search an activity"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
  </FormControl>
);

const SearchActivitiesView = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { data, loading, error } = useSearchActivitiesQuery({
    variables: {
      query: `%${searchQuery}%`,
    },
  });
  const activities = data?.activity;
  const navigate = useNavigate();
  return (
    <Box>
      <SearchBar
        setSearchQuery={(searchQuery) => {
          setSearchQuery(searchQuery);
        }}
      />
      <Box height={5} />
      {loading || error || activities == null ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <List
          sx={{
            paddingX: "20px",
            paddingY: "5px",
          }}
        >
          {activities.map((activity, index) => (
            <Card
              key={activity.id}
              sx={{
                padding: "20px",
                marginY: "8px",
                marginBottom: index == activities.length - 1 ? "70px" : 0,
              }}
            >
              <Box display="flex" alignItems="center">
                <Avatar src={activity.image_url} />
                <Box width={20} />
                <Box>
                  <Typography>{activity.name}</Typography>
                  <Typography variant="subtitle2">
                    {activity.short_description}
                  </Typography>
                </Box>
              </Box>
              <Box width={"10px"} />
              <Box display={"flex"} justifyContent={"end"}>
                <Button
                  onClick={() => {
                    navigate("/activity/result/" + activity.id);
                  }}
                >
                  Start challenge {<PlayArrow />}
                </Button>
              </Box>
            </Card>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SearchActivitiesView;
