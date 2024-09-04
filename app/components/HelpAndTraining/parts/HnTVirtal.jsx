import { Stack, Typography } from "@mui/material";
import React from "react";
// import BlogCard from "../../Blog/parts/BlogCard";
import { trainingInfo } from "../../Blog/parts/TagsBlogsData";
import Link from "next/link";

import BookYourSeatCard from "./BookYourSeatCard";

const HnTVirtal = () => {
  return (
    <Stack
      mt={{
        xs: 0,
        sm: 0,
        md: 4,
      }}
      width={"100%"}
      height={{
        xs: "100%",
        md: "740px",
      }}
      pb={2}
      gap={4}
      sx={{
        background: "linear-gradient(180deg, #052973 0%, #052973 100%)",
      }}
    >
      <Stack direction={"column"} gap={2} alignItems={"center"}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: {
              xs: "24px",
              md: "30px",
              md: "40px",
            },
            fontWeight: 600,
            lineHeight: "43px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#FFFFFF",
            width: {
              xs: "95%",
              md: "922px",
            },

            marginTop: "70px",
          }}
        >
          Virtual training - Zoho CRM for Administrators
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: {
              xs: "16px",
              md: "18px",
            },
            fontWeight: 400,
            lineHeight: "27px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#FFFFFF",
            width: {
              xs: "95%",
              md: "922px",
            },
          }}
        >
          We're bringing the classroom experience to you, wherever you are. The
          virtual training for Zoho CRM Administrators will feature
          instructor-led sessions online, where you can see and interact with
          our expert trainers, remotely. Select a schedule that is the most
          convenient for you.
        </Typography>
      </Stack>
      <Stack
        width={{
          xs: "95%",
          md: "56%",
        }}
        direction={{
          xs: "column",
          md: "row",
        }}
        margin={"0 auto"}
        gap={2}
        justifyContent={"center"}
      >
        {trainingInfo.map((traning) => (
          <BookYourSeatCard key={traning.id} traning={traning} />
        ))}
      </Stack>
    </Stack>
  );
};

export default HnTVirtal;
