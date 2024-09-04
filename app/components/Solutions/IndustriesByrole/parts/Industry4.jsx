import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import leftArrow from "../../../assets/icons/Frame 62667.png";
import rightArrow from "../../../assets/icons/Frame 62666.png";
import FrameImg1 from "../../../assets/icons/Frame 62670.png";
import FrameImg2 from "../../../assets/icons/Frame 62671.png";
import FrameImg3 from "../../../assets/icons/Frame 62672.png";
import Image from "next/image";

const reviews = [
  {
    name: "Soya Somanathan",
    position: "Account Manager, Ayan Tech Solutions",
    content:
      "I might irritate the customer as they are not at the tipping point and they are busy with other projects and do not want to exchange pleasantries, so they would actively avoid phone calls. It would have been more effective to fill in the time by perhaps emailing some white papers relevant to their industry to keep the communication open. A CRM should help me do that.",
  },
  {
    name: "John Doe",
    position: "Marketing Director, XYZ Corp",
    content:
      "Our team found the CRM platform to be incredibly intuitive and user-friendly. It has streamlined our processes and improved collaboration among team members. The support team has also been very responsive to any inquiries we've had.",
  },
  {
    name: "Alice Smith",
    position: "CEO, Acme Industries",
    content:
      "As a small business owner, I was initially skeptical about investing in a CRM system, but I'm so glad we did. It has helped us keep track of customer interactions, manage leads more effectively, and ultimately increase sales. Highly recommended!",
  },
  {
    name: "Michael Johnson",
    position: "Sales Manager, Tech Innovations Inc.",
    content:
      "The CRM platform has been a game-changer for our sales team. It's customizable to fit our specific needs, and the analytics feature has provided valuable insights into customer behavior. Our conversion rates have significantly improved since implementing it.",
  },
  {
    name: "Emily Brown",
    position: "Customer Support Specialist, Global Solutions Ltd.",
    content:
      "I've been using the CRM system for handling customer inquiries and support tickets, and it has made my job so much easier. The ticketing system is efficient, and I can quickly access customer information to provide personalized assistance. Overall, it has greatly improved our customer service workflow.",
  },
  {
    name: "David Wilson",
    position: "Product Manager, Bright Ideas Co.",
    content:
      "We integrated the CRM platform with our project management software, and it has streamlined our workflow tremendously. Now, our sales and development teams are better aligned, leading to smoother project execution and faster time-to-market for our products.",
  },
];

const Industry4 = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const review = reviews[currentReviewIndex];
  const slicedContent = review.content.slice(0, 800);

  return (
    <>
      <Stack
        display={{
          xs: "none",
          lg: "flex",
        }}
        width={"100%"}
        height={"700px"}
        margin={"0px auto"}
        position={"relative"}
      >
        <Stack
          sx={{
            position: "absolute",
            top: "0px",
            zIndex: -1,
            right: "0px",
          }}
        >
          <Image
            width={700}
            height={"100vh"}
            src={FrameImg1}
            alt="Frame 62665"
          />
        </Stack>
        <Stack
          sx={{
            position: "absolute",
            bottom: "0px",
            zIndex: -1,
            left: "0px",
          }}
        >
          <Image
            fill
            objectFit="cover"
            sizes="100vw"
            src={FrameImg2}
            alt="Frame 62665"
          />
        </Stack>
        <Stack
          sx={{
            position: "absolute",
            bottom: "0px",
            zIndex: -2,
            right: "0px",
          }}
        >
          <Image width={400} height={110} src={FrameImg3} alt="Frame 62665" />
        </Stack>
        <Stack
          width={"50%"}
          height={"80%"}
          sx={{
            backgroundColor: "#34A853",
          }}
        >
          <Typography
            sx={{
              padding: "20px 10px",
              fontFamily: "Work Sans",
              fontSize: "35px",
              fontWeight: 700,
              lineHeight: "37px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#ffffff",
            }}
          >
            Based on our findings, here's what sales teams want from their CRM
          </Typography>
          <Stack
            position={"absolute"}
            bottom={"100px"}
            width={"92%"}
            height={"465px"}
            // border={"1px solid red"}
            right={"20px"}
            borderRadius={"10px"}
            backgroundColor={"#ffffff"}
            boxShadow={"2.5px 3.7px 14.7px 0px #00000040"}
          >
            {/* <Stack
              position={"absolute"}
              sx={{
                fontFamily: "Xanh Mono",
                fontSize: "207px",
                fontWeight: 400,
                lineHeight: "277px",
                letterSpacing: "-0.05em",
                textAlign: "left",
                color: "#248F41",
              }}
            >
              "
            </Stack> */}
            <Stack width={"95%"} margin={"50px auto 10px"}>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "34px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  paddingTop: "30px",
                }}
              >
                {slicedContent}
              </Typography>
              <Stack
                margin={"90px auto 30px"}
                sx={{
                  width: "115px",
                  height: "4px",
                  top: "4725px",
                  left: "696px",
                  borderRadius: "7.47px",
                  opacity: 0.8,
                  backgroundColor: "#000000",
                }}
              ></Stack>
              <Stack
                margin={"-10px auto 10px"}
                alignItems={"center"}
                direction={"row"}
                justifyContent={"space-between"}
                width={"70%"}
              >
                <Stack direction={"row"}>
                  <Image
                    style={{
                      width: "45px",
                      height: "45px",
                      padding: "10px",
                      borderRadius: "51px",
                      gap: "10px",
                      opacity: 0.8,
                      "&:hover": {
                        opacity: 1,
                        cursor: "pointer",
                      },
                    }}
                    src={leftArrow}
                    onClick={handlePreviousReview}
                  />
                </Stack>
                <Stack>
                  <Stack
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "28px",
                      fontWeight: 700,
                      lineHeight: "38px",
                      letterSpacing: "0em",
                      textAlign: "center",
                    }}
                  >
                    {review.name}
                  </Stack>
                  <Stack
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "19px",
                      fontWeight: 500,
                      lineHeight: "25px",
                      letterSpacing: "0em",
                      textAlign: "center",
                    }}
                  >
                    {review.position}
                  </Stack>
                </Stack>

                <Stack>
                  <Image
                    style={{
                      width: "45px",
                      height: "45px",
                      padding: "10px",
                      borderRadius: "51px",
                      gap: "10px",
                      opacity: 0.8,
                      "&:hover": {
                        opacity: 1,
                        cursor: "pointer",
                      },
                    }}
                    alt="rightArrow"
                    src={rightArrow}
                    onClick={handleNextReview}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        display={{
          xs: "flex",
          lg: "none",
        }}
        width={"100%"}
        height={"600px"}
        margin={"0px auto"}
        position={"relative"}
      >
        <Stack
          width={{
            xs: "95%",
            sm: "90%",
          }}
          height={"80%"}
          borderRadius={"10px"}
          sx={{
            backgroundColor: "#34A853",
          }}
        >
          <Typography
            sx={{
              padding: "10px 10px",
              fontFamily: "Work Sans",
              fontSize: {
                xs: "18px",
                sm: "22px",
                md: "27px",
                lg: "34px",
              },
              fontWeight: 700,
              lineHeight: "37px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#ffffff",
            }}
          >
            Based on our findings, here's what sales teams want from their CRM
          </Typography>
          <Stack
            position={"absolute"}
            bottom={{
              xs: "1%",
              sm: "1%",
              smm: "5%",
              md: "10%",
            }}
            width={"90%"}
            height={{
              xs: "80%",
              sm: "80%",
              smm: "70%",
              md: "65%",
              lg: "50%",
            }}
            // border={"1px solid red"}
            right={"17px"}
            borderRadius={"10px"}
            backgroundColor={"#ffffff"}
            boxShadow={"2.5px 3.7px 14.7px 0px #00000040"}
          >
            <Stack
              display={{
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
              }}
              position={"absolute"}
              sx={{
                fontFamily: "Xanh Mono",
                fontSize: {
                  xs: "100px",
                  sm: "150px",
                  md: "200px",
                  lg: "250px",
                },
                fontWeight: 400,
                lineHeight: "277px",
                letterSpacing: "-0.05em",
                textAlign: "left",
                color: "#248F41",
              }}
            >
              "
            </Stack>

            <Stack
              width={"80%"}
              height={"100%"}
              margin={"0 auto"}
              justifyContent={"space-between"}
              mb={3}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "12px",
                    sm: "15px",
                    md: "18px",
                    lg: "25px",
                  },

                  fontWeight: 500,
                  lineHeight: "34px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  paddingTop: {
                    xs: "10px",
                    sm: "8px",
                    smm: "20px",
                    md: "30px",
                    lg: "40px",
                  },
                }}
              >
                {slicedContent}...
              </Typography>
              <Stack
                margin={{
                  xs: "0px auto 15px",
                  lg: "90px auto 30px",
                }}
                sx={{
                  width: "20%",
                  height: "4px",
                  borderRadius: "7.47px",
                  opacity: 0.8,
                  backgroundColor: "#000000",
                }}
              ></Stack>
              <Stack
                margin={"0 auto"}
                alignItems={"center"}
                direction={"row"}
                justifyContent={"space-between"}
                width={{
                  xs: "100%",
                  sm: "95%",
                  md: "80%",
                  lg: "40%",
                }}
              >
                <Stack direction={"row"}>
                  <Box
                    component="img"
                    sx={{
                      width: "28px",
                      height: "28px",
                      padding: "10px",
                      borderRadius: "51px",
                      gap: "10px",
                      opacity: 0.8,
                      "&:hover": {
                        opacity: 1,
                        cursor: "pointer",
                      },
                    }}
                    src={leftArrow}
                    onClick={handlePreviousReview}
                  />
                </Stack>
                <Stack>
                  {" "}
                  <Stack
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                        lg: "25px",
                      },
                      fontWeight: 700,
                      lineHeight: "38px",
                      letterSpacing: "0em",
                      textAlign: "center",
                    }}
                  >
                    Soya Somanathan
                  </Stack>
                  <Stack
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px",
                        lg: "22px",
                      },
                      fontWeight: 500,
                      lineHeight: "25px",
                      letterSpacing: "0em",
                      textAlign: "center",
                    }}
                  >
                    Account Manager, Ayan Tech Solutions
                  </Stack>
                </Stack>

                <Stack>
                  {" "}
                  <Box
                    component="img"
                    sx={{
                      width: "28px",
                      height: "28px",
                      padding: "10px",
                      borderRadius: "51px",
                      gap: "10px",
                      opacity: 0.8,
                      "&:hover": {
                        opacity: 1,
                        cursor: "pointer",
                      },
                    }}
                    alt="rightArrow"
                    src={rightArrow}
                    onClick={handleNextReview}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Industry4;
