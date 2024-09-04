import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NavLight from "../../../Navbar/NavLight";
// import TickMark from "../assets/TickMark.svg";
import Button from "../../../utils/Button";
import dotedSmImg from "../../../assets/Group 62557.png";
import dotedMdImg from "../../../assets/Group 62562.png";
import mediaImg from "../../../assets/image 124.png";
import ReactPlayer from "react-player";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const BillingBanner = () => {
  const router = useRouter();
  const pathname = usePathname();
  // console.log(router);
  // console.log(pathname);

  // Determine the text based on the URL
  const getBannerText = () => {
    if (pathname.includes("Billing")) {
      return "Billing";
    } else if (pathname.includes("Accounting")) {
      return "Accounting";
    } else if (pathname.includes("Inventory")) {
      return "Inventory";
    } else {
      return "Default"; // Default text if no keyword is found
    }
  };
  return (
    <Stack
      height={{
        xs: "100%",
        lg: "100vh",
      }}
      position={"relative"}
      bgcolor={"#052973"}
      className="textured-background"
    >
      <NavLight />
      <Stack></Stack>
      <Stack
        maxWidth={"1536px"}
        margin={"0 auto"}
        position={"relative"}
        zIndex={12}
      >
        <Stack
          margin={"0 auto"}
          width={{
            xs: "90%",
            lg: "95%",
            xl: "100%",
          }}
        >
          {" "}
          {/* Add padding for inner content */}
          <Stack
            color={"white"}
            margin={"0px auto"}
            width={"100%"}
            position={"relative"}
          >
            <Stack
              marginTop={{
                xs: "2rem",
                lg: "3rem",
                xl: "4rem",
              }}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <Typography
                fontFamily={"monospace"}
                width={"50%"}
                textAlign={"right"}
                textTransform={"uppercase"}
                fontSize={"calc(6vw + 13px)"}
                letterSpacing={1}
                fontWeight={"bold"}
                color={"transparent"}
                lineHeight={1}
                className="text-stroke"
              >
                {getBannerText()}
              </Typography>
              <Typography
                width={"49%"}
                textTransform={"uppercase"}
                fontSize={"calc(3vw + 10px)"}
                letterSpacing={1}
                fontWeight={"bold"}
                color={"white"}
                lineHeight={1}
                textAlign={"left"}
              >
                Software Management
              </Typography>
            </Stack>

            <Stack marginTop={"1rem"}>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "calc(0.8vw + 0.6rem)", // Responsive font size
                  fontWeight: 400,
                  lineHeight: "1.2",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#B0B0B0",
                  width: "90%",
                  margin: "0px auto",
                }}
              >
                Saniirobooks is the fastest growing billing software curated to
                serve micro, small, and medium business houses. It allows users
                to create GST-compliant professional invoices and bills in a
                simple manner, using minimal time. Saniiro takes care of the
                MSMED Act, GST, E-invoice, E-way bills, and TDS/TCS laws while
                issuing invoices.With Saniiro, you can customize your invoice
                format or choose from more than 50+ predefined professional
                invoices. When generating invoices from proforma invoices, sales
                orders, or sale challans, no repetitive data feeding is
                required; only one click generates the invoice and notifies to
                the buyer. The same functionality applies to E-invoice and E-way
                bill generation, you can attach a document with invoice for
                future reference ,allowing you to access them anytime ,
                anywhere. Saniiro is a simple, efficient, and fast solution to
                generating regular invoices, export invoices, SEZ invoices,
                service invoices, recurring invoices, E-invoices, and AMC
                invoices.
              </Typography>
            </Stack>
            <Stack margin={"0px auto"}>
              <Box
                alignSelf={"center"}
                sx={{
                  width: "80%",
                  padding: "0.5rem 1rem",
                  marginTop: "2rem",
                  backgroundColor: "#F15B25",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "calc(0.6vw + 0.5rem)",
                    fontWeight: 600,
                    lineHeight: "1.2",
                    letterSpacing: "0em",
                    padding: "0.5rem 1rem",
                    textAlign: "center",
                  }}
                >
                  Learn More
                </Typography>
              </Box>
            </Stack>
          </Stack>{" "}
          {/* <Box
            display={{
              xs: "none",
              lg: "block",
            }}
            position={"absolute"}
            bottom={{
              lg: "-97%",
              xl: "-56%",
            }}
            left={{
              lg: "15%",
              xl: "11%",
            }}
            width={"10%"}
          >
            <img width={"100%"} src={dotedSmImg} alt="icon" />
          </Box>
          <Box
            display={{
              xs: "none",
              lg: "block",
            }}
            zIndex={1}
            position={"absolute"}
            bottom={{
              lg: "-185%",
              xl: "-100%",
            }}
            right={{
              lg: "13%",
              xl: "5%",
            }}
            width={"15%"}
          >
            <img width={"100%"} src={dotedMdImg} alt="icon" />
          </Box> */}
          {/* <Box
            display={{
              xs: "block",
              lg: "none",
            }}
            width={{
              xs: "100%",
              md: "80%",
            }}
            height={{
              xs: "12rem",
              sm: "15rem",
              md: "20rem",
            }}
            pt={{
              xs: "2rem",
              md: "2rem",
            }}
            margin={"0 auto 2rem"}
          >
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=SlhESAKF1Tk"
              width="100%"
              height="100%"
              // controls={true}
              playing
              light={true}
              sx={{ borderRadius: "10px" }}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
              }}
            ></ReactPlayer>
          </Box> */}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BillingBanner;
