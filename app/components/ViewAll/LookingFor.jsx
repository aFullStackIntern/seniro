import { Stack, IconButton, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import PhoneNumberInput from "../Home/parts/nm";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CitySelector from "../Home/parts/Cityselctor";
import Button from "../utils/Button";
import Google from "../assets/google.png";
import lo from "../assets/lo.svg";
import LinkedIn from "../assets/linkedIn.png";
import dottedbg from "../assets/dottedbg.svg";
import ImageSignup from "../assets/ImageSignUp.png";
import contactIcon from "../assets/contactIcon.svg";
import Emailicon from "../assets/EmailIcon.svg";
import Link from "next/link";

import Nav from "../Navbar/Nav";
import Image from "next/image";

const Signup = () => {
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
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Form submitted!");
  };
  return (
    <>
      <Nav />
      <Stack maxWidth={"1440px"} m={"0 auto"}>
        <Stack
          direction={{
            xs: "column",
            md: "column",

            lg: "row",
          }}
        >
          <Stack
            m={"0 auto"}
            alignItems={"center"}
            width={{
              xs: "95%",
              sm: "95%",
              md: "50%",
              lg: "40%",
            }}
            gap={3}
            sx={{
              backgroundImage: `url(${dottedbg.src})`,
              backgroundSize: "auto",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Stack
              justifyContent={"center"}
              width={{
                xs: "20%",
                md: "30%",
                lg: "145px",
              }}
              height={"145px"}
            >
              <Image src={ImageSignup} alt="" />
            </Stack>
            <Typography
              width={{
                xs: "90%",
                sm: "80%",
                md: "70%",
                lg: "70%",
              }}
              fontSize={{
                xs: "12px",
                sm: "14px",
                md: "16px",
                lg: "18px",
              }}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              "The ease and simplicity of the program and the way that the Zoho
              Team have continued to develop solutions around and integrated
              with the CRM. “
            </Typography>
            <Stack textAlign={"end"} width={"69%"}>
              <Typography
                color={"#F15B25"}
                fontSize={{
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                }}
                textAlign={"end"}
                f
                fontWeight={"bold"}
              >
                CHRIS SAVOCA
              </Typography>
              <Typography
                color={"#141414"}
                fontSize={{
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                }}
                pb={2}
              >
                Executive Officer, Travelhost Network
              </Typography>
            </Stack>
          </Stack>
          <Stack
            mr={3}
            gap={2}
            sx={{
              width: {
                xs: "100%",
                lg: "60%",
              },
              padding: {
                xs: "20px 0px",
                lg: "20px 0px",
                xl: "40px 0px",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "22px",
                  md: "28px",

                  xl: "38px",
                },
                textAlign: {
                  xs: "center",
                },
              }}
              // color={"white"}
              fontWeight={"bold"}
              fontSize={"22px"}
              textAlign={"center"}
              fontFamily={"Work Sans"}
            >
              Get a Price Quote for CRM Training
            </Typography>
            <Typography
              width={"80%"}
              margin={"0 auto"}
              textAlign={"center"}
              fontFamily={"Work Sans"}
            >
              Thank you for your interest in Saniiro CRM Training. Please fill
              the below form to get your personalized price quote.
            </Typography>
            <Stack
              width={{
                xs: "95%",
                sm: "90%",
                md: "100%",
              }}
              margin={"0px auto"}
            >
              <form onSubmit={handleSubmit}>
                <hr
                  style={{
                    width: "90%",
                    border: "0.5px dashed gray",
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
                            sm: "270px",
                            md: "285px",
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
                            sm: "270px",
                            md: "285px",
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
                            sm: "270px",
                            md: "285px",
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
                            sm: "270px",
                            md: "285px",
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
                        <label htmlFor="industry">Industry</label>
                        <Stack
                          width={{
                            xs: "275px",
                            sm: "270px",
                            md: "285px",
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
                        <label htmlFor="email">Email*</label>
                        <Stack
                          width={{
                            xs: "275px",
                            sm: "270px",
                            md: "285px",
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
                      width: "90%",
                      marginTop: "40px",
                      borderTop: "1px dashed gray",
                    }}
                  />
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
                        <label htmlFor="industry">Course</label>
                        <Stack
                          width={{
                            xs: "275px",
                            sm: "270px",
                            md: "285px",
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
                        <label htmlFor="email">Number of Seats</label>
                        <Stack
                          width={{
                            xs: "275px",
                            sm: "270px",
                            md: "285px",
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
                        <label htmlFor="phone">Total Fee</label>
                        <Stack
                          width={{
                            xs: "275px",
                            sm: "270px",
                            md: "285px",
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
                        <label htmlFor="email">Training Fee</label>
                        <Stack
                          width={{
                            xs: "275px",
                            sm: "270px",
                            md: "285px",
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
                      width: "90%",
                      marginTop: "40px",
                      borderTop: "1px dashed gray",
                    }}
                  />
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
                        <label htmlFor="industry">Country*</label>
                        <Stack
                          width={{
                            xs: "275px",
                            sm: "270px",
                            md: "285px",
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
                        <label htmlFor="industry">State*</label>
                        <Stack
                          width={{
                            xs: "275px",
                            sm: "270px",
                            md: "285px",
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
                        <label htmlFor="phone">Address</label>
                        <Stack
                          width={{
                            xs: "275px",
                            sm: "270px",
                            md: "285px",
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
                        <label htmlFor="industry">City</label>
                        <Stack
                          width={{
                            xs: "275px",
                            sm: "270px",
                            md: "285px",
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
                        <label htmlFor="phone">Desired ETA</label>
                        <Stack
                          width={{
                            xs: "275px",
                            sm: "270px",
                            md: "285px",
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
                        <label htmlFor="email">Pin Code</label>
                        <Stack
                          width={{
                            xs: "275px",
                            sm: "270px",
                            md: "285px",
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
                </Stack>
                <Stack width={"90%"} margin={"20px auto"}>
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
                    <label htmlFor="email">
                      State details about your requirements
                    </label>
                    <Stack width={"90%"} height={"200px"}>
                      <textarea
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
                <Stack alignItems={"center"}>
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
                    The information collected through this survey will be used
                    in accordance with our Privacy Policy
                  </Typography>
                </Stack>
                <Stack
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={3}
                  direction={"row"}
                >
                  <Link
                    href="/CaseStudyForm2"
                    onClick={() => window.scrollTo(0, 0)}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      type="submit"
                      style={{
                        width: "140px",
                        height: "40px",
                        backgroundColor: "#F15B25",

                        borderRadius: "0px",
                        alignSelf: "center",
                      }}
                    >
                      <Typography color={"white"}>SUBMIT</Typography>
                    </Button>
                  </Link>
                  <Link
                    href="/CaseStudyForm2"
                    onClick={() => window.scrollTo(0, 0)}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      type="submit"
                      style={{
                        width: "140px",
                        height: "40px",
                        backgroundColor: "#052973",
                        borderRadius: "0px",
                        alignSelf: "center",
                      }}
                    >
                      <Typography color={"white"}>RESET</Typography>
                    </Button>
                  </Link>
                </Stack>
              </form>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Signup;
