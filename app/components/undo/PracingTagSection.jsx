import React from "react";
import { Stack, Typography } from "@mui/material";
const TagSection = () => {
  return (
    <Stack
      marginTop={"82px"}
      marginBottom={"25px"}
      gap={4}
      width={"95%"}
      m={{
        xs: "10px auto 25px",
        lg: "82px auto 25px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontSize: "30px",
          fontWeight: "500",
          lineHeight: "40px",
          letterSpacing: "0em",
          textAlign: "center",
        }}
      >
        To get the best, Compare with the best.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontSize: "20px",
          fontWeight: "500",
          lineHeight: "20px",
          letterSpacing: "0em",
          textAlign: "center",
        }}
      >
        Our packages fulfill your business needs.
      </Typography>
    </Stack>
  );
};

export default TagSection;
