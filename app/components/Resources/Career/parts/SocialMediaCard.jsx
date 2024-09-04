import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import instagramImg from "./assets/instagram.png";
import linkedinImg from "./assets/linkedin.png";
import Image from "next/image";
const SocialMediaCard = () => {
  return (
    <Stack
      sx={{
        boxShadow: "0px 0px 10px 0px #0000001F",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <Stack gap={2}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "25px",
            fontWeight: 300,
            lineHeight: "27px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Social Platform
        </Typography>
        <Stack
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            gap: "20px",
          }}
        >
          <Stack direction={"row"} gap={2}>
            <Image
              height={40}
              width={43}
              alt="instagram Image"
              src={instagramImg}
            />
            <a
              style={{ textDecoration: "none" }}
              href="https://www.instagram.com/business_accounting_software/"
              target="_blank"
            >
              <Stack gap={"4px"} color={"black"}>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "13px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Follow us on Instagram:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "20px",
                    fontWeight: 300,
                    lineHeight: "21px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  @saniiro.official
                </Typography>
              </Stack>
            </a>
          </Stack>
          <a
            style={{ textDecoration: "none" }}
            href=" https://www.linkedin.com/company/saniiro-technologies-pvt-ltd"
            target="_blank"
          >
            <Stack direction={"row"} gap={2} color={"black"}>
              <Image
                height={40}
                width={43}
                alt="LinkedInImage"
                src={linkedinImg}
              />
              <Stack gap={"4px"}>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "13px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Join our LinkedIn page::
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "20px",
                    fontWeight: "2px",
                    lineHeight: "21px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  #saniiro
                </Typography>
              </Stack>
            </Stack>
          </a>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SocialMediaCard;
