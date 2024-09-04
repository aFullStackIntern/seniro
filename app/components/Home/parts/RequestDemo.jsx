import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "../../utils/Button";
import section2 from "../../assets/Team.png";
import LogosDesign from "../../assets/LogosDesign.png";
import Slider from "./Slider";
import Link from "next/link";

import Image from "next/image";

const RequestDemo = () => {
  return (
    <Stack
      alignItems={"center"}
      pt={10}
      gap={2}
      sx={{
        margin: {
          xs: "7px",
          sm: "15px",
          lg: "0px",
        },
        paddingTop: {
          xs: "0px",
          sm: "10px",
          lg: 10,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "20px", sm: "30px", md: "45px" },
          width: { xs: "240px", sm: "360px", md: "642px" },
        }}
        color={"#052973"}
        fontWeight={"bold"}
        textAlign={"center"}
        lineHeight={1}
        fontFamily={"Work Sans"}
      >
        Deliver exceptional customer Experience
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "18px", md: "22px" },
          width: { xs: "270px", sm: "360px", md: "700px", lg: "800px" },
        }}
        textAlign={"center"}
        pt={2}
        fontFamily={"Work Sans"}
      >
        Maintaining accounting books is a complicated task. Unlock the power of
        effortless accounting withSaniiro Books! Our customers experience a
        user-friendly, efficient, and affordable working solution that
        seamlessly handles all their financial operations effectively, from
        creating invoices to generating insightful financial statements and
        ensuring statutory compliance.
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Link href="/Sign-up" onClick={() => window.scrollTo(0, 0)}>
          <Button
            sx={{
              fontSize: {
                xs: "10px",
                sm: "12px",
                md: "18px",
              },

              fontWeight: "bold",
              fontFamily: "Work Sans",
              p: 1.5,
            }}
          >
            SIGN UP FOR FREE
          </Button>
        </Link>
        <Link href="/Contact-us" onClick={() => window.scrollTo(0, 0)}>
          <Button
            sx={{
              fontSize: {
                xs: "10px",
                sm: "12px",
                md: "18px",
              },
              bgcolor: "white",
              color: "black",
              border: "1px solid black",

              fontWeight: "bold",
              fontFamily: "Work Sans",
              p: 1.5,
            }}
          >
            REQUEST DEMO
          </Button>
        </Link>
      </Stack>
      <Stack>
        {/* <Box
          margin={"0 auto"}
          sx={{
            width: {
              xs: "200px",
              sm: "330px ",
              md: "600px",
              lg: "1018px",
            },
          }}
        >
          <img src={section2} style={{ width: "100%" }} />
        </Box> */}
        <Box
          margin={"0 auto"}
          sx={{
            width: {
              xs: "200px",
              sm: "330px ",
              md: "600px",
              lg: "1018px",
            },
          }}
          position={"relative"}
        >
          <Image src={LogosDesign} height={150} style={{ width: "100%" }} />
          <Slider />
        </Box>
      </Stack>
    </Stack>
  );
};

export default RequestDemo;
