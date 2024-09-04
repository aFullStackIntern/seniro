import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import fedXImg from "../assets/image 167.png";
import Image from "next/image";

const TestmonialCard = ({ review, video, handleExploreMoreClick }) => {
  console.log("review", review);
  return (
    <Stack
      width={{
        xs: "300px",
        md: "350px",
        lg: "300px",
        xl: "350px",
      }}
      height={"100%"}
      borderRadius={"6.98px"}
      border={"1px solid gray"}
      backgroundColor={"white"}
    >
      <Stack
        padding={{
          xs: "10px",
          md: "20px",
        }}
      >
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          alignItems={"left"}
          paddingX={{
            xs: "10px",
            md: "29px",
          }}
          paddingY={{
            xs: "10px",
            md: "29px",
          }}
        >
          <Image
            height={32.71}
            width={101.52}
            sx={{
              marginBottom: "15px",
            }}
            alt="Fedx Image"
            src={fedXImg}
          />
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: {
                xs: "16px",
                md: "20px",
              },
              fontWeight: 400,
              lineHeight: "25px",
              letterSpacing: "-0.02em",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            {review.Title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: {
                xs: "16px",
                md: "20px",
              },
              fontWeight: 400,
              lineHeight: "25px",
              letterSpacing: "-0.02em",
              textAlign: "left",
              marginBottom: "10px",
            }}
            variant="body2"
            dangerouslySetInnerHTML={{ __html: review.Description }}
          />
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "14px",
              letterSpacing: "-0.02em",
              textAlign: "left",
              marginBottom: "10px",
              color: "#006FCE",
            }}
            onClick={() => handleExploreMoreClick(review.Slug)}
          >
            Read More
            <ArrowRightAltIcon
              sx={{
                fontSize: "14px",
                marginLeft: "5px",
              }}
            />
          </Typography>
          <Stack>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "18px",
                letterSpacing: "-0.02em",
                textAlign: "left",
                marginBottom: "5px",
              }}
            >
              {review.Author}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "10px",
                fontWeight: 400,
                lineHeight: "10px",
                letterSpacing: "-0.02em",
                opacity: "60%",
                textAlign: "left",
              }}
            >
              {review.Designation}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TestmonialCard;
