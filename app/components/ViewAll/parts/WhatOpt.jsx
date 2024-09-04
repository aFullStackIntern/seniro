import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import tickMark from "../../assets/Frame 63014.png";

const opt = [
  {
    title: "Attend training from anywhere at a convenient time slot for you.",
  },

  {
    title: "Efficient time management.Efficient time management.",
  },

  {
    title:
      "Reduce spending on travel and other arrangements, and get trained wherever you are.",
  },

  {
    title:
      "No more waiting for us to come to your nearest city! We will schedule sessions for a variety of different time zones. Choose your time zone, and register.",
  },
];
const opt1 = [
  {
    title:
      "Interact virtually and build a relationship with the trainer and fellow trainees.",
  },

  {
    title: "Online classrooms are the future of training.",
  },

  {
    title:
      "Receive a course completion certificate after training, and join our online community with other trainees from around the world.",
  },
];

const WhatOpt = () => {
  return (
    <Stack mb={4}>
      <Typography
        mb={2}
        sx={{
          fontFamily: "Work Sans",
          fontSize: {
            xs: "16px",
            sm: "20px",
            md: "24px",
            lg: "40px",
          },
          fontWeight: 500,
          lineHeight: "49.6px",
          letterSpacing: "-0.02em",
          textAlign: "center",
        }}
      >
        Why opt for virtual training?
      </Typography>
      <Stack
        gap={3}
        direction={{
          xs: "column",
          md: "row",
        }}
        width={{
          xs: "95%",
          md: "80%",
        }}
        margin={"0 auto"}
      >
        <Stack
          width={{
            xs: "100%",
          }}
          gap={1}
        >
          {opt.map((option, index) => (
            <Stack
              width={"100%"}
              key={index}
              direction={"row"}
              border={"1px solid lightgray"}
              boxSizing={"border-box"}
              p={2}
              borderRadius={2}
              margin={"0 auto"}
            >
              <Box
                component="img"
                width={"35px"}
                height={"35px"}
                src={tickMark}
              />
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                    md: "18px",
                  },
                  fontWeight: 300,
                  lineHeight: "23.94px",
                  letterSpacing: "-0.02em",
                  textAlign: "left",
                }}
              >
                {option.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Stack
          width={{
            xs: "100%",
          }}
          gap={1}
        >
          {opt1.map((option, index) => (
            <Stack
              width={"100%"}
              key={index}
              direction={"row"}
              border={"1px solid lightgray"}
              boxSizing={"border-box"}
              p={2}
              borderRadius={2}
              margin={"0 auto"}
            >
              <Box
                component="img"
                width={"35px"}
                height={"35px"}
                src={tickMark}
              />
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                    md: "18px",
                  },
                  fontWeight: 300,
                  lineHeight: "23.94px",
                  letterSpacing: "-0.02em",
                  textAlign: "left",
                }}
              >
                {option.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WhatOpt;
