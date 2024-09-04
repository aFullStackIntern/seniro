import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../../utils/Button";
import Nav from "../../Navbar/Nav";

const BannerVirtualTraining = () => {
  return (
    <Stack
      sx={{
        background:
          "linear-gradient(0deg, rgba(133, 159, 255, 0) 38.85%, #859FFF 84.69%)",
        width: "100%",
        height: "45vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "Start",
        alignItems: "center",
      }}
    >
      <Nav />
      <Stack
        mt={{
          xs: 3,
          sm: 4,
          smm: 5,
          md: 6,
        }}
        gap={2}
        width={{
          xs: "95%",
          sm: "80%",
          smm: "60%",
        }}
      >
        <Typography
          margin={"0 auto"}
          sx={{
            fontFamily: "Work Sans",
            fontSize: {
              xs: "24px",
              sm: "30px",
              md: "35px",
              lg: "50px",
            },
            fontWeight: 600,
            lineHeight: "53.3px",
            textAlign: "center",
            color: "#052973",
          }}
        >
          Virtual Training
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: {
              xs: "14px",
              sm: "16px",
              md: "18px",
              lg: "20px",
            },
            fontWeight: 500,
            lineHeight: "22.39px",
            textAlign: "center",
          }}
        >
          Virtual training on Zoho CRM will be an instructor-led program where
          trainees can see and interact with our expert trainers to study,
          practice, and master Zoho CRM online.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BannerVirtualTraining;
