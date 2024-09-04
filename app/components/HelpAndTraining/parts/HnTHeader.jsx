import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import backgroundImg from "./../../assets/backgroundImg.png";
import AdministratorsImg from "./../../assets/strators.png";
import DevelopersImg from "./../../assets/developers.png";
import SalesImg from "./../../assets/sales.png";
import managerImg from "./../../assets/salesManager.png";
import Link from "next/link";

const stackData = [
  {
    imgSrc: AdministratorsImg,
    title: "Administrators",
    description:
      "For admins who are responsible for the setup, configuration, and maintenance of their organization’s CRM software.",
  },
  {
    imgSrc: DevelopersImg,
    title: "Developers",
    description:
      "For developers who customize, extend, and build applications on the CRM platform.",
  },
  {
    imgSrc: SalesImg,
    title: "Sales Team",
    description:
      "For sales representatives who use CRM to manage customer interactions, track leads, and close deals.",
  },
  {
    imgSrc: managerImg,
    title: "Managers",
    description:
      "For managers who oversee teams and utilize CRM data to make strategic decisions and optimize processes.",
  },
];

const HnTHeader = () => {
  return (
    <>
      <Stack
        direction="column"
        spacing={0}
        sx={{
          zIndex: -1,
          backgroundImage: { backgroundImg },
        }}
      >
        <Stack
          width={"100%"}
          height={"600px"}
          position={"relative"}
          sx={{
            backgroundImage:
              "linear-gradient(180deg, rgba(133, 159, 255, 0) 57.12%, #859FFF 100%)",
          }}
        >
          <Stack
            width={{
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "60%",
              xl: "909px",
            }}
            margin={{
              xs: "30px auto 0px",
              sm: "35px auto 0px",
              md: "50px auto 0px",
              lg: "70px auto 10px",
              xl: "130px auto ",
            }}
            gap={2}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "20px",
                  sm: "22px",
                  md: "25px",
                  lg: "30px",
                },
                fontWeight: 600,
                lineHeight: "30px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#4DB267",
              }}
            >
              Get trained by the experts,
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "30px",
                  sm: "35px",
                  md: "40px",
                  lg: "50px",
                },
                fontWeight: 600,
                lineHeight: "53px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#052973",
              }}
            >
              get smarter
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "16px",
                  md: "18px",
                },
                fontWeight: 400,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              Saniro CRM streamlines the day-to-day operations of thousands of
              businesses around the globe, every single day. Our instructor-led
              training programs are designed to help you get the most out of
              your subscription. Designing pristine software is only part of our
              job—helping you master it is the other.
            </Typography>
          </Stack>

          <Stack
            position={"absolute"}
            bottom={"0"}
            left={"7.5%"}
            width={"85%"}
            height={"50%"}
            sx={{
              zIndex: -1,
              backgroundImage: `url(${backgroundImg.src})`,
            }}
          />
          <Stack
            display={{
              xs: "none",
              md: "flex",
            }}
            position={"absolute"}
            width={{
              xs: "90%",
              sm: "90%",
              md: "85%",
            }}
            height={"580px"}
            bottom={"-540px"}
            left={"7.5%"}
            borderRadius={"10px"}
            sx={{
              backgroundColor: "#248F41",
              boxShadow: "3px 4px 15.8 px 0px #00000040",
            }}
          >
            <Stack>
              <Stack padding={"30px 33px"} gap={2}>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "43px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#FFFFFF",
                  }}
                >
                  Courses
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "18px",
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "80%",
                    },
                    fontWeight: 400,
                    lineHeight: "27px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#FFFFFF",
                  }}
                >
                  Whether you're new to CRM software and are testing the waters
                  with Zoho, or you're a veteran who's looking for the best
                  possible experience—we've got you covered. We provide a range
                  of training programs that cater to diverse roles and
                  responsibilities.
                </Typography>
                <Stack>
                  <Stack
                    width={"95%"}
                    margin={"0 auto"}
                    padding={"25px 23px"}
                    height={"100%"}
                    backgroundColor={"#FFFFFF"}
                    borderRadius={"10px"}
                    direction={"row"}
                  >
                    {stackData.map((stack, index) => (
                      <Stack
                        key={index}
                        width="25%"
                        height="100%"
                        borderRight={
                          index < stackData.length - 1
                            ? "1px solid #34A853"
                            : "none"
                        } // Adding border to all stacks except the last one
                      >
                        <Stack padding="15px 20px 27px 20px" gap={3.7}>
                          <Box
                            component="img"
                            sx={{
                              height: 51,
                              width: 61,
                            }}
                            alt="Stack Image"
                            src={stack.imgSrc}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Work Sans",
                              fontSize: "18px",
                              fontWeight: 600,
                              lineHeight: "27px",
                              color: "#052973",
                            }}
                          >
                            {stack.title}
                          </Typography>
                          <Box
                            marginTop="-25px"
                            width="20%"
                            height="4px"
                            backgroundColor="#34A853"
                            borderRadius="10px"
                          />
                          <Typography
                            sx={{
                              fontFamily: "Work Sans",
                              fontSize: "16px",
                              fontWeight: 400,
                              lineHeight: "19px",
                              letterSpacing: "-0.02em",
                              textAlign: "left",
                            }}
                          >
                            {stack.description}
                          </Typography>
                          <Link
                            href="/view-all3"
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              zIndex={444}
                              sx={{
                                fontFamily: "Work Sans",
                                fontSize: "18px",
                                fontWeight: 500,
                                lineHeight: "21px",
                                letterSpacing: "-0.02em",
                                textAlign: "right",
                                color: "#0079FF",
                                "&:hover": {
                                  color: "#052973",
                                  cursor: "pointer",
                                },
                              }}
                            >
                              Learn More
                            </Typography>
                          </Link>
                        </Stack>
                      </Stack>
                    ))}
                    {/* <Stack
                    width={"25%"}
                    height={"100%"}
                    borderRight={"1px solid #34A853"}
                  ></Stack>
                  <Stack
                    width={"25%"}
                    height={"100%"}
                    borderRight={"1px solid #34A853"}
                  ></Stack>
                  <Stack
                    width={"25%"}
                    height={"100%"}
                    borderRight={"1px solid #34A853"}
                  ></Stack> */}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          display={{
            xs: "flex",
            md: "none",
          }}
          margin={"0 auto"}
          width={{
            xs: "100%",
            md: "85%",
          }}
          sx={{
            backgroundColor: "#248F41",
            boxShadow: "3px 4px 15.8 px 0px #00000040",
          }}
        >
          <Stack>
            <Stack padding={2} gap={2}>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "40px",
                  fontWeight: 600,
                  lineHeight: "43px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Courses
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "18px",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "80%",
                  },
                  fontWeight: 400,
                  lineHeight: "27px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Whether you're new to CRM software and are testing the waters
                with Zoho, or you're a veteran who's looking for the best
                possible experience—we've got you covered. We provide a range of
                training programs that cater to diverse roles and
                responsibilities.
              </Typography>
              <Stack>
                <Stack
                  width={"95%"}
                  margin={"0 auto"}
                  // padding={"25px 23px"}
                  height={"100%"}
                  backgroundColor={"#FFFFFF"}
                  borderRadius={"10px"}
                  direction={{
                    xs: "column",
                  }}
                >
                  <Stack
                    borderBottom={"1px solid #34A853"}
                    width={{
                      xs: "100%",
                      md: "25%",
                    }}
                    height={"100%"}
                  >
                    <Stack padding={"15px 20px 27px 20px"} gap={3.7}>
                      <Box
                        component="img"
                        sx={{
                          height: 51,
                          width: 61,
                        }}
                        alt="AdministratorsImg"
                        src={AdministratorsImg}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "18px",
                          fontWeight: "600",
                          lineHeight: "27px",
                          color: "#052973",
                        }}
                      >
                        Administrators
                      </Typography>
                      <Box
                        marginTop={"-25px"}
                        width={"20%"}
                        height={"4px"}
                        backgroundColor={"#34A853"}
                        borderRadius={"10px"}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "19px",
                          letterSpacing: "-0.02em",
                          textAlign: "left",
                        }}
                      >
                        For admins who are responsible for the setup,
                        configuration, and maintenance of their organization’s
                        CRM software.
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "18px",
                          fontWeight: 500,
                          lineHeight: "21px",
                          letterSpacing: "-0.02em",
                          textAlign: "right",
                          color: "#0079FF",
                        }}
                      >
                        Learn More
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    width={{
                      xs: "100%",
                      md: "25%",
                    }}
                    height={"100%"}
                    borderBottom={"1px solid #34A853"}
                  >
                    <Stack padding={"11px 20px 23px 15px"} gap={3.7}>
                      <Box
                        component="img"
                        sx={{
                          height: 51,
                          width: 61,
                        }}
                        alt="AdministratorsImg"
                        src={DevelopersImg}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "18px",
                          fontWeight: "600",
                          lineHeight: "27px",
                          color: "#052973",
                        }}
                      >
                        Administrators
                      </Typography>
                      <Box
                        marginTop={"-25px"}
                        width={"20%"}
                        height={"4px"}
                        backgroundColor={"#34A853"}
                        borderRadius={"10px"}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "19px",
                          letterSpacing: "-0.02em",
                          textAlign: "left",
                        }}
                      >
                        For admins who are responsible for the setup,
                        configuration, and maintenance of their organization’s
                        CRM software.
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "18px",
                          fontWeight: 500,
                          lineHeight: "21px",
                          letterSpacing: "-0.02em",
                          textAlign: "right",
                          color: "#0079FF",
                        }}
                      >
                        Learn More
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    width={{
                      xs: "100%",
                      md: "25%",
                    }}
                    height={"100%"}
                    borderBottom={"1px solid #34A853"}
                  >
                    <Stack padding={"11px 20px 23px 15px"} gap={3.7}>
                      <Box
                        component="img"
                        sx={{
                          height: 51,
                          width: 61,
                        }}
                        alt="AdministratorsImg"
                        src={SalesImg}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "18px",
                          fontWeight: "600",
                          lineHeight: "27px",
                          color: "#052973",
                        }}
                      >
                        Administrators
                      </Typography>
                      <Box
                        marginTop={"-25px"}
                        width={"20%"}
                        height={"4px"}
                        backgroundColor={"#34A853"}
                        borderRadius={"10px"}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "19px",
                          letterSpacing: "-0.02em",
                          textAlign: "left",
                        }}
                      >
                        For admins who are responsible for the setup,
                        configuration, and maintenance of their organization’s
                        CRM software.
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "18px",
                          fontWeight: 500,
                          lineHeight: "21px",
                          letterSpacing: "-0.02em",
                          textAlign: "right",
                          color: "#0079FF",
                        }}
                      >
                        Learn More
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    width={{
                      xs: "100%",
                      md: "25%",
                    }}
                    height={"100%"}
                    borderBottom={"1px solid #34A853"}
                  >
                    <Stack padding={"11px 20px 23px 15px"} gap={3.7}>
                      <Box
                        component="img"
                        sx={{
                          height: 51,
                          width: 61,
                        }}
                        alt="AdministratorsImg"
                        src={managerImg}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "18px",
                          fontWeight: "600",
                          lineHeight: "27px",
                          color: "#052973",
                        }}
                      >
                        Administrators
                      </Typography>
                      <Box
                        marginTop={"-25px"}
                        width={"20%"}
                        height={"4px"}
                        backgroundColor={"#34A853"}
                        borderRadius={"10px"}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "19px",
                          letterSpacing: "-0.02em",
                          textAlign: "left",
                        }}
                      >
                        For admins who are responsible for the setup,
                        configuration, and maintenance of their organization’s
                        CRM software.
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "18px",
                          fontWeight: 500,
                          lineHeight: "21px",
                          letterSpacing: "-0.02em",
                          textAlign: "right",
                          color: "#0079FF",
                        }}
                      >
                        Learn More
                      </Typography>
                    </Stack>
                  </Stack>
                  {/* <Stack
                    width={"25%"}
                    height={"100%"}
                    borderRight={"1px solid #34A853"}
                  ></Stack>
                  <Stack
                    width={"25%"}
                    height={"100%"}
                    borderRight={"1px solid #34A853"}
                  ></Stack>
                  <Stack
                    width={"25%"}
                    height={"100%"}
                    borderRight={"1px solid #34A853"}
                  ></Stack> */}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          display={{
            xs: "none",
            md: "flex",
          }}
          width={"100%"}
          height={"600px"}
          sx={{
            backgroundImage:
              "linear-gradient(0, rgba(255, 255, 255, 0) 0%, #859FFF 100%)",
          }}
        />
      </Stack>
    </>
  );
};

export default HnTHeader;
