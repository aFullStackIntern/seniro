import { Stack, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
// import ContactCTA from "../../assets/ContactCTA.svg";
import Button from "../../utils/Button";
import Nav from "../../Navbar/Nav";
import "./contact.css";
import PhoneNumber from "./PhoneNumber";
import Link from "next/link";

import NavLight from "../../Navbar/NavLight";
import axios from "axios";
import PhoneNumberInput from "../../Home/parts/nm";
const ContactUs = () => {
  // const [isChecked, setChecked] = useState(false);

  // const handleCheckboxChange = () => {
  //   setChecked(!isChecked);
  // };

  // const handleSubmit = () => {
  //   console.log("Form submitted!");
  // };
  const [formData, setFormData] = useState({
    Name: "",
    OrganizationName: "", // Default value, change if needed
    PhoneCode: "",
    PhoneNumber: "",
    Email: "",
    Message: "",
  });
  const [errors, setErrors] = useState({});
  const [checkboxError, setCheckboxError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalError, setModalError] = useState("");
  const validateForm = () => {
    let tempErrors = {};
    tempErrors.Name =
      formData.Name.length > 2 ? "" : "Name must be at least 3 characters";
    tempErrors.Email = /^\S+@\S+\.\S+$/.test(formData.Email)
      ? ""
      : "Email is not valid";
    tempErrors.OrganizationName =
      formData.OrganizationName.length > 0
        ? ""
        : "Organization Name is required";
    tempErrors.PhoneNumber =
      formData.PhoneNumber.length > 0 ? "" : "Phone number is required";
    tempErrors.Message =
      formData.Message.length > 0 ? "" : "Message is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };
  const [isChecked, setChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear errors for the field being changed
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
    // Additionally, if there's a specific error for the checkbox that needs to be cleared when other fields are updated
    if (name !== "checkbox" && checkboxError) {
      setCheckboxError("");
    }
  };
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    setCheckboxError(
      !isChecked
        ? ""
        : "You must agree to the Terms of Service and Privacy Policy"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // Directly showing errors next to fields, so do nothing additional here
      return;
    }
    // if (!isChecked) {
    //   setCheckboxError(
    //     "You must agree to the Terms of Service and Privacy Policy"
    //   );
    //   return; // Do not open modal, just show error
    // }
    try {
      const response = await axios.post(
        "http://dev.saniiro.net/api/v1/request/contact",
        formData
      );
      if (response.data.Code === 1000) {
        setModalMessage(
          "Thank you for your submission! Our team will call ypu shortly."
        );
        setModalVisible(true); // Only show modal on success
        // Clear form fields
        setFormData({
          Name: "",
          Email: "",
          PhoneCode: "",
          PhoneNumber: "",
          Message: "",
          OrganizationName: "",
        });
        setChecked(false);
      }
      console.log("response", response);
    } catch (error) {
      console.error("Error during API call:", error);
      // Handle API errors without modal
      setModalError("An error occurred during submission.");
    }
  };

  return (
    <Stack
      height={{ xl: "930px", xs: "auto" }}
      position={"relative"}
      bgcolor={"#052973"}
      className="textured-background"
    >
      <NavLight />
      <Stack
        maxWidth={"1536px"}
        zIndex={11}
        sx={{
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          // width: "100%",
          margin: {
            xs: "0 auto",
            sm: "20px auto",
          },
        }}
      >
        <Stack
          gap={"10px"}
          sx={{
            width: {
              xs: "100%",
              lg: "40%",
              xl: "54%",
              xxl: "50%",
            },
            margin: {
              lg: "40px auto",
              xl: "84px 37px",
            },
            padding: {
              xs: "10px 0",
            },
          }}
        >
          <Typography
            textTransform={"uppercase"}
            fontFamily={"monospace"}
            sx={{
              wordSpacing: { xl: "-27px" },
              fontSize: {
                xs: "39px",
                sm: "39px",
                md: "68px",
                lg: "63px",
                xl: "97px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
            fontWeight={"bold"}
            color={"transparent"}
            lineHeight={0.9}
            letterSpacing={"0.1em"}
            className="text-stroke"
          >
            Looking For
          </Typography>
          <Typography
            color={"white"}
            textTransform={"uppercase"}
            sx={{
              fontSize: {
                xs: "38px",
                sm: "37px",
                md: "68px",
                lg: "63px",
                xl: "87px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
            fontWeight={900}
            lineHeight={0.9}
            letterSpacing={"0.05em"}
          >
            something in particular?
          </Typography>

          <Typography
            fontFamily={"Work Sans"}
            // color={"white"}
            color={"white"}
            sx={{
              width: {
                xs: "90%",
                sm: "80%",
                lg: "90%",
              },
              margin: {
                xs: "0px auto 0px",
                lg: "5px 5px",
              },

              fontSize: {
                xs: "14px",
                lg: "18px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
          >
            We're here to help.
          </Typography>
        </Stack>
        <Stack
          gap={2}
          sx={{
            width: {
              xs: "100%",
              lg: "50%",
              xl: "50%",
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
            color={"white"}
            // color={"white"}
            fontWeight={"bold"}
            fontSize={"22px"}
            textAlign={"center"}
            fontFamily={"Work Sans"}
          >
            Get started with your free trial
          </Typography>
          <Stack
            alignItems={"center"}
            gap={2}
            margin={"0 auto"}
            sx={{
              width: {
                xs: "80%",
                md: "70%",
                lg: "100%",
                xl: "100%",
              },
            }}
          >
            <Stack
              style={{ position: "relative" }}
              sx={{
                width: {
                  xs: "220px",
                  sm: "300px",
                  md: "480px",
                  lg: "385px",
                  xl: "480px",
                },
                height: {
                  xs: "45px",
                  sm: "55px",
                  md: "67px",
                  lg: "57px",
                  xl: "67px",
                },
              }}
            >
              <input
                style={{
                  fontFamily: "Work Sans",
                  width: "94%",
                  height: "100%",
                  border: "1px solid #AAAAAA",
                  color: "#AAAAAA",
                  paddingLeft: "5%",
                  fontSize: "20px",
                }}
                type="text"
                name="Name"
                placeholder="Full Name"
                value={formData.Name}
                onChange={handleInputChange}
              />
              {errors.Name && (
                <Typography color="error">{errors.Name}</Typography>
              )}
            </Stack>
            <Stack
              style={{ position: "relative" }}
              sx={{
                width: {
                  xs: "220px",
                  sm: "300px",
                  md: "480px",
                  lg: "385px",
                  xl: "480px",
                },
                height: {
                  xs: "45px",
                  sm: "55px",
                  md: "67px",
                  lg: "57px",
                  xl: "67px",
                },
              }}
            >
              <input
                type="email"
                name="Email"
                placeholder="Work Email"
                value={formData.Email}
                onChange={handleInputChange}
                style={{
                  fontFamily: "Work Sans",
                  width: "94%",
                  height: "100%",
                  border: "1px solid #AAAAAA",
                  color: "#AAAAAA",
                  paddingLeft: "5%",
                  fontSize: "20px",
                }}
              />
              {errors.Email && (
                <Typography color="error">{errors.Email}</Typography>
              )}
            </Stack>
            <Stack
              style={{ position: "relative" }}
              sx={{
                width: {
                  xs: "220px",
                  sm: "300px",
                  md: "480px",
                  lg: "385px",
                  xl: "480px",
                },
                height: {
                  xs: "45px",
                  sm: "55px",
                  md: "67px",
                  lg: "57px",
                  xl: "67px",
                },
              }}
            >
              <input
                type="text"
                name="OrganizationName"
                placeholder="Organisation Name"
                value={formData.OrganizationName}
                onChange={handleInputChange}
                style={{
                  fontFamily: "Work Sans",
                  width: "94%",
                  height: "100%",
                  border: "1px solid #AAAAAA",
                  color: "#AAAAAA",
                  paddingLeft: "5%",
                  fontSize: "20px",
                }}
              />
              {errors.OrganizationName && (
                <Typography color="error">{errors.OrganizationName}</Typography>
              )}
            </Stack>
            {/* <Stack
            style={{ position: "relative" }}
            sx={{
              width: {
                xs: "220px",
                sm: "300px",
                md: "480px",
                lg: "385px",
                xl: "480px",
              },
              height: {
                xs: "45px",
                sm: "55px",
                md: "67px",
                lg: "57px",
                xl: "67px",
              },
            }}
          >
            <input
              name="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              className="input-new"
              style={{
                fontFamily: "Work Sans",
                width: "94%",
                height: "100%",
                border: "1px solid #AAAAAA",
                color: "#AAAAAA",
                paddingLeft: "5%",
                fontSize: "20px",
              }}
            />
            <IconButton
              style={{
                position: "absolute",
                top: "50%",
                right: "8px",
                transform: "translateY(-50%)",
                color: "#AAAAAA",
                fontSize: "50px",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </Stack> */}
            <Stack
              style={{ position: "relative" }}
              sx={{
                width: {
                  xs: "280px",
                  sm: "380px",
                  md: "480px",
                },
                height: {
                  xs: "45px",
                  sm: "55px",
                  md: "67px",
                },
              }}
            >
              <PhoneNumberInput
                errors={errors}
                formData={formData}
                setFormData={setFormData}
                handleInputChange={handleInputChange}
              />
            </Stack>
            <Stack
              style={{ position: "relative" }}
              sx={{
                width: {
                  xs: "220px",
                  sm: "300px",
                  md: "480px",
                  lg: "385px",
                  xl: "480px",
                },
                height: {
                  xs: "45px",
                  sm: "55px",
                  md: "67px",
                  lg: "57px",
                  xl: "auto", // Adjusted for textarea
                },
              }}
            >
              <textarea
                name="Message"
                placeholder="Your message (max 50 characters)"
                value={formData.Message}
                onChange={handleInputChange}
                maxLength="50"
                style={{
                  fontFamily: "Work Sans",
                  width: "94%",
                  height: "100px", // Set a fixed height for the textarea
                  border: "1px solid #AAAAAA",
                  color: "#AAAAAA",
                  paddingLeft: "5%",
                  fontSize: "20px",
                }}
              />
              {errors.Message && (
                <Typography color="error">{errors.Message}</Typography>
              )}
            </Stack>
            <Stack
              gap={2}
              sx={{
                alignItems: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              {/* <Stack>
                <Stack
                  direction={"row"}
                  gap={1}
                  sx={{ textAlign: { xs: "left", lg: "left" } }}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <Typography
                    fontFamily={"Work Sans"}
                    fontSize={"13px"}
                    color={"white"}
                  >
                    I agree to the Terms of Service and Privacy Policy.
                  </Typography>
                </Stack>
                {checkboxError && (
                  <Typography
                    color="error"
                    sx={{ fontSize: "14px", marginLeft: "20px" }}
                  >
                    {checkboxError}
                  </Typography>
                )}
              </Stack> */}
              <Button
                type="button"
                fontFamily={"Work Sans"}
                sx={{
                  width: {
                    xs: "220px",
                    sm: "300px",
                    md: "480px",
                    lg: "385px",
                    xl: "480px",
                  },
                  height: {
                    xs: "45px",
                    sm: "55px",
                    md: "67px",
                    lg: "57px",
                    xl: "67px",
                  },
                  color: "white",
                  fontSize: {
                    xs: "16px",
                    sm: "19px",
                    md: "22px",
                  },
                  // border: "1px solid #F15B25",
                  bgcolor: "#F15B25",
                  // bgcolor: "#F15B25",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "transparent",
                    // border: "1px solid #F15B25",
                    border: "1px solid #052973",
                    // color: "white",
                    color: "white",
                  },
                }}
                onClick={handleSubmit}
              >
                Get Started
              </Button>
              {modalVisible && (
                <div className="modalBackground">
                  <Stack>
                    <div className="modalContainer">
                      <div className="titleCloseBtn">
                        <button onClick={() => setModalVisible(false)}>
                          X
                        </button>
                      </div>
                      <Stack p={{ lg: "20px 40px 40px 40px", xs: "10px 20px" }}>
                        <>
                          {modalMessage && (
                            <Typography fontSize={"30px"} color="green">
                              {modalMessage}
                            </Typography>
                          )}
                          {modalError && (
                            <Typography fontSize={"15px"} color="red">
                              {modalError}
                            </Typography>
                          )}
                        </>
                      </Stack>
                    </div>
                  </Stack>
                </div>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactUs;
