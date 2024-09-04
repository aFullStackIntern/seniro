import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../../utils/Button";
import Link from "next/link";

const LookingForOnline = () => {
  return (
    <Stack bgcolor={"#8AA3FF"} mt={3}>
      <Stack
        p={4}
        pt={6}
        pb={6}
        width={{
          xs: "95",
          md: "70%",
        }}
        m={"0 auto"}
        gap={2}
      >
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
            textAlign: "center",
            color: "white",
          }}
        >
          Looking for Online Training?
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: {
              xs: "10px",
              sm: "12px",
              md: "14px",
            },
            fontWeight: 600,
            lineHeight: "23.94px",
            letterSpacing: "-0.02em",
            textAlign: "center",
            color: "white",
          }}
        >
          Through online training, we aim to offer a completely personalized
          training package tailored exclusively to meet the trainees' business
          requirements. The online training program will be custom-made for your
          business.
        </Typography>
        <Link
          href="/shareExperience"
          style={{
            textDecoration: "none",
          }}
        >
          <Stack width={"200px"} margin={"0 auto"}>
            <Button
              style={{
                padding: "10px 20px",
                backgroundColor: "#F15B25",
                border: "1px solid white",
                "&:hover": {
                  backgroundColor: "#F15B25",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "18px",
                    lg: "20px",
                  },
                  fontWeight: 500,
                  lineHeight: "22.39px",
                  textAlign: "center",
                  color: "white",
                }}
              >
                REGISTER NOW
              </Typography>
            </Button>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

export default LookingForOnline;
