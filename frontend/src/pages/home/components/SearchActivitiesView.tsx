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
  return (
    <Box>
      <SearchBar
        setSearchQuery={(searchQuery) => {
          setSearchQuery(searchQuery);
        }}
      />
      <Box height={5} />
      {loading || error || data == null ? (
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
          {data.activity.map((activity) => (
            <Card
              key={activity.id}
              sx={{
                padding: "20px",
                marginY: "8px",
              }}
            >
              <Box display="flex" alignItems="center">
                <Avatar src={activity.image_url} />
                <Box width={10} />
                <Box>
                  <Typography>{activity.name}</Typography>
                  <Typography variant="subtitle2">
                    {activity.short_description}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SearchActivitiesView;
