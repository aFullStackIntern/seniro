import { Stack, Typography } from "@mui/material";
import React from "react";

const QuoteCard = () => {
  return (
    <Stack>
      <Stack
        width={{
          xs: "95%",
          sm: "90%",
          md: "85%",
          lg: "80%",
        }}
        margin={"0 auto"}
        border={"2px solid lightgray"}
        borderRadius={2}
      >
        <Stack p={3} gap={1}>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
              fontWeight: "300",
              letterSpacing: -0.02,
              textAlign: "left",
              opacity: 0.7,
            }}
          >
            Training was simple/smooth and the trainer really knows the product.
            He was able to answer all questions I had.
          </Typography>
          <hr
            style={{
              width: "100%",
              heigh: "1px",
            }}
          />

          <Stack>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "18px",
                  lg: "20px",
                },
                fontWeight: "300",
                letterSpacing: -0.02,
                textAlign: "left",
              }}
            >
              David Fauser,
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  lg: "16px",
                },
                fontWeight: "300",
                letterSpacing: -0.02,
                textAlign: "left",
                opacity: 0.7,
              }}
            >
              Director of Sales, CIMCO Refrigeration
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default QuoteCard;
