import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import section31 from "../../assets/Billing Module.gif";
import section32 from "../../assets/Inventory Management Module.gif";
import section33 from "../../assets/Accounting Module.gif";
import Button from "../../utils/Button";
import Carousel from "react-multi-carousel";
import Link from "next/link";

import Image from "next/image";

const features = [
  {
    id: 1,
    src: section31,
    title: "Billing/Invoicing",
    disc: "Saniiro books is the fastest growing billing software curated to serve micro, small, and medium business houses. It allows users to create GST-compliant professional invoices and bills in a simple manner, using minimal time. Saniiro takes care of the MSMED Act, GST, E-invoice, E-way bills, and TDS/TCS laws while issuing invoices.With Saniiro, you can customize your invoice format or choose from more than 50+ predefined professional invoices...",
    bulltePoints1: "E-way bill generation",
    bulltePoints2: "E-invoice generation",
    bulltePoints3: " Android and iOS app availability for billing",
    Path: "/Features/Billing-module",
  },
  {
    id: 2,
    src: section32,
    title: "Inventory",
    disc: "Optimize your inventory processes with Saniiro Books' robust inventory management module. Our solution helps you maintain accurate stock levels, streamline operations, and enhance overall efficiency.",
    // subDisc: "Made right here in India–try the SaaS from Madras!",
    bulltePoints1: "Godown/Location-wise inventory management",
    bulltePoints2: "Manage minimum/re-order levels",
    Path: "/Features/Billing-module",
    bulltePoints3: "Barcode management.",
  },
  {
    id: 3,
    src: section33,
    title: "Accounting",
    Path: "/Features/Billing-module",
    disc: "Optimize your inventory processes with Saniiro Books' robust inventory management module. Our solution helps you maintain accurate stock levels, streamline operations, and enhance overall efficiency.",
    subDisc: "Made right here in India–try the SaaS from Madras!",
    bulltePoints1: "Financial reports generation",
    bulltePoints2: "GSTR-1 and GSTR-3B report generation",
    bulltePoints3: "Outstanding reminders",
    bulltePoints4: "Outstanding reminders",
    bulltePoints5: "Bank reconciliation",
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Billing = ({ bgColor }) => {
  return (
    <>
      <Stack
        fontFamily={"Work Sans"}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          gap={6}
          p={"60px 0"}
          // backgroundColor={"#eff2f6"}
        >
          {features.map((d, index) => (
            <Stack
              alignItems={"center"}
              justifyContent={d.id !== 2 ? "space-evenly" : "center"}
              width={"90%"}
              direction={"row"}
              sx={{
                flexDirection: {
                  xs: "column",
                  md:
                    d.id === 1
                      ? "row"
                      : d.id === 2
                      ? "row-reverse"
                      : d.id === 3
                      ? "row"
                      : "column",
                },
              }}
              gap={"30px"}
              key={index}
            >
              <Stack
                alignItems={"center"}
                width={"50%"}
                sx={{
                  width: {
                    md: "50%",
                    lg: d.id !== 2 ? "49%" : "37%",
                  },
                  height: {
                    md: "70vh",
                  },
                }}
              >
                <Image
                  src={d.src}
                  alt=""
                  style={{
                    width: d.id === 2 ? "100%" : "67%",
                    objectFit: "contain",
                  }}
                />
              </Stack>
              <Stack gap={2} width={"38%"}>
                <Typography
                  color={"#052973"}
                  fontSize={"49px"}
                  fontWeight={"bold"}
                  fontFamily={"Work sans"}
                >
                  {d.title}
                </Typography>
                <Typography fontFamily={"Work Sans"}>{d.disc}</Typography>
                {/* <Stack>
                  <ul>
                    <li>
                      <Typography fontFamily={"Work Sans"}>
                        {d.bulltePoints1}
                      </Typography>
                    </li>
                    <li>
                      <Typography fontFamily={"Work Sans"}>
                        {d.bulltePoints2}
                      </Typography>
                    </li>
                    <li>
                      <Typography fontFamily={"Work Sans"}>
                        {d.bulltePoints3}
                      </Typography>
                    </li>
                  </ul>
                </Stack> */}
                <Link href={d.Path} onClick={() => window.scrollTo(0, 0)}>
                  <Button
                    type="button"
                    fontFamily={"Work Sans"}
                    sx={{
                      color: "white",
                      width: "186px",
                      height: "48px",
                      fontSize: "20px",
                      bgcolor: "#052973",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#052973",
                        color: "white",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Link>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>

      {/* for mobile */}
      <Box
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
        width="100%"
        backgroundColor={"#eff2f6"}
      >
        <Stack margin={"19px auto "} width={"90%"}>
          <Carousel
            responsive={responsive}
            showDots
            infinite
            autoPlaySpeed={5000}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          >
            {features.map((d, index) => (
              <Stack key={index} gap={2} alignItems={"center"}>
                <Image
                  width={280}
                  height={280}
                  // objectFit="contain"
                  src={d.src}
                  alt={`billingImg ${index}`}
                />
                <Typography
                  fontFamily={"Work Sans"}
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "38px",
                    fontWeight: 600,
                    lineHeight: "31px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  {d.title}
                </Typography>
                <Typography
                  fontFamily={"Work Sans"}
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {d.disc}
                </Typography>
                <Typography
                  fontFamily={"Work Sans"}
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {d.subDisc}
                </Typography>
                {/* <Stack
                  sx={{
                    marginBottom: "25px",
                  }}
                >
                  <ul>
                    <li>
                      <Typography fontFamily={"Work Sans"}>
                        {d.bulltePoints1}
                      </Typography>
                    </li>
                    <li>
                      <Typography fontFamily={"Work Sans"}>
                        {d.bulltePoints2}
                      </Typography>
                    </li>
                    <li>
                      <Typography fontFamily={"Work Sans"}>
                        {d.bulltePoints3}
                      </Typography>
                    </li>
                    <li>
                      <Typography fontFamily={"Work Sans"}>
                        {d.bulltePoints4}
                      </Typography>
                    </li>
                  </ul>
                </Stack> */}
              </Stack>
            ))}
          </Carousel>
        </Stack>
      </Box>
    </>
  );
};

export default Billing;
