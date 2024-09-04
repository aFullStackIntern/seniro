import { Box, Stack } from "@mui/material";
import React from "react";
import tweet from "../../assets/image 179.png";
const TweetCard = () => {
  return (
    <Stack
      width={{
        xs: "95%",
        sm: "90%",
        md: "85%",
        lg: "80%",
      }}
      border={"2px solid lightgray"}
      borderRadius={2}
    >
      <Stack>
        <Box component="img" src={tweet} width={"100%"} height={"100%"} />
      </Stack>
    </Stack>
  );
};

export default TweetCard;
