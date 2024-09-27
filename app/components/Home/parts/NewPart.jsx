import { Stack, Typography } from "@mui/material";
import React from "react";
import Review5 from "../../assets/Glassdoor.jpg";
import Review2 from "../../assets/Indiamart.jpg";
import Review1 from "../../assets/Google.jpg";
import Review4 from "../../assets/Justdial.jpg";
import Review3 from "../../assets/softwaresuggest.jpg";
import Badge1 from "../../assets/badge1.svg";
import Badge2 from "../../assets/badge2.svg";
import Badge3 from "../../assets/badge3.svg";
import Badge4 from "../../assets/badge4.svg";
import Badge5 from "../../assets/index.png";
import Badge6 from "../../assets/badge6.png";
import Badge7 from "../../assets/badge10.png";
import Badge8 from "../../assets/badge8.png";
import "./Features.css";
import logo1 from "../../assets/logo1.jpeg";
import logo2 from "../../assets/logo2.webp";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.webp";
import logo5 from "../../assets/logo5.webp";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";
import logo9 from "../../assets/logo9.png";

import Slider from "./Slider";
import Link from "next/link";

import Image from "next/image";
const NewPart = () => {
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
  const Badges = [
    {
      id: "1",
      src: Badge5,
    },
    {
      id: "2",
      src: Badge2,
    },
    {
      id: "3",
      src: Badge6,
    },
    {
      id: "4",
      src: Badge4,
    },

    {
      id: "5",
      src: Badge7,
    },
    {
      id: "6",
      src: Badge8,
    },
  ];
  const Reviews = [
    {
      id: "1",
      src: Review1,
      link: "https://www.google.com/search?q=saniiro+technologies+private+limited&oq=saniiro+t&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyBggCEEUYPDIGCAMQRRg8MgYIBBBFGEEyBggFEEUYQTIGCAYQRRhBMgYIBxBFGDzSAQgzNDk5ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8#lrd=0x396db5d77b0ba47d:0xffe52a26f83d76e9,1",
    },
    {
      id: "2",
      src: Review2,
      link: "https://www.indiamart.com/proddetail/saniiro-retail-billing-software-21781701512.html",
    },
    {
      id: "3",
      src: Review3,
      link: "https://www.softwaresuggest.com/saniiro",
    },
    {
      id: "4",
      src: Review4,
      link: "https://www.justdial.com/jdmart/Jaipur/Saniiro-Technologies-Pvt-Ltd-Near-Kailash-Tower-Lal-Kothi-Lal-Kothi/0141PX141-X141-190611183150-Z4I2_BZDET/catalogue",
    },
    {
      id: "5",
      src: Review5,
      link: "https://www.glassdoor.co.in/Reviews/Saniiro-Technologies-Reviews-E4434548.htm",
    },
  ];
  return (
    <Stack
      width={{ xl: "100%", xs: "100%" }}
      borderRadius={{ xl: 3, xs: 0 }}
      bottom={{ xxl: "81%", xl: "81%" }}
      left={"11%"}
      pt={5}
    >
      <Stack alignItems={"center"} p={"25px 0 50px 0"}>
        <Stack
          // direction={{ xl: "row", xs: "column" }}
          justifyContent={"center"}
          gap={3}
          alignItems={{ xl: "none", xs: "center" }}
          width={"90vw"}
        >
          <Stack width={{ xl: "72%", xs: "75%" }} gap={3}>
            <Typography
              color={"black"}
              fontSize={"22px"}
              fontWeight={"bold"}
              display={"flex"}
              justifyContent={"center"}
              textAlign={{ sm: "center", xl: "left" }}
            >
              Awards & Recognizations
            </Typography>
            <Stack direction={{ xl: "row", sm: "column" }} gap={5}>
              <Stack
                boxShadow={"0px 0px 2px 3px darkred"}
                width={{ xl: "50vw", sm: "none" }}
                gap={2.5}
                padding={"9px 0"}
                direction={"row"}
                flexWrap={"wrap"}
                justifyContent={"center"}
              >
                {Badges.map((d) => (
                  <Stack
                    key={d.id}
                    sx={{
                      position: "relative",
                      width: { xl: "24%", lg: "14%", sm: "20%", xs: "22%" },
                      height: { smm: "18vh", xs: "6vh" },
                    }}
                  >
                    <Image
                      fill
                      sizes="100vw"
                      objectFit="contain"
                      src={d.src}
                      alt=""
                    />
                  </Stack>
                ))}
              </Stack>
              <Stack
                boxShadow={"0px 0px 2px 3px darkred"}
                width={{ xl: "50vw", sm: "none" }}
                columnGap={4}
                rowGap={{ md: "none", smm: "32px", sm: "32px", xs: "32px" }}
                padding={"20px"}
                direction={"row"}
                flexWrap={"wrap"}
                justifyContent={"center"}
                borderRadius={1}
              >
                {Reviews.map((d) => (
                  <Stack
                    key={d.id}
                    justifyContent={"center"}
                    sx={{
                      position: "relative",
                      width: { xl: "27%", sm: "42%", lg: "30%" },
                      height: { smm: "18vh", xs: "6vh" },
                    }}
                  >
                    <a href={d.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        fill
                        sizes="100vw"
                        objectFit="contain"
                        src={d.src}
                        alt=""
                      />
                    </a>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NewPart;
