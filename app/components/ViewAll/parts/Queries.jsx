import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import tickMark from "../../assets/Frame 63014.png";
const eventInfo = [
  {
    AboutTheEvent: {
      Heading: "About the Event",
      title:
        "The Zoho CRM Training Course for Developers is a four-day online training program that is aimed at enabling developers to implement additional functions within Zoho CRM.",
      list1: {
        l1: "Interact virtually and build a relationship with the trainer and fellow trainees.",
        l2: "Freelance developers will learn how to apply their programming skills to benefit from better opportunities with Zoho CRM users in various industries.",
        l3: "The course covers the development-oriented features in Zoho CRM which facilitate programmers to code and incorporate whatever they need into their existing CRM. The training and learning will be both conceptual and practical.",
      },
    },
    WhatInStore: {
      Heading: "What’s in store?",

      title:
        "Each topic in this course is made up of four main components: concept explanation, demonstration, hands-on exercises, and Q&A session. So come to learn with us! We would love to help you on your journey through the exciting roads of CRM development.",
    },
    WhoCanAttend: {
      Heading: "Who can attend?",
      title:
        "Our Developer training is suitable for people with the following skill set: handling HTTP requests and responses, Java or Python programming, web application development, basic knowledge of HTML, CSS, and JavaScript.",
    },
  },
];
const Queries = () => {
  return (
    <Stack
      direction={{
        xs: "column",
        md: "row",
      }}
      width={{
        xs: "95%",
        md: "80%",
      }}
      margin={"0 auto"}
      gap={2}
    >
      <Stack
        width={{
          xs: "100%",
          md: "50%",
        }}
        gap={2}
        border={"1px solid lightgray"}
        borderRadius={2}
      >
        <Stack p={2} gap={1}>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "22px",
              },
              fontWeight: 600,
              lineHeight: "23.94px",
              letterSpacing: "-0.02em",
              textAlign: "left",
            }}
          >
            {eventInfo[0].AboutTheEvent.Heading}
          </Typography>
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
            {eventInfo[0].AboutTheEvent.title}
          </Typography>

          <Stack direction={"row"} gap={1}>
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
              {eventInfo[0].AboutTheEvent.list1.l1}
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
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
              {eventInfo[0].AboutTheEvent.list1.l2}
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
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
              {eventInfo[0].AboutTheEvent.list1.l3}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        width={{
          xs: "100%",
          md: "50%",
        }}
        direction={{
          xs: "column",
        }}
        gap={1}
      >
        <Stack border={"1px solid lightgray"} borderRadius={2}>
          <Stack p={2} gap={1}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "22px",
                },
                fontWeight: 600,
                lineHeight: "23.94px",
                letterSpacing: "-0.02em",
                textAlign: "left",
              }}
            >
              {eventInfo[0].WhatInStore.Heading}
            </Typography>
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
              {eventInfo[0].WhatInStore.title}
            </Typography>
          </Stack>
        </Stack>
        <Stack border={"1px solid lightgray"} borderRadius={2}>
          <Stack p={2} gap={1}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "22px",
                },
                fontWeight: 600,
                lineHeight: "23.94px",
                letterSpacing: "-0.02em",
                textAlign: "left",
              }}
            >
              {eventInfo[0].WhoCanAttend.Heading}
            </Typography>
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
              {eventInfo[0].WhoCanAttend.title}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Queries;
