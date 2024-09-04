import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../../utils/Button";
import Nav from "../../Navbar/Nav";

const BannerTrainingForDev = () => {
  return (
    <Stack
      sx={{
        background:
          "linear-gradient(0deg, rgba(133, 159, 255, 0) 38.85%, #859FFF 84.69%)",
        width: "100%",
        height: {
          xs: "80vh",
          md: "60vh",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "Start",
        alignItems: "center",
      }}
    >
      <Nav />
      <Stack
        mt={{
          xs: 3,
          sm: 4,
          smm: 5,
          md: 6,
        }}
        gap={2}
        width={{
          xs: "95%",
          sm: "80%",
          smm: "60%",
        }}
      >
        <Typography
          margin={"0 auto"}
          sx={{
            fontFamily: "Work Sans",
            fontSize: {
              xs: "24px",
              sm: "30px",
              md: "35px",
              lg: "50px",
            },
            fontWeight: 600,
            lineHeight: "53.3px",
            textAlign: "center",
            color: "#052973",
          }}
        >
          Training for Developers
        </Typography>
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
          }}
        >
          This course is aimed towards enabling developers to implement
          additional functions within Zoho CRM. You will also get the
          opportunity to interact with the Zoho CRM Developer community and
          learn the best practices of CRM development.
        </Typography>
        <Stack
          margin={"20px auto"}
          direction={{
            xs: "column",
            md: "row",
          }}
          gap={2}
        >
          <Button
            style={{
              padding: "10px 20px",
              backgroundColor: "white",
              border: "1px solid black",
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
                color: "black",
              }}
            >
              Download Course Plan
            </Typography>
          </Button>
          <Button
            sx={{
              padding: "10px 20px",
              border: "1px solid black",
              "&:hover": {
                backgroundColor: "#F15B25",
                color: "black",
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
              ONLINE TRAINING ENQUIRY
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BannerTrainingForDev;
