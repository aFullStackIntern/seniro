import { Stack, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

const LookingAt = () => {
  return (
    <Stack
      width={"100%"}
      bgcolor={"#F15B25"}
      p={6}
      mt={4}
      sx={{
        boxSizing: "border-box",
      }}
    >
      <Stack width={"80%"} margin={"0 auto"} p={2} gap={2}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "35px",
            fontWeight: 700,
            lineHeight: "46.2px",
            letterSpacing: "-0.02em",
            textAlign: "center",
            color: "white",
          }}
        >
          Looking to attend a Saniiro CRM training session?
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "23.76px",
            letterSpacing: "-0.02em",
            textAlign: "center",
            color: "white",
          }}
        >
          See where we are headed next!
        </Typography>
        <Link
          href="./Resource/Testimonials"
          style={{
            textDecoration: "none",
          }}
        >
          <Stack
            m={"0 auto"}
            width={{
              xs: "200px",
            }}
            bgcolor={"white"}
            p={2}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                },
                fontWeight: 600,
                lineHeight: "18.48px",
                textAlign: "center",
              }}
            >
              CHECK SCHEDULE
            </Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

export default LookingAt;
