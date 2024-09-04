import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Blog1Img from "../assets/BlogImg1.png";
import Image from "next/image";
const BlogCard = ({ blog }) => {
  const {
    id = "",
    title = "",
    description = "", // Assuming the correct property is `description`
    postDate = "",
    postedBy = "",
    company = "",
    timeToReadInMin = "",
    imgUrl = "",
  } = blog;

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
          xs: "90vw",
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
      <Stack sx={{ position: "relative", height: "100%" }}>
        <Image
          fill
          objectFit="cover"
          sizes="100vw"
          alt="Blog Image"
          src={Blog1Img}
        />
      </Stack>
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
          {blog.Title.length > 60
            ? `${blog.Title.substring(0, 60)}...`
            : blog.Title}
          {/* {id}. {blog.title} */}
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
          {blog.Description.length > 100
            ? `${blog.Description.substring(0, 100)}...`
            : blog.Description}
        </Typography> */}
        <Typography
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
          dangerouslySetInnerHTML={{
            __html:
              blog.Description.length > 100
                ? `${blog.Description.substring(0, 100)}...`
                : blog.Description,
          }}
        />
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
            Posted On {blog.CreatedOn}
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
            By {blog.CreatedBy}
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
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "10px",
              fontWeight: 500,
              lineHeight: "14px",
              letterSpacing: "0em",
              opacity: "60%",
            }}
          >
            {company}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "10px",
              fontWeight: 500,
              lineHeight: "14px",
              letterSpacing: "0em",
              opacity: "60%",
            }}
          >
            {timeToReadInMin} Mins Read
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default BlogCard;
