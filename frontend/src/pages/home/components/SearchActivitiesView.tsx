import {
  Avatar,
  Box,
  Card,
  CircularProgress,
  FormControl,
  List,
  TextField,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  ActivityFragment,
  useSearchActivitiesQuery,
} from "../../../generated/graphql";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { PlayArrow, SearchOutlined, ThumbUp } from "@mui/icons-material";
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
    <Box display={"flex"} alignItems={"center"}>
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
      <Box width={10} />
      <SearchOutlined />
    </Box>
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
                marginBottom: index === activities.length - 1 ? "70px" : 0,
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
              <Box height={"10px"} />
              <Box
                height={30}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <LikeButton activity={activity} />
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

interface LikeButtonProps {
  activity: ActivityFragment;
}

const LikeButton: React.FC<LikeButtonProps> = ({ activity }) => {
  const [isSet, setIsSet] = React.useState(
    activity.likes.filter((like) => like.user_id === 1).length > 0
  );
  const [likes, setLikes] = React.useState(activity.likes.length);
  const theme = useTheme();
  return (
    <Box display={"flex"} alignItems="center">
      <Button
        sx={{
          padding: "0px",
          minWidth: "0px",
          minHeight: 0,
          display: "inline-block",
        }}
        onClick={() => {
          if (isSet) {
            setLikes((prevState) => prevState - 1);
            setIsSet(false);
            return;
          }
          setLikes((prevState) => prevState + 1);
          setIsSet(true);
        }}
      >
        <ThumbUp color={isSet ? "primary" : "secondary"} />
      </Button>
      <Box width={10}></Box>
      <Typography>{likes}</Typography>
    </Box>
  );
};

export default SearchActivitiesView;
