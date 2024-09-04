import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import InspireImg from "./assets/Group80.png";
import Image from "next/image";

const IMAGE_HEIGHT = "156.37px";
const TEXT_WIDTH = "508px";

const Inspire = () => {
  return (
    <Stack
      paddingTop="20px"
      sx={{
        margin: "auto",
        width: "90%",
      }}
      direction="column"
      alignItems={{
        xs: "center",
        sm: "center",
        lg: "flex-start",
      }}
      spacing={2}
    >
      <Stack position={"relative"} width={"100%"} height={"150px"}>
        <Image
          src={InspireImg}
          alt="Inspire"
          fill
          objectFit="contain"
          sizes="100vw"
          // sx={{
          //   width: {
          //     xs: "90%",
          //     sm: "80%",
          //     md: "40%",
          //     lg: "30%",
          //   },
          style={{
            objectPosition: "left",
            marginBottom: "20px",
          }}
        />
      </Stack>
      <Typography
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "50%",
        }}
      >
        Inspire is our Partner conference designed to empower Saniiro Partners
        and celebrate their journeys with us. It serves as a knowledge-sharing
        platform for global partners, industry leaders, and Saniiro experts.
      </Typography>
    </Stack>
  );
};

export default Inspire;
