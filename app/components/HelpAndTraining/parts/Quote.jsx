import { Stack, Typography } from "@mui/material";
import React from "react";
import horizontalImg from "../../assets/HrUnion.png";
import Link from "next/link";

import Image from "next/image";
const Quote = () => {
  return (
    <>
      <Stack
        display={{
          xs: "none",
          xl: "flex",
        }}
        width={"100%"}
        margin={"0 auto"}
        sx={{
          backgroundColor: "#8AA3FF",
        }}
      >
        <Stack margin={"0 auto"} width={"1420px"} height={"420px"}>
          <Stack
            width={"80%"}
            margin={"40px auto"}
            gap={2}
            position={"relative"}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "-100px",
                left: "80px",
                fontFamily: "Xanh Mono",
                fontSize: "350px",
                fontWeight: 200,
                lineHeight: "100px",
                letterSpacing: "-5.63em",
                textAlign: "left",
                transform: "rotate(-180deg)",
                color: "#052973",
              }}
            >
              {`‘‘`}
            </Typography>
            <Typography
              sx={{
                width: "90%",
                margin: "50px auto 10px",
                fontFamily: "Work Sans",
                fontSize: "30px",
                fontWeight: 500,
                lineHeight: "40px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Saniiro Business Cloud People, delivers amazing workforce
              experiences, so that customers can become great employer brands,
              increasing engagement, performance, and retention, while making it
              easier to acquire top talent.
            </Typography>
            <Image src={horizontalImg} alt="horizontalImg" />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              marginRight={"40px"}
            >
              <Stack margin={"0 40px"}>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "22px",
                    fontWeight: 700,
                    lineHeight: "30px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Chester Hull
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Founder/CEO at Prosound.
                </Typography>
              </Stack>
              <Link
                href="/view-all1"
                style={{
                  textDecoration: "none",
                }}
              >
                <Stack
                  sx={{
                    width: "86px",
                    height: "36px",
                    padding: "12px, 14px, 12px, 14px",
                    backgroundColor: "#052973",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "12px",
                      fontWeight: 700,
                      lineHeight: "12px",
                      letterSpacing: "0em",
                      textAlign: "center",

                      color: "#FFFFFF",
                    }}
                  >
                    View all
                  </Typography>
                </Stack>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        display={{
          xs: "flex",
          xl: "none",
        }}
        width={"100%"}
        margin={"0 auto"}
        sx={{
          backgroundColor: "#8AA3FF",
        }}
      >
        <Stack
          maxWidth={"1536px"}
          width={{
            xs: "90%",
            lg: "80%",
          }}
          m={{
            xs: "20px auto",
            lg: "60px auto",
          }}
          gap={2}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "16px",
                lg: "18px",
                xl: "20px",
              },
              fontWeight: 500,
              lineHeight: "40px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            Saniiro Business Cloud People, delivers amazing workforce
            experiences, so that customers can become great employer brands,
            increasing engagement, performance, and retention, while making it
            easier to acquire top talent.
          </Typography>

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            marginRight={"40px"}
          >
            <Stack margin={"0 40px"}>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "18px",
                  },
                  fontWeight: 700,
                  lineHeight: "30px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Chester Hull
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "15px",
                  fontWeight: 500,
                  lineHeight: "20px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Founder/CEO at Prosound.
              </Typography>
            </Stack>
            <Link
              href="/view-all1"
              style={{
                textDecoration: "none",
              }}
            >
              <Stack
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                sx={{
                  width: "86px",
                  height: "36px",
                  padding: "12px, 14px, 12px, 14px",
                  backgroundColor: "#052973",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "12px",
                    fontWeight: 700,
                    lineHeight: "12px",
                    letterSpacing: "0em",
                    textAlign: "center",

                    color: "#FFFFFF",
                  }}
                >
                  View all
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Quote;
