import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import lo from "../assets/lo.svg";
import Link from "next/link";

import { Rating } from "react-simple-star-rating";
import Image from "next/image";
const CaseStudyForm3 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    phone: "",
    email: "",
    industry: "",
    companyIndustry: "",
    crmEdition: "",
    other: "",
  });

  // Update form data state as the user interacts with inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Log form data to the console
    // Add further logic here to submit the data
  };

  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (event) => {
    const text = event.target.value;
    // Split the text by spaces to count words
    const words = text.trim().split(/\s+/);
    // Set the word count
    setWordCount(words.length);
  };

  return (
    <Stack width={"100%"}>
      <form onSubmit={handleSubmit}>
        <Stack>
          <Stack
            marginTop={"40px"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image width={"170px"} height={"40px"} src={lo} alt="logo" />
            <Typography
              width={"90%"}
              m={"0 auto"}
              sx={{
                fontFamily: "Work Sans",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "26px",
                letterSpacing: "0em",
                textAlign: "center",
                marginTop: "20px",
                opacity: 0.6,
              }}
            >
              ZOHO CRM IMPLEMENTATION & EXPERIENCE
            </Typography>
          </Stack>
          <Stack
            width={{
              xs: "95%",
              sm: "90%",
              md: "75%",
            }}
            margin={"0px auto"}
          >
            <hr
              style={{
                width: "100%",
                marginTop: "40px",
                border: "0.5px solid gray",
                backgroundColor: "gray",
              }}
            />

            <Stack gap={2} mt={2}>
              <Stack
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "20px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                <label htmlFor="timeperiod">
                  How long did it take to implement Zoho CRM for your business?*
                </label>
                <Stack
                  width={{
                    xs: "275px",
                    sm: "310px",
                    md: "330px",
                  }}
                  height={{
                    xs: "45px",
                    sm: "55px",
                    md: "60px",
                  }}
                >
                  <input
                    type="text"
                    name="timeperiod"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={{
                      height: "100%",
                      width: "100%",
                      marginTop: "5px",
                      border: "1px solid #C4C4C4",
                      paddingLeft: "20px",
                      fontSize: "18px",
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <hr
              style={{
                width: "100%",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />
            <Stack gap={2} mt={2}>
              <Stack
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "20px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                <label htmlFor="priorInfo">
                  Did you use any CRM software prior to Zoho? Please specify
                  which one.*
                </label>
                <Stack
                  width={{
                    xs: "275px",
                    sm: "310px",
                    md: "330px",
                  }}
                  height={{
                    xs: "45px",
                    sm: "55px",
                    md: "60px",
                  }}
                >
                  <input
                    type="text"
                    name="priorInfo"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={{
                      height: "100%",
                      width: "100%",
                      marginTop: "5px",
                      border: "1px solid #C4C4C4",
                      paddingLeft: "20px",
                      fontSize: "18px",
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <hr
              style={{
                width: "100%",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />
            <Stack gap={2} mt={2}>
              <Stack
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "20px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                <label htmlFor="rating">
                  How would you rate your Zoho CRM experience?
                </label>
                <Stack
                  direction={{
                    xs: "column",
                    sm: "column",
                    md: "row",
                  }}
                  flexWrap={"wrap"}
                  fontFamily={"Work Sans"}
                >
                  <Stack
                    direction={{
                      xs: "column",
                      sm: "row",
                      md: "row",
                    }}
                    alignItems={"center"}
                    gap={2}
                    width={{
                      xs: "95%",
                      sm: "90%",
                      md: "50%",
                    }}
                    fontFamily={"Work Sans"}
                    p={"10px 0px"}
                  >
                    <Typography
                      fontFamily={"Work Sans"}
                      width={{
                        xs: "95%",
                        md: "30%",
                      }}
                    >
                      Ease of use
                    </Typography>
                    <Rating
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      onPointerMove={onPointerMove}
                    />
                  </Stack>
                  <Stack
                    direction={{
                      xs: "column",
                      sm: "row",
                      md: "row",
                    }}
                    alignItems={"center"}
                    gap={2}
                    width={{
                      xs: "95%",
                      sm: "90%",
                      md: "50%",
                    }}
                    fontFamily={"Work Sans"}
                    p={"10px 0px"}
                  >
                    <Typography
                      fontFamily={"Work Sans"}
                      width={{
                        xs: "95%",
                        md: "30%",
                      }}
                    >
                      Customer Service
                    </Typography>
                    <Rating
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      onPointerMove={onPointerMove}
                    />
                  </Stack>
                  <Stack
                    direction={{
                      xs: "column",
                      sm: "row",
                      md: "row",
                    }}
                    alignItems={"center"}
                    gap={2}
                    width={{
                      xs: "95%",
                      sm: "90%",
                      md: "50%",
                    }}
                    fontFamily={"Work Sans"}
                    p={"10px 0px"}
                  >
                    <Typography
                      fontFamily={"Work Sans"}
                      width={{
                        xs: "95%",
                        md: "30%",
                      }}
                    >
                      Pricing
                    </Typography>
                    <Rating
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      onPointerMove={onPointerMove}
                    />
                  </Stack>
                  <Stack
                    direction={{
                      xs: "column",
                      sm: "row",
                      md: "row",
                    }}
                    alignItems={"center"}
                    gap={2}
                    width={{
                      xs: "95%",
                      sm: "90%",
                      md: "50%",
                    }}
                    fontFamily={"Work Sans"}
                    p={"10px 0px"}
                  >
                    <Typography
                      fontFamily={"Work Sans"}
                      width={{
                        xs: "95%",
                        md: "30%",
                      }}
                    >
                      Speed
                    </Typography>
                    <Rating
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      onPointerMove={onPointerMove}
                    />
                  </Stack>
                  <Stack
                    direction={{
                      xs: "column",
                      sm: "row",
                      md: "row",
                    }}
                    alignItems={"center"}
                    gap={2}
                    width={{
                      xs: "95%",
                      sm: "90%",
                      md: "50%",
                    }}
                    fontFamily={"Work Sans"}
                    p={"10px 0px"}
                  >
                    <Typography
                      fontFamily={"Work Sans"}
                      width={{
                        xs: "95%",
                        md: "30%",
                      }}
                    >
                      Features & Functionality
                    </Typography>
                    <Rating
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      onPointerMove={onPointerMove}
                    />
                  </Stack>
                  <Stack
                    direction={{
                      xs: "column",
                      sm: "row",
                      md: "row",
                    }}
                    alignItems={"center"}
                    gap={2}
                    width={{
                      xs: "95%",
                      sm: "90%",
                      md: "50%",
                    }}
                    fontFamily={"Work Sans"}
                    p={"10px 0px"}
                  >
                    <Typography
                      fontFamily={"Work Sans"}
                      width={{
                        xs: "95%",
                        md: "30%",
                      }}
                    >
                      Onboarding & Implementation
                    </Typography>
                    <Rating
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      onPointerMove={onPointerMove}
                    />
                  </Stack>
                  <Stack
                    direction={{
                      xs: "column",
                      sm: "row",
                      md: "row",
                    }}
                    alignItems={"center"}
                    gap={2}
                    width={{
                      xs: "95%",
                      sm: "90%",
                      md: "50%",
                    }}
                    fontFamily={"Work Sans"}
                    p={"10px 0px"}
                  >
                    <Typography
                      fontFamily={"Work Sans"}
                      width={{
                        xs: "95%",
                        md: "30%",
                      }}
                    >
                      Buying Experience
                    </Typography>
                    <Rating
                      size={40}
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      onPointerMove={onPointerMove}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <hr
              style={{
                width: "100%",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />
            <Stack gap={2} mt={2}>
              <Stack
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "20px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                <label htmlFor="rating" id="feedback" name="feedback">
                  How would you rate your Zoho CRM experience?
                </label>
                <Stack
                  width={{
                    xs: "90%",
                    md: "60%",
                  }}
                >
                  <textarea
                    name="feedback"
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      height: "150px",
                      border: "1px solid #C4C4C4",
                      paddingLeft: "20px",
                      fontSize: "13px",
                    }}
                  />
                  <Typography textAlign={"right"}>
                    {wordCount} / 5000
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <hr
              style={{
                width: "100%",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />

            <Stack gap={2} mt={2}>
              <Stack
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "20px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                <Stack gap={2}>
                  <label htmlFor="contactYou">
                    How would you rate your Zoho CRM experience?
                  </label>
                  <Stack direction="row" gap={2} pt={2}>
                    <input
                      type="radio"
                      id="yes"
                      name="contactYou"
                      value="yes"
                      onChange={handleChange}
                    />
                    <Typography>
                      <label htmlFor="yes">Yes</label>
                    </Typography>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <input
                      type="radio"
                      id="no"
                      name="contactYou"
                      value="no"
                      onChange={handleChange}
                    />
                    <Typography>
                      <label htmlFor="no">No</label>
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default CaseStudyForm3;
