import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ofc from "../assets/ofc.svg";
import ofc2 from "../assets/ofc2.svg";
import Link from "next/link";

import play from "../assets/play.svg";
import software from "../assets/software.svg";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropDownIcon from "@mui/icons-material/KeyboardArrowRight";

import "./Footer.css";
import Image from "next/image";
const Footer = () => {
  const list1 = [
    {
      item: "About us",
      to: "/About-us",
    },
    {
      item: "Career",
      to: "/Resources/Career",
    },
    {
      item: "Updates",
      to: "/Updates",
    },

    {
      item: "Contact us",
      to: "/Contact-us",
    },
    {
      item: "Request Callback",
      to: "/requestCallback",
    },
    // {
    //   item: "Product Reviews",
    // },
    // {
    //   item: "Awards & Recognition",
    // },
    // {
    //   item: "Get Offer",
    // },
  ];
  const list2 = [
    {
      item: "Resources",
      to: "/HelpAndTraining",
    },

    {
      item: "Help & Training ",
      to: "/HelpAndTraining",
    },

    {
      item: "FAQ’s",
      to: "/Resources/faq",
    },
    {
      item: "Blog",
      to: "/Resources/Blog",
    },
    {
      item: "Videos",
      to: "/Resources/Videos",
    },
    // {
    //   item: "Gallery",
    // },
    // {
    //   item: "Security & Performance",
    // },
    // {
    //   item: "Contact support",
    // },
  ];

  const list3 = [
    {
      item: "Case studies",
      to: "/Resources/CaseStudy",
    },
    {
      item: "Testimonials",
      to: "/Resources/Testimonials",
    },
    {
      item: "Become A Partner",
      to: "/Resources/BecomeAPartner",
    },
  ];

  const list4 = [
    {
      item: "Legal",
      to: "/subfooter/legal",
    },
    {
      item: "Terms & Conditions",
      to: "/subfooter/terms-and-conditions",
    },
    {
      item: "Privacy Policy",
      to: "/subfooter/privacy-policy",
    },
    {
      item: "Canclenatin/Refund Policy",
      to: "/subfooter/cancalation-and-refund-policy",
    },
    {
      item: "Employee Login",
      to: "/subfooter/employee-login",
    },
  ];

  return (
    <>
      <Stack
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
        }}
      >
        <Stack
          bgcolor={"#35373E"}
          p={"40px 0"}
          direction={"row"}
          justifyContent={"space-evenly"}
        >
          <Stack gap={2}>
            <Typography color={"white"} fontWeight={"bold"} fontSize={"25px"}>
              Saniiro Contact
            </Typography>
            <Stack gap={1}>
              <Stack
                p={2}
                border={"1px solid white"}
                bgcolor={"#F15B25"}
                width={"265px"}
                borderRadius={1}
                direction={"row"}
                gap={3}
              >
                <Stack justifyContent={"center"}>
                  <Image
                    src={ofc}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                </Stack>
                <Stack>
                  <Typography
                    fontWeight={"bold"}
                    color={"white"}
                    fontSize={"22px"}
                  >
                    Head Office
                  </Typography>
                  <Typography color={"white"}>
                    613-5th Floor, Apex Mall, Lalkothi, Jaipur - 302015
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                p={2}
                border={"1px solid white"}
                bgcolor={"#F15B25"}
                width={"265px"}
                borderRadius={1}
                direction={"row"}
                gap={3}
              >
                <Stack justifyContent={"center"}>
                  <Image
                    src={ofc2}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                </Stack>
                <Stack>
                  <Typography
                    fontWeight={"bold"}
                    color={"white"}
                    fontSize={"22px"}
                  >
                    Sale(s) Office
                  </Typography>
                  <Typography color={"white"}>
                    Jaipur, Mumbai, Lucknow, Pune, Ahmedabad
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Typography color={"white"} fontWeight={"bold"} fontSize={"25px"}>
              Company
            </Typography>
            <Box>
              <ul
                style={{
                  display: "flex",
                  gap: "12px",
                  flexDirection: "column",
                }}
              >
                {list1.map((d, i) => (
                  <li
                    key={i}
                    className="list-item"
                    style={{ color: "lightgray", textDecoration: "none" }}
                  >
                    <Link
                      href={`${d.to}`}
                      style={{ color: "lightgray", textDecoration: "none" }}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {d.item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          </Stack>
          <Stack>
            <Typography color={"white"} fontWeight={"bold"} fontSize={"25px"}>
              Resources
            </Typography>
            <Box color={"lightgray"}>
              <ul
                style={{
                  display: "flex",
                  gap: "12px",
                  flexDirection: "column",
                }}
              >
                {list2.map((d, i) => (
                  <li
                    key={i}
                    className="list-item"
                    style={{ color: "lightgray", textDecoration: "none" }}
                  >
                    <Link
                      // className="Footer-new"
                      href={`${d.to}`}
                      style={{ color: "lightgray", textDecoration: "none" }}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {d.item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          </Stack>
          <Stack>
            <Typography color={"white"} fontWeight={"bold"} fontSize={"25px"}>
              Customers
            </Typography>
            <Box color={"lightgray"}>
              <ul
                style={{
                  display: "flex",
                  gap: "12px",
                  flexDirection: "column",
                }}
              >
                <li
                  className="list-item"
                  style={{ color: "lightgray", textDecoration: "none" }}
                >
                  <Link
                    href="/Resources/CaseStudy"
                    onClick={() => window.scrollTo(0, 0)}
                    style={{ color: "lightgray", textDecoration: "none" }}
                  >
                    Case studies
                  </Link>
                </li>
                <li
                  style={{ color: "lightgray", textDecoration: "none" }}
                  className="list-item"
                >
                  <Link
                    href="/Resources/Testimonials"
                    style={{ color: "lightgray", textDecoration: "none" }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    href="/Resources/BecomeAPartner"
                    style={{ color: "lightgray", textDecoration: "none" }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Become A Partner
                  </Link>
                </li>
              </ul>
            </Box>
            <Stack gap={2}>
              <Typography
                color={"white"}
                fontWeight={"bold"}
                fontSize={"30px"}
                lineHeight={0.7}
              >
                DOWNLOAD APP
              </Typography>
              <Stack direction={"row"} gap={1.5}>
                <Image src={play} alt="" />
                <Image src={software} alt="" />
              </Stack>
              <Stack gap={1}>
                <Stack
                  direction={"row"}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  borderRadius={1}
                  width={"157px"}
                  gap={1}
                  p={"3px 8px"}
                >
                  <EmailIcon sx={{ color: "white" }} />
                  <Typography color={"white"}>info@saniiro.com</Typography>
                </Stack>
                {/* <Stack
                  direction={"row"}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  borderRadius={1}
                  width={"157px"}
                  gap={1}
                  p={"3px 8px"}
                >
                  <CallIcon sx={{ color: "white" }} />
                  <Typography color={"white"}>+91-9829232322</Typography>
                </Stack> */}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          bgcolor={"#43464F"}
          height={"72px"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"Center"}
          gap={5}
        >
          {list4.map((d, i) => (
            <Link
              key={i}
              href={`${d.to}`}
              style={{ color: "lightgray", textDecoration: "none" }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Typography>{d.item}</Typography>
            </Link>
          ))}
        </Stack>
      </Stack>

      <Stack
        bgcolor={"#35373E"}
        sx={{
          fontFamily: "Work Sans",
          display: {
            xs: "flex",
            lg: "none",
          },
        }}
      >
        <Stack
          sx={{
            margin: {
              xs: "0px 8px",
            },
          }}
        >
          <Stack gap={2}>
            <Stack
              gap={2}
              sx={{
                margin: "0px auto",
              }}
            >
              <Typography
                color={"white"}
                fontWeight={"bold"}
                fontSize={"25px"}
                sx={{
                  margin: "20px auto 0",
                }}
              >
                Saniiro Contact
              </Typography>
              <Stack
                sx={{
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  gap: {
                    xs: 2,
                    md: 10,
                  },
                }}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Stack
                  p={2}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  sx={{
                    width: {
                      xs: "80%",
                      md: "265px",
                    },
                  }}
                  borderRadius={1}
                  direction={"row"}
                  gap={3}
                >
                  <Stack justifyContent={"center"}>
                    <Image
                      src={ofc}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Stack>
                  <Stack>
                    <Typography
                      fontWeight={"bold"}
                      color={"white"}
                      fontSize={"22px"}
                    >
                      Head Office
                    </Typography>
                    <Typography color={"white"}>
                      613-5th Floor, Apex Mall, Lalkothi, Jaipur - 302015
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  p={2}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  sx={{
                    width: {
                      xs: "80%",
                      md: "265px",
                    },
                  }}
                  borderRadius={1}
                  direction={"row"}
                  gap={3}
                >
                  <Stack justifyContent={"center"}>
                    <Image
                      src={ofc2}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Stack>
                  <Stack>
                    <Typography
                      fontWeight={"bold"}
                      color={"white"}
                      fontSize={"22px"}
                    >
                      Sale(s) Office
                    </Typography>
                    <Typography color={"white"}>
                      Jaipur, Mumbai, Lucknow, Pune, Ahmedabad
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <hr
              style={{
                border: "0.5px solid white",
                width: "90%",
              }}
            />
            <Stack>
              <Stack
                width={"80%"}
                margin={"0px auto"}
                gap={2}
                sx={{
                  top: 65,
                  backgroundColor: "#35373E",
                  zIndex: "11",
                }}
              >
                <Accordion
                  sx={{
                    color: "white",
                    backgroundColor: "#35373E",
                    border: "none",
                    boxShadow: "none",
                    alignItems: "center",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ArrowDropDownIcon
                        sx={{
                          color: "white",
                        }}
                      />
                    }
                  >
                    <Box>
                      <Box
                        display={"flex"}
                        justifyContent="center"
                        alignItems={"center"}
                      >
                        <Typography
                          alignSelf="center"
                          display="inline-block"
                          fontSize={20}
                          fontFamily={"Work Sans"}
                          className="navlink"
                          sx={{
                            transition: "all 0.4s ease-in",
                            color: "white",
                          }}
                        >
                          Company
                        </Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack
                      justifyContent={"center"}
                      gap={1}
                      marginLeft={"20px"}
                    >
                      {list1.map((d, i) => (
                        <li
                          key={i}
                          style={{
                            fontFamily: "Work Sans",
                            color: "white",
                            textDecoration: "none",
                          }}
                          className="list-item"
                        >
                          <Link
                            href={`${d.to}`}
                            style={{ color: "white", textDecoration: "none" }}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            {d.item}
                          </Link>
                        </li>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "white",
                    backgroundColor: "#35373E",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ArrowDropDownIcon
                        sx={{
                          color: "white",
                        }}
                      />
                    }
                  >
                    <Box>
                      <Box
                        display={"flex"}
                        justifyContent="center"
                        alignItems={"center"}
                      >
                        <Typography
                          alignSelf="center"
                          display="inline-block"
                          fontSize={20}
                          fontFamily={"Work Sans"}
                          className="navlink"
                          sx={{
                            transition: "all 0.4s ease-in",
                            color: "white",
                          }}
                        >
                          Features
                        </Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack
                      justifyContent={"center"}
                      gap={1}
                      marginLeft={"20px"}
                    >
                      {list2.map((d, i) => (
                        <li
                          key={i}
                          style={{
                            fontFamily: "Work Sans",
                            color: "white",
                            textDecoration: "none",
                          }}
                          className="list-item"
                        >
                          <Link
                            href={`${d.to}`}
                            style={{ color: "white", textDecoration: "none" }}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            {d.item}
                          </Link>
                        </li>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "white",
                    backgroundColor: "#35373E",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ArrowDropDownIcon
                        sx={{
                          color: "white",
                        }}
                      />
                    }
                  >
                    <Box>
                      <Box
                        display={"flex"}
                        justifyContent="center"
                        alignItems={"center"}
                      >
                        <Typography
                          alignSelf="center"
                          display="inline-block"
                          fontSize={20}
                          fontFamily={"Work Sans"}
                          className="navlink"
                          sx={{
                            transition: "all 0.4s ease-in",
                            color: "white",
                          }}
                        >
                          Customers
                        </Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack
                      justifyContent={"center"}
                      gap={1}
                      marginLeft={"20px"}
                    >
                      {list3.map((d, i) => (
                        <li
                          key={i}
                          style={{
                            fontFamily: "Work Sans",
                            color: "white",
                            textDecoration: "none",
                          }}
                          className="list-item"
                        >
                          <Link
                            href={`${d.to}`}
                            style={{ color: "white", textDecoration: "none" }}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            {d.item}
                          </Link>
                        </li>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Stack>

            <Stack gap={2} alignItems={"center"} marginTop={"10px"}>
              <Typography
                color={"white"}
                fontWeight={"bold"}
                fontSize={"25px"}
                lineHeight={0.7}
                style={{
                  fontFamily: "Work Sans",
                }}
              >
                DOWNLOAD APP
              </Typography>
              <Stack direction={"row"} gap={1.5}>
                <Image src={play} alt="" />
                <Image src={software} alt="" />
              </Stack>
              <Stack
                gap={2}
                sx={{
                  justifyContent: "center",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                }}
              >
                <Stack
                  direction={"row"}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  borderRadius={1}
                  gap={1}
                  p={"8px 8px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <EmailIcon sx={{ color: "white" }} />
                  <Typography variant="p" color={"white"}>
                    info@saniiro.com
                  </Typography>
                </Stack>
                {/* <Stack
                  direction={"row"}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  borderRadius={1}
                  gap={1}
                  p={"8px 5px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <CallIcon sx={{ color: "white" }} />
                  <Typography variant="p" color={"white"}>
                    +91-9829232322
                  </Typography>
                </Stack> */}
              </Stack>
            </Stack>
            <hr
              style={{
                border: "0.5px solid white",
                width: "90%",
              }}
            />
            <Stack
              padding={"20px 0"}
              bgcolor={"#43464F"}
              alignItems={"center"}
              justifyContent={"Center"}
              gap={3}
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              {list4.map((d, i) => (
                <Link
                  key={i}
                  href={`${d.to}`}
                  style={{ color: "lightgray", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {d.item}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
