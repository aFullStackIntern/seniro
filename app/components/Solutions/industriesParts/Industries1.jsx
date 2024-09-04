import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../../utils/Button";
import Boxes from "../../assets/Boxes.svg";
import Image from "next/image";

const Industries1 = () => {
  return (
    <Stack gap={4} p={"20px 0"}>
      <Stack width={"90%"} margin={" 0 auto"}>
        <Typography
          fontFamily={"Work Sans"}
          textTransform={"uppercase"}
          color={"#4DB267"}
          fontSize={{
            xs: "25px",
            sm: "30px",
            md: "40px",
            lg: "50px",
          }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          One Solution, Countless Industries
        </Typography>
        <Typography
          fontFamily={"Work Sans"}
          color={"#052973"}
          fontWeight={"bold"}
          lineHeight={1}
          fontSize={{
            xs: "25px",
            sm: "30px",
            md: "40px",
            lg: "50px",
          }}
          textAlign={"center"}
        >
          One Solution, Countless Industries:
        </Typography>
      </Stack>
      <Typography
        fontSize={"18px"}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
        }}
        margin={"0 auto"}
        textAlign={"center"}
        fontFamily={"Work Sans"}
      >
        Saniiro Books offers a versatile and robust business accounting solution
        tailored to meet the unique needs of various industries. Our product is
        designed to enhance operational efficiency, streamline financial
        management, and support growth across different sectors. Explore how
        Saniiro Books can benefit your industry with specific features and
        integration capabilities.
      </Typography>
      <Stack alignItems={"center"}>
        <Button
          sx={{
            width: "200px",
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Work Sans",
          }}
          p={{
            xs: "10px 20px",
            sm: "10px 20px",
            md: "15px 30px",
            lg: 1.5,
          }}
        >
          Get A Demo
        </Button>
      </Stack>
      <Stack
        alignItems={"center"}
        p={{
          xs: "20px 0",
          sm: "30px 0",
          md: "50px 0",
          lg: "100px 0",
        }}
      >
        <Image src={Boxes} alt="" style={{ width: "100px" }} />
      </Stack>
    </Stack>
  );
};

export default Industries1;
