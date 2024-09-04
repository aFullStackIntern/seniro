import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import roundedAwwow from "../assets/curveArrow.png";
const SaveUpTo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          zIndex: "1",
          marginTop: "25px",
        }}
      >
        <Typography
          sx={{
            paddingY: "25px",
            paddingX: "8px",
            fontFamily: "Work Sans",
            fontSize: "10px",
            fontWeight: "bold",
            lineHeight: "10px",
            letterSpacing: "0em",
            textAlign: "center",
            textTransform: "uppercase",
            color: "#F15B25",
          }}
        >
          Save up to 34%
        </Typography>
        <Box
          component={"img"}
          src={roundedAwwow}
          alt="arrow"
          sx={{
            transform: "scaleX(-1)",
            width: "50px",
            height: "50px",
          }}
        />
      </Stack>
    </Box>
  );
};

export default SaveUpTo;
