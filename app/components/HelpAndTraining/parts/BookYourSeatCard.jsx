import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import profileImg from "../../assets/Group 62904.png";
import Link from "next/link";

const BlogCard = ({ traning }) => {
  const {
    id,
    imgUrl,
    title,
    disc,
    postDate,
    time,
    timezone,
    trannieName,
    trannieImgUrl,
    trannieCompany,
  } = traning;
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return (
    <Stack
      backgroundColor={"#FFFFFF"}
      m={"0 auto"}
      sx={{
        width: {
          xs: "95%",
          md: "344px",
          lg: "384px",
        },
        height: {
          xs: "100%",
          md: "380px",
          lg: "416px",
        },
        objectFit: "cover",
        borderLeft: "1px solid rgba(0, 0, 0, 0.3)",
        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
        borderRadius: "8px",
      }}
    >
      <Box
        component="img"
        sx={{
          height: {
            xs: "50%",
            lg: "50%",
          },
          width: {
            xs: "100%",
            lg: "100%",
          },
        }}
        alt="Blog Image"
        src={imgUrl} // Use the imgUrl directly as it already contains the correct path
      />
      <Stack>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "19px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left",
            margin: "20px 32px 10px 16px",
          }}
        >
          {id}. {title}
        </Typography>
        {/* <Typography
          sx={{
            margin: "0px 32px 10px 16px",
            fontFamily: "Work Sans",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "16px",
            letterSpacing: "0em",
            textAlign: "left",
            opacity: "70%",
          }}
        >
          {disc.length > 100 ? `${disc.substring(0, 100)}...` : disc}
        </Typography> */}
      </Stack>
      <Box width={"100%"}>
        <Stack justifyContent={"space-between"} direction={"row"}>
          <Typography
            padding={"12px 0px 12px 16px"}
            sx={{
              width: "50%",
              fontFamily: "Work Sans",
              fontSize: "10px",
              fontWeight: 500,
              lineHeight: "14px",
              letterSpacing: "0em",
              opacity: "60%",
              borderRight: "1px solid rgba(0, 0, 0, 0.3)",
              borderTop: "1px solid rgba(0, 0, 0, 0.3)",
              borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
            }}
          >
            Date:- {postDate}
          </Typography>

          <Typography
            padding={"12px 0px 12px 16px"}
            sx={{
              width: "50%",
              fontFamily: "Work Sans",
              fontSize: "10px",
              fontWeight: 500,
              lineHeight: "14px",
              letterSpacing: "0em",
              opacity: "60%",
              borderTop: "1px solid rgba(0, 0, 0, 0.3)",
              borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
            }}
          >
            Time :- {time} {`\n`} {timezone}
          </Typography>
        </Stack>
        <Stack
          width={"88%"}
          direction={"row"}
          justifyContent={"space-between"}
          margin={"7px 0px"}
          alignItems={"center"}
          paddingTop={"10px"}
          paddingBottom={"10px"}
          paddingLeft={"16px"}
        >
          <Stack
            direction={"row"}
            gap={1}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              component="img"
              sx={{
                width: "41.21px",
                height: "41.21px",
                borderRadius: "50%",
              }}
              alt="Profile Image"
              src={trannieImgUrl} // Corrected here
            />
            <Stack>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "13px",
                  fontWeight: 600,
                  lineHeight: "14px",
                  letterSpacing: "0em",
                }}
              >
                {trannieName}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "8px",
                  fontWeight: 500,
                  lineHeight: "14px",
                  letterSpacing: "0em",
                  opacity: "60%",
                }}
              >
                {trannieCompany}
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href="/VirtualTraining"
              onClick={handleClick}
            >
              <Button
                sx={{
                  bgcolor: "#F15B25",
                  padding: "10px 8px",
                  "&:hover": {
                    bgcolor: "#F15B25",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "Work Sans",
                    fontSize: "10px",
                    fontWeight: 600,
                    lineHeight: "14px",
                    letterSpacing: "0em",
                  }}
                >
                  BOOK YOUR SEAT
                </Typography>
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default BlogCard;
