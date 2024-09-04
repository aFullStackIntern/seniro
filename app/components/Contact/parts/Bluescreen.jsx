import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../../utils/Button";
import Link from "next/link";

import icon5section from "../../assets/icon5section.png";
import icon6section from "../../assets/icon6section.png";
import Image from "next/image";

const Bluescreen = () => {
  return (
    <Stack alignItems={"center"} p={{ xl: "100px 0", xs: "0" }}>
      <Stack
        bgcolor={"#052973"}
        width={"85%"}
        borderRadius={1}
        p={"30px 24px"}
        direction={{
          xs: "column",
          lg: "row",
        }}
        gap={4}
        zIndex={1}
      >
        <Stack
          width={{
            xs: "100%",
            lg: "50%",
          }}
          bgcolor={"white"}
          borderRadius={1}
        >
          <Stack p={"20px 25px"} gap={2} alignItems={"center"}>
            <Button
              sx={{
                borderRadius: 1,
                fontWeight: "bold",
                bgcolor: "#052864",
                color: "white",
                width: "150px",
                height: "25px",
                fontSize: "12px",
              }}
            >
              EXISTING CUSTOMER
            </Button>
            <Stack
              width={{
                xs: "110px",
                sm: "140px",
                md: "150px",
                lg: "170px",
              }}
            >
              <Image
                src={icon5section}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Typography
              fontSize={{
                xs: "20px",
                sm: "26px",
                md: "30px",
                lg: "35px",
              }}
              p={{
                xs: "0",
                lg: "0 80px",
              }}
              textAlign={"center"}
            >
              Visit our help forum for technical support
            </Typography>
            <Typography
              p={{
                xs: "0",
                lg: "0 60px",
              }}
              textAlign={"center"}
            >
              Experiencing issues with a product you're already using? Browse
              through our help docs, videos, and tutorials, or engage with
              experts from the Zoho support community.
            </Typography>
            <Stack alignItems={"center"}>
              <Button
                sx={{
                  bgcolor: "transparent",
                  color: "#0079FF",
                  fontSize: "16px",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#0079FF",
                    textDecoration: "underline",
                  },
                }}
              >
                TAKE ME TO THE HELP CENTER
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          width={{
            xs: "100%",
            lg: "50%",
          }}
          bgcolor={"white"}
          borderRadius={1}
        >
          <Stack p={"20px 25px"} gap={2} alignItems={"center"}>
            <Button
              sx={{
                borderRadius: 1,
                fontWeight: "bold",
                bgcolor: "#052864",
                color: "white",
                width: "150px",
                height: "25px",
                fontSize: "12px",
              }}
            >
              EXISTING CUSTOMER
            </Button>
            <Stack
              width={{
                xs: "110px",
                sm: "140px",
                md: "150px",
                lg: "170px",
              }}
            >
              <Image
                src={icon6section}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Typography
              fontSize={{
                xs: "20px",
                sm: "26px",
                md: "30px",
                lg: "35px",
              }}
              p={{
                xs: "0",
                lg: "0 80px",
              }}
              textAlign={"center"}
            >
              Visit our help forum for technical support
            </Typography>
            <Typography
              p={{
                xs: "0",
                lg: "0 60px",
              }}
              textAlign={"center"}
            >
              Experiencing issues with a product you're already using? Browse
              through our help docs, videos, and tutorials, or engage with
              experts from the Zoho support community.
            </Typography>
            <Stack alignItems={"center"}>
              <Button
                sx={{
                  bgcolor: "transparent",
                  color: "#0079FF",
                  fontSize: "16px",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#0079FF",
                    textDecoration: "underline",
                  },
                }}
              >
                TAKE ME TO THE HELP CENTER
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Bluescreen;
