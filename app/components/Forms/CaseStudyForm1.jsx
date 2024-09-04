import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import lo from "../assets/lo.svg";
import Link from "next/link";

import { Rating } from "react-simple-star-rating";
import Image from "next/image";

const CaseStudyForm1 = () => {
  // Update form data state as the user interacts with inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [rating, setRating] = useState(0);
  const [currentPart, setCurrentPart] = useState(1);

  const handleNext = () => {
    window.scrollTo(0, 0);
    setCurrentPart(currentPart + 1);
  };
  const handlePrevious = () => {
    window.scrollTo(0, 0);
    setCurrentPart(currentPart - 1);
  };

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

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Log form data to the console
    // Add further logic here to submit the data
  };

  return (
    <Stack width={"100%"}>
      <form onSubmit={handleSubmit}>
        {/* Form part 1 */}
        {currentPart === 1 && (
          <Stack>
            <Stack
              marginTop={"40px"}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image width={"170px"} height={"40px"} src={lo} alt="logo" />
              <Typography
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
                Customer Story Form
              </Typography>
            </Stack>
            <Stack
              width={{
                xs: "95%",
                sm: "90%",
                md: "750px",
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
              <Typography
                width={"100%"}
                margin={"0px auto"}
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  marginTop: "15px",
                  marginBottom: "15px",
                  opacity: 0.6,
                }}
              >
                We're thrilled you are submitting your story! Just fill out the
                form below. Most questions are multiple choice and it will take
                only ten minutes. We'll get in touch with you soon. Thanks!
              </Typography>
              <hr
                style={{
                  width: "100%",
                  border: "0.5px solid gray",
                  backgroundColor: "gray",
                }}
              />
              <Stack>
                <Stack gap={3} width={"95%"}>
                  <Stack
                    direction={{
                      xs: "column",
                      md: "row",
                    }}
                    gap={4}
                    margin={"0px auto"}
                  >
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
                      <label htmlFor="firstName">First Name*</label>
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
                          name="firstName"
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
                      <label htmlFor="company">Company*</label>
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
                          name="company"
                          value={formData.company}
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
                  <Stack
                    direction={{
                      xs: "column",
                      md: "row",
                    }}
                    gap={4}
                    margin={"0px auto"}
                  >
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
                      <label htmlFor="phone">Phone*</label>
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
                          type="number"
                          name="phone"
                          value={formData.phone}
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
                      <label htmlFor="email">Email*</label>
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
                          type="email"
                          name="email"
                          value={formData.email}
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
                </Stack>
                <hr
                  style={{
                    width: "95%",
                    marginTop: "40px",
                    borderTop: "1px dashed gray",
                  }}
                />
                <Stack marginTop={"40px"} gap={3}>
                  <Stack
                    direction={{
                      xs: "column",
                      md: "row",
                    }}
                    gap={2}
                    margin={"0px auto"}
                  >
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
                      <label htmlFor="industry">Industry</label>
                      <Stack
                        width={{
                          xs: "295px",
                          sm: "320px",
                          md: "350px",
                        }}
                        height={{
                          xs: "45px",
                          sm: "55px",
                          md: "60px",
                        }}
                      >
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          style={{
                            marginTop: "5px",
                            width: "100%",
                            height: "100%",
                            border: "1px solid #C4C4C4",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            fontSize: "18px",
                          }}
                        >
                          <option value="select">Select</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                        </select>
                      </Stack>
                    </Stack>
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
                      <label htmlFor="companyIndustry">Company Industry*</label>
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
                          name="companyIndustry"
                          value={formData.companyIndustry}
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
                </Stack>
                <hr
                  style={{
                    width: "100%",
                    marginTop: "40px",
                    borderTop: "1px dashed gray",
                  }}
                />
                <Stack>
                  <Typography>Which CRM edition are you on?</Typography>
                  <Stack direction="column">
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ marginY: "20px" }}
                    >
                      <Stack direction="row" gap={2}>
                        <input
                          type="radio"
                          id="free"
                          name="crmEdition"
                          value="Free"
                          onChange={handleChange}
                        />
                        <Typography>
                          <label htmlFor="free">Free</label>
                        </Typography>
                      </Stack>
                      <Stack direction="row" gap={2}>
                        <input
                          type="radio"
                          id="professional"
                          name="crmEdition"
                          value="Professional"
                          onChange={handleChange}
                        />
                        <Typography>
                          <label htmlFor="professional">Professional</label>
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ marginY: "20px" }}
                    >
                      <Stack direction="row" gap={2}>
                        <input
                          type="radio"
                          id="standard"
                          name="crmEdition"
                          value="Standard"
                          onChange={handleChange}
                        />
                        <Typography>
                          <label htmlFor="standard">Standard</label>
                        </Typography>
                      </Stack>
                      <Stack direction="row" gap={2}>
                        <input
                          type="radio"
                          id="enterprise"
                          name="crmEdition"
                          value="Enterprise"
                          onChange={handleChange}
                        />
                        <Typography>
                          <label htmlFor="enterprise">Enterprise</label>
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack direction="row" gap={2} sx={{ marginY: "20px" }}>
                      <input
                        type="radio"
                        id="crmPlus"
                        name="crmEdition"
                        value="CRM Plus"
                        onChange={handleChange}
                      />
                      <Typography>
                        <label htmlFor="crmPlus">CRM Plus</label>
                      </Typography>
                    </Stack>
                    <Stack direction="row" gap={2} sx={{ marginY: "20px" }}>
                      <input
                        type="radio"
                        id="other"
                        name="crmEdition"
                        value="Others"
                        onChange={handleChange}
                      />
                      <Typography>
                        <label htmlFor="other">Others (Please specify)</label>
                      </Typography>
                    </Stack>
                  </Stack>
                  <textarea
                    style={{
                      width: "230px",
                      height: "80px",
                      marginLeft: "25px",
                      marginTop: "20px",
                      border: "1px solid #C4C4C4",
                      fontSize: "18px",
                      paddingLeft: "10px",
                    }}
                    name="other"
                    value={formData.other}
                    onChange={handleChange}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        )}
        {/* Form part 2  */}
        {currentPart === 2 && (
          <Stack>
            <Stack
              marginTop={"40px"}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image width={"170px"} height={"40px"} src={lo} alt="logo" />
              <Typography
                width={"95%"}
                margin={"0px auto"}
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
                Choose the features you or your team use.
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
                <Typography
                  width={"100%"}
                  fontWeight={500}
                  fontSize={"14px"}
                  lineHeight={"24.5px"}
                  opacity={0.9}
                >
                  What are the customer engagement channels you use?*
                </Typography>
                <Stack
                  direction={{
                    xs: "row",
                  }}
                  justifyContent={"space-between"}
                  fontFamily={"Work Sans"}
                  gap={2}
                >
                  <Stack
                    gap={2}
                    width={{
                      xs: "30%",
                      md: "35%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="email" value="email" />
                      <label for="email">Email</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="salesSignals"
                        value="salesSignals"
                      />
                      <label for="salesSignals">Sales Signals</label>
                    </Stack>
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "30%",
                      md: "30%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="telephony" value="telephony" />
                      <label for="telephony">Telephony</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="socialMedia"
                        value="socialMedia"
                      />
                      <label for="socialMedia">Social Media</label>
                    </Stack>
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "30%",
                      md: "20%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="liveChat" value="liveChat" />
                      <label for="liveChat">Live chat</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="portals" value="portals" />
                      <label for="portals">Portals</label>
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
                <Typography
                  width={"100%"}
                  fontWeight={500}
                  fontSize={"14px"}
                  lineHeight={"24.5px"}
                  opacity={0.9}
                >
                  What are the sales force automation features you use?*
                </Typography>
                <Stack
                  gap={2}
                  direction={{
                    xs: "column",
                    md: "row",
                  }}
                  justifyContent={"space-between"}
                  fontFamily={"Work Sans"}
                >
                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "35%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="leadManagement"
                        value="leadManagement"
                      />
                      <label for="leadManagement">Lead Management</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="accountManagement"
                        value="accountManagement"
                      />
                      <label for="accountManagement">Account Management</label>
                    </Stack>
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "30%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="opportunity"
                        value="opportunity"
                      />
                      <label for="opportunity">
                        Opportunity/Deal Management
                      </label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="forecasting"
                        value="forecasting"
                      />
                      <label for="forecasting">Forecasting</label>
                    </Stack>
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "20%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="contactManagement"
                        value="contactManagement"
                      />
                      <label for="contactManagement">Contact Management</label>
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
                <Typography
                  width={"100%"}
                  fontWeight={500}
                  fontSize={"14px"}
                  lineHeight={"24.5px"}
                  opacity={0.9}
                >
                  What are the automation features you use?*
                </Typography>
                <Stack
                  gap={2}
                  direction={{
                    xs: "column",
                    md: "row",
                  }}
                  justifyContent={"space-between"}
                  fontFamily={"Work Sans"}
                >
                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "35%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="workflows" value="workflows" />
                      <label for="workflows">Workflows</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="macros" value="macros" />
                      <label for="macros">Macros</label>
                    </Stack>
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "30%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="assignmentRules"
                        value="assignmentRules"
                      />
                      <label for="assignmentRules">Assignment rules</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="others" value="others" />
                      <label for="others">Others (Please specify)</label>
                    </Stack>
                    <input
                      for="others"
                      type="text-area"
                      style={{
                        width: "90%",
                        marginLeft: "10%",
                        height: "40px",
                        border: "1px solid #D3D3D3",
                      }}
                    />
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "20%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="blueprint" value="blueprint" />
                      <label for="blueprint">Blueprint</label>
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
                <Typography
                  width={"100%"}
                  fontWeight={500}
                  fontSize={"14px"}
                  lineHeight={"24.5px"}
                  opacity={0.9}
                >
                  What are the lead management tools you use?
                </Typography>
                <Stack
                  gap={2}
                  direction={{
                    xs: "column",
                    md: "row",
                  }}
                  justifyContent={"space-between"}
                  fontFamily={"Work Sans"}
                >
                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "35%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="campaignsModule"
                        value="campaignsModule"
                      />
                      <label for="campaignsModule">Campaigns module</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="zhi" value="zhi" />
                      <label for="zhi">Zoho Campaigns integration</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="others" value="others" />
                      <label for="others">Others (Please specify)</label>
                    </Stack>
                    <input
                      for="others"
                      type="text-area"
                      style={{
                        width: "90%",
                        marginLeft: "10%",
                        height: "40px",
                        border: "1px solid #D3D3D3",
                      }}
                    />
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "30%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="webforms" value="webforms" />
                      <label for="webforms">Webforms</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="socialMedia"
                        value="socialMedia"
                      />
                      <label for="socialMedia">Social Media</label>
                    </Stack>
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "20%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="googleAds" value="googleAds" />
                      <label for="googleAds">Google Ads</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="csa" value="csa" />
                      <label for="csa">Card Scanner App</label>
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
                <Typography
                  width={"100%"}
                  fontWeight={500}
                  fontSize={"14px"}
                  lineHeight={"24.5px"}
                  opacity={0.9}
                >
                  Do you use any of these sales collaboration features?*
                </Typography>
                <Stack
                  gap={2}
                  direction={{
                    xs: "column",
                    md: "row",
                  }}
                  justifyContent={"space-between"}
                  fontFamily={"Work Sans"}
                >
                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "35%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="calendar" value="calendar" />
                      <label for="calendar">Calendar</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="gamescope" value="gamescope" />
                      <label for="gamescope">Gamescope</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="others" value="others" />
                      <label for="others">Others (Please specify)</label>
                    </Stack>
                    <input
                      for="others"
                      type="text-area"
                      style={{
                        width: "90%",
                        marginLeft: "10%",
                        height: "40px",
                        border: "1px solid #D3D3D3",
                      }}
                    />
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "30%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="documentsTab"
                        value="documentsTab"
                      />
                      <label for="documentsTab">Documents Tab</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="aota" value="aota" />
                      <label for="aota">All of the above</label>
                    </Stack>
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "20%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="feeds" value="feeds" />
                      <label for="feeds">Feeds</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="csa" value="csa" />
                      <label for="csa">Card Scanner App</label>
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
                <Typography
                  width={"100%"}
                  fontWeight={500}
                  fontSize={"14px"}
                  lineHeight={"24.5px"}
                  opacity={0.9}
                >
                  What are the customization features you use?*
                </Typography>
                <Stack
                  gap={2}
                  direction={{
                    xs: "column",
                    md: "row",
                  }}
                  justifyContent={"space-between"}
                  fontFamily={"Work Sans"}
                >
                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "35%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="customModules"
                        value="customModules"
                      />
                      <label for="customModules">Custom modules</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="pageLayouts"
                        value="pageLayouts"
                      />
                      <label for="pageLayouts">Page layouts</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="aota" value="aota" />
                      <label for="aota">All of the above</label>
                    </Stack>
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "30%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="customFields"
                        value="customFields"
                      />
                      <label for="customFields">Custom fields</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="conditionalLayout"
                        value="conditionalLayout"
                      />
                      <label for="conditionalLayout">Conditional layout</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="nofa" value="nofa" />
                      <label for="nofa">None of the above</label>
                    </Stack>
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "20%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="customButtons"
                        value="customButtons"
                      />
                      <label for="customButtons">Custom buttons</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="canvas" value="canvas" />
                      <label for="canvas">Canvas</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="others" value="others" />
                      <label for="others">Others (Please specify)</label>
                    </Stack>
                    <input
                      for="others"
                      type="text-area"
                      style={{
                        width: "90%",
                        marginLeft: "10%",
                        height: "40px",
                        border: "1px solid #D3D3D3",
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
                <Typography
                  width={"100%"}
                  fontWeight={500}
                  fontSize={"14px"}
                  lineHeight={"24.5px"}
                  opacity={0.9}
                >
                  What type of CRM reports and dashboards do you use?*
                </Typography>
                <Stack
                  gap={2}
                  direction={{
                    xs: "column",
                    md: "row",
                  }}
                  justifyContent={"space-between"}
                  fontFamily={"Work Sans"}
                >
                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "35%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="StandardReports"
                        value="StandardReports"
                      />
                      <label for="StandardReports">Standard reports</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="standardDashboards"
                        value="standardDashboards"
                      />
                      <label for="standardDashboards">
                        Standard dashboards
                      </label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="nota" value="nota" />
                      <label for="nota">None of the above</label>
                    </Stack>
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "30%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="customReports"
                        value="customReports"
                      />
                      <label for="customReports">Custom reports</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input
                        type="checkbox"
                        id="customDashboards"
                        value="customDashboards"
                      />
                      <label for="customDashboards">Custom dashboards</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="others" value="others" />
                      <label for="others">Others (Please specify)</label>
                    </Stack>
                    <input
                      for="others"
                      type="text-area"
                      style={{
                        width: "90%",
                        marginLeft: "10%",
                        height: "40px",
                        border: "1px solid #D3D3D3",
                      }}
                    />
                  </Stack>

                  <Stack
                    gap={2}
                    width={{
                      xs: "95%",
                      md: "20%",
                    }}
                    margin={{ xs: "0px auto", md: "0px" }}
                  >
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="zar" value="zar" />
                      <label for="zar">Zoho Analytics reports</label>
                    </Stack>
                    <Stack direction={"row"} gap={1}>
                      <input type="checkbox" id="aota" value="aota" />
                      <label for="aota">All of the above</label>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        )}
        {/* Form part 3  */}
        {currentPart === 3 && (
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
                    How long did it take to implement Zoho CRM for your
                    business?*
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
        )}
        {/* submit button  */}
        <Stack>
          <Stack alignItems={"center"} direction={"row"} m={"0 auto"} gap={2}>
            {(currentPart === 2 || currentPart === 3) && (
              <Button
                onClick={handlePrevious}
                style={{
                  width: "140px",
                  height: "40px",
                  backgroundColor: "#052973",
                  marginTop: "40px",
                  borderRadius: "0px",
                  alignSelf: "center",
                }}
              >
                <Typography color={"white"}>PREVIOUS</Typography>
              </Button>
            )}
            <Button
              onClick={handleNext}
              type={currentPart === 4 ? "submit" : "button"} // Move type attribute here
              style={{
                width: "140px",
                height: "40px",
                backgroundColor: "#F15B25",
                marginTop: "40px",
                borderRadius: "0px",
                alignSelf: "center",
              }}
            >
              <Typography color={"white"}>NEXT</Typography>
            </Button>
          </Stack>
          <Stack alignItems={"center"} mb={"40px"}>
            <Typography
              width={"100%"}
              margin={"0px auto"}
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0em",
                textAlign: "center",
                marginTop: "15px",
                marginBottom: "15px",
                opacity: 0.6,
              }}
            >
              The information collected through this survey will be used in
              accordance with our Privacy Policy
            </Typography>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default CaseStudyForm1;
