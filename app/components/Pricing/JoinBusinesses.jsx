import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import CompanyImg from "../assets/c36347c59a42b5602f35e77ae7519878.png";
import Image from "next/image";

const JoinBusinesses = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        margin: {
          xs: "12px auto",
          lg: "151px auto",
        },
        width: "100%",
        maxWidth: "1060px",
        height: "375px",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          textTransform: "uppercase",
          margin: "42px auto",
          width: "100%",
          maxWidth: "170px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          Join 250,000+ other businesses
        </Typography>
        <Button
          sx={{
            position: "absolute",
            left: {
              xs: "28%",
              sm: "35%",
              md: "40%",
              lg: "40%",
            },
            top: {
              xs: "130px",
              lg: "105px",
            },
            border: "1px solid #F97316",
            background: "#F97316",
            color: "white",
            fontSize: {
              xs: "10px",
              lg: "12px",
            },
            fontWeight: "600",
            lineHeight: "13px",
            textAlign: "center",
            padding: {
              xs: "10px 20px",
              lg: "15px 30px",
            },
            borderRadius: "5px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "white",
              color: "#F97316",
            },
          }}
        >
          START FREE TRIAL
        </Button>
      </Stack>
      <Stack
        width={{
          xs: "95%",
          lg: "100%",
        }}
        height={{
          xs: "200px",
          md: "95%",
        }}
      >
        <Image
          style={{
            height: "auto", // Auto adjust height
            width: "100%",
            height: "100%",
            maxWidth: "1060px", // Limit maximum width
          }}
          alt="company-logo"
          src={CompanyImg}
        />
      </Stack>
    </Stack>
  );
};

export default JoinBusinesses;
