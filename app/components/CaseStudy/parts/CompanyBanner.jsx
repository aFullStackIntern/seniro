import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import frameImg from "../assets/Frame62700.png";
import BrandImg from "../assets/Group 62912.png";
import FedXImg from "../assets/image 167.png";
import ProfileImg from "../assets/Group 62904.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
const CompanyBanner = () => {
  return (
    <>
      {/* desktop view   */}
      <Stack
        height={"440px"}
        display={{
          xs: "none",
          xl: "flex",
        }}
        sx={{
          boxSizing: "border-box",
        }}
        width={"100%"}
        border={"1px solid black"}
      >
        <Stack position={"relative"}>
          <Stack
            sx={{
              margin: "52px auto",
            }}
          >
            <Image height={330} width={1220} alt="Frame " src={frameImg} />
          </Stack>
          <Stack
            sx={{
              position: "absolute",
              op: "82px",
              left: "166px",
              width: "492px",
              height: "284px",

              margin: "52px auto",
            }}
          >
            <Image
              fill
              objectFit="contain"
              sizes="100vw"
              alt="Frame "
              src={BrandImg}
            />
          </Stack>
          <Stack
            position={"absolute"}
            alignItems={"center"}
            top={"-84px"}
            right={"187px"}
            sx={{
              width: "444.3px",
              height: "400.3px",
              borderRadius: "6.98px",
              border: "1px",
              backgroundColor: "#F0F8FE",
              border: "1px solid #FFFFFF",
            }}
          >
            <Image
              alt="Frame "
              style={{
                marginTop: "30px",
                marginBottom: "30px",
              }}
              height={32.71}
              width={112}
              src={FedXImg}
            />
            <Stack alignItems={"center"}>
              <Image
                sx={{
                  borderRadius: "50%",
                }}
                height={58.84}
                width={58.84}
                alt="Frame "
                src={ProfileImg}
              />
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "18px",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                }}
              >
                David Fauser,
              </Typography>
              <Typography
                sx={{
                  marginTop: "6px",
                  fontFamily: "Work Sans",
                  fontSize: "10px",
                  fontWeight: 400,
                  lineHeight: "10px",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                  opacity: "60%",
                }}
              >
                Director of Sales, CIMCO Refrigeration
              </Typography>

              <Typography
                sx={{
                  padding: "22px 42px",
                  fontFamily: "Work Sans",
                  fontSize: "24px",
                  fontWeight: 400,
                  lineHeight: "29px",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                }}
              >
                Zoho CRM Plus Helps Agoda’s Strategic Partnerships Team Manage
                Workflows And Communicate With Partners
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "14px",
                    letterSpacing: "-0.02em",
                    textAlign: "center",
                    color: "#006FCE",
                  }}
                >
                  Read full story
                  <ArrowRightAltIcon
                    sx={{
                      fontSize: "14px",
                      marginLeft: "5px",
                    }}
                  />
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* mobile view  */}
      <Stack
        mt={4}
        display={{
          xs: "flex",
          xl: "none",
        }}
      >
        <Stack
          margin={"0 auto"}
          width={"90%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
          direction={{
            sx: "column",
            md: "row",
          }}
        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            width={{
              xs: "100%",
              md: "50%",
            }}
          >
            <Image
              width={400}
              height={300}
              mt={2}
              sx={{
                top: "0",
                left: "0x",
                width: "70%",
                height: "70%",
              }}
              alt="Frame "
              src={BrandImg}
            />
          </Stack>
          <Stack
            alignItems={"center"}
            sx={{
              width: {
                xs: "95%",
                md: "50%",
              },
              height: "400.3px",
              borderRadius: "6.98px",
              border: "1px",
              backgroundColor: "#F0F8FE",
              border: "1px solid #FFFFFF",
            }}
          >
            <Image
              height={32.71}
              width={112}
              alt="Frame "
              style={{
                marginTop: "30px",
                marginBottom: "30px",
              }}
              src={FedXImg}
            />
            <Stack alignItems={"center"}>
              <Image
                style={{
                  width: "58.84px",
                  height: "58.84px",
                  borderRadius: "50%",
                  // border: "2px solid black",
                }}
                alt="Frame "
                src={ProfileImg}
              />
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "18px",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                }}
              >
                David Fauser,
              </Typography>
              <Typography
                sx={{
                  marginTop: "6px",
                  fontFamily: "Work Sans",
                  fontSize: "10px",
                  fontWeight: 400,
                  lineHeight: "10px",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                  opacity: "60%",
                }}
              >
                Director of Sales, CIMCO Refrigeration
              </Typography>

              <Typography
                sx={{
                  padding: "22px 42px",
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                    md: "16px",
                    lg: "24px",
                  },
                  fontWeight: 400,
                  lineHeight: "29px",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                }}
              >
                Zoho CRM Plus Helps Agoda’s Strategic Partnerships Team Manage
                Workflows And Communicate With Partners
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "14px",
                    letterSpacing: "-0.02em",
                    textAlign: "center",
                    color: "#006FCE",
                  }}
                >
                  Read full story
                  <ArrowRightAltIcon
                    sx={{
                      fontSize: "14px",
                      marginLeft: "5px",
                    }}
                  />
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CompanyBanner;
