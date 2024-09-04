// import { Stack, Typography } from "@mui/material";
// import frame from "../../assets/Frame.png";
// import React from "react";

// const HnTBanner = () => {
//   return (
//     <>
//       <Stack maxWidth={"1420px"} margin={"0 auto"}>
//         <Stack width={"98%"} height={"630px"} margin={"80px 10px"}>
//           <Stack position={"relative"}>
//             <img src={frame} alt="frame" />
//             <Stack
//               position={"absolute"}
//               width={"840px"}
//               height={"375px"}
//               top={"87px"}
//               left={"19.8%"}
//               backgroundColor={"#fff"}
//               border={"1px solid #FEDFD4"}
//               borderRadius={"10px"}
//             >
//               <Typography
//                 sx={{
//                   fontFamily: "Work Sans",
//                   fontSize: "40px",
//                   fontWeight: 600,
//                   lineHeight: "43px",
//                   letterSpacing: "0em",
//                   textAlign: "center",
//                   margin: "40px auto",
//                   width: "70%",
//                 }}
//               >
//                 Virtual training - Saniiro CRM for Sales reps
//               </Typography>
//               <Typography
//                 sx={{
//                   fontFamily: "Work Sans",
//                   fontSize: "18px",
//                   fontWeight: 400,
//                   lineHeight: "27px",
//                   letterSpacing: "0em",
//                   textAlign: "center",
//                   margin: "0px auto",
//                   width: "85%",
//                 }}
//               >
//                 The virtual training for Zoho CRM sales reps will feature
//                 instructor-led sessions online, where you can see and interact
//                 with our expert trainers remotely. The course is aimed at
//                 helping Sales reps use their Zoho CRM tools effectively to
//                 engage better with prospects and increase productivity. Select a
//                 schedule that is most convenient for you.
//               </Typography>
//             </Stack>
//           </Stack>
//         </Stack>
//       </Stack>

// <Stack
//   width={"100%"}
//   height={"400px"}
//   backgroundColor={"#8AA3FF"}
//   direction={"column"}
//   justifyContent={"center"}
//   alignItems={"center"}
// >
//   <Typography
//     sx={{
//       fontFamily: "Work Sans",
//       fontSize: "40px",
//       fontWeight: 600,
//       lineHeight: "43px",
//       letterSpacing: "0em",
//       textAlign: "center",
//       color: "#fff",
//     }}
//   >
//     Looking for Online Training?
//   </Typography>
//   <Typography
//     sx={{
//       fontFamily: "Work Sans",
//       fontSize: "18px",
//       fontWeight: 400,
//       lineHeight: "27px",
//       letterSpacing: "0em",
//       textAlign: "center",
//       width: "60%",
//       margin: "20px auto",
//       color: "#fff",
//     }}
//   >
//     Through online training, we aim to offer a completely personalized
//     training package tailored exclusively to meet the trainees' business
//     requirements. The online training program will be custom-made for your
//     business.
//   </Typography>
// </Stack>
//     </>
//   );
// };

// export default HnTBanner;

import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import BannerImg from "../../assets/Frame.png";
import Link from "next/link";

import Button from "../../utils/Button";

const CareerBanner = () => {
  return (
    <>
      <Stack position="relative" height="100%" m={" 100px 10px"}>
        <Box
          component="img"
          sx={{
            width: "100%",
            maxWidth: "100%",
            height: "auto",
          }}
          alt="Banner Image"
          src={BannerImg}
        />
        <Stack
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            width: {
              xs: "60%",
              sm: "60%",
              md: "60%",
              lg: "60%",
            },
            height: {
              xs: "70%",
            },
            textAlign: "center",
            backgroundColor: "white",
            justifyContent: "center",
          }}
        >
          <Content />
        </Stack>
      </Stack>
      <Stack
        width={"100%"}
        height={{
          xs: "400px",
          sm: "400px",
        }}
        backgroundColor={"#8AA3FF"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          width={"95%"}
          sx={{
            fontFamily: "Work Sans",
            fontSize: {
              xs: "20px",
              sm: "20px",
              md: "40px",
              lg: "40px",
              xl: "40px",
            },
            fontWeight: 600,
            lineHeight: "43px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Looking for Online Training?
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "18px",
            },
            fontWeight: 400,
            lineHeight: "27px",
            letterSpacing: "0em",
            textAlign: "center",
            width: {
              xs: "95%",
              md: "60%",
            },
            margin: "20px auto",
            color: "#fff",
          }}
        >
          Through online training, we aim to offer a completely personalized
          training package tailored exclusively to meet the trainees' business
          requirements. The online training program will be custom-made for your
          business.
        </Typography>
        <Link
          href="/LookingFor"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <Stack
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Button
              sx={{
                padding: "10px 20px",
              }}
            >
              <Typography>REGISTER NOW</Typography>
            </Button>
          </Stack>
        </Link>
      </Stack>
    </>
  );
};

const Content = () => {
  return (
    <>
      <Stack
        p={2}
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        gap={{
          xs: 0,
          lg: 0,
        }}
      >
        <Typography
          sx={{
            width: "100%",
            fontFamily: "Work Sans",
            fontSize: {
              xs: "7px",
              sm: "8px",
              smm: "14px",
              md: "18px",
              lg: "37px",
              xl: "50px",
            },
            fontWeight: 600,
            letterSpacing: "0em",
            textAlign: "center",
            color: "black",
            textTransform: "uppercase",
          }}
        >
          Virtual training - Saniiro CRM for Sales reps
        </Typography>

        <Typography
          sx={{
            width: "100%",
            fontFamily: "Work Sans",
            fontSize: {
              xs: "6px",
              sm: "7px",
              smm: "10px",
              md: "14px",
            },
            fontWeight: 400,
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          The virtual training for Zoho CRM sales reps will feature
          instructor-led sessions online, where you can see and interact with
          our expert trainers remotely. The course is aimed at helping Sales
          reps use their Zoho CRM tools effectively to engage better with
          prospects and increase productivity. Select a schedule that is most
          convenient for you.
        </Typography>
      </Stack>
    </>
  );
};

export default CareerBanner;
