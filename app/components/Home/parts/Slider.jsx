import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";
import logo9 from "../../assets/logo9.png";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
const Slider = () => {
 const features = [
   {
     src: logo1,
   },
   {
     src: logo2,
   },
   {
     src: logo3,
   },
   {
     src: logo4,
   },
   {
     src: logo5,
   },
   {
     src: logo6,
   },
   {
     src: logo7,
   },
   {
     src: logo8,
   },
   {
     src: logo9,
   },
 ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 765, min: 0 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <Box
      sx={{
        width: {
          xs: "200px",
          sm: "315px ",
          md: "600px",
          lg: "1018px",
        },
        top: {
          xs: "3%",
          sm: "8%",
          md: "27%",
        },
        left: {
          xs: "4%",
          sm: "8%",
          md: "4%",
        },
      }}
      position={"absolute"}
      top={"27%"}
      left={"4%"}
    >
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        autoPlaySpeed={1500}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      >
        {features.map((d, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "60px",
                sm: "64px",
                md: "120px",
              },
              height: {
                xs: "25px",
                sm: "27px",
                md: "50px",
              },
            }}
          >
            <Image
              src={d.src}
              alt={`Logo ${index + 1}`}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slider;
