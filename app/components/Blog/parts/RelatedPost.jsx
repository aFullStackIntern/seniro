// import { Stack, Typography } from "@mui/material";
// import React from "react";

// const RelatedPost = () => {
//   return (
//     <Stack
//       direction={"column"}
//       gap={3}
//       alignItems={"center"}
//       marginBottom={"50px"}
//       borderTop={"1px solid gray"}
//       borderBottom={"1px solid gray"}
//       paddingTop={"20px"}
//       paddingBottom={"20px"}
//     >
//       <Stack direction={"column"} gap={3}>

//       </Stack>
//     </Stack>
//   );
// };

// export default RelatedPost;
import React, { useEffect, useState } from "react";
import { Stack, Typography, Paper, Box } from "@mui/material";
import axios from "axios"; // make sure to install axios using npm or yarn

const RelatedPost = () => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const response = await axios.get(
          "http://dev.saniiro.net/api/v1/feedback/reply"
        );
        if (response.data.Status === 1000) {
          setReplies(response.data.Data);
        } else {
          console.error("Failed to fetch data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchReplies();
  }, []);

  return (
    <Stack
      gap={3}
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      alignItems="center"
      marginBottom="50px"
      borderTop="1px solid gray"
      borderBottom="1px solid gray"
      paddingTop="20px"
      paddingBottom="20px"
    >
      {replies.map((reply) => (
        <Box
          key={reply.Id}
          width="30%"
          borderBottom="1px solid #e0e0e0"
          paddingY="10px"
        >
          <Typography variant="subtitle1" color="text.primary">
            {reply.Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {reply.UserComment}
          </Typography>
          <Typography variant="caption" color="gray">
            Posted on: {new Date(reply.Createdatetime).toLocaleString()}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default RelatedPost;
