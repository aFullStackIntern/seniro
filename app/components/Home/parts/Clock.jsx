"use client";

import { Stack, IconButton, Typography, Snackbar, Alert } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import PersonIcon from "@mui/icons-material/Person";
import PhoneNumberInput from "./nm";
import stopWatch from "../../assets/stopWatch.svg";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CitySelector from "./Cityselctor";
import Button from "../../utils/Button";
import Google from "../../assets/google.png";
import LinkedIn from "../../assets/linkedIn.png";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import "./nm.css";
import axios from "axios";
import Link from "next/link";

import { useRouter } from "next/navigation";
import Image from "next/image";

const Clock = () => {
  const router = useRouter();
  const initialState = {
    Name: "",
    UserName: "",
    PhoneCode: "91",
    PhoneNumber: "",
    Email: "",
    CountryId: 123,
    StateId: "",
    Slug: "saniiro-basic-package",
    Otp: "",
    OtpId: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalError, setModalError] = useState("");
  // const [paymentData, setPaymentData] = useState({});
  // const [paymentDataPayu, setPaymentDataPayu] = useState({});

  //  const payLinkPayURef = useRef();
  //  const payLinkRazorpayRef = useRef();
  const validateForm = () => {
    let tempErrors = {};
    tempErrors.Name =
      formData.Name.length > 2 ? "" : "Name must be at least 3 characters";
    tempErrors.Email = /^\S+@\S+\.\S+$/.test(formData.Email)
      ? ""
      : "Email is not valid";
    tempErrors.UserName =
      formData.UserName.length > 0 ? "" : "Username is required";
    if (selectedCountry === 123) {
      // Only validate phone number if the selected country is 123
      tempErrors.PhoneNumber =
        formData.PhoneNumber.length > 0 ? "" : "Phone number is required";
    }
    tempErrors.CountryId =
      formData.CountryId > 0 ? "" : "Please Select Country";
    tempErrors.StateId = formData.StateId > 0 ? "" : "Please Select State";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };
  const [isChecked, setChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "PhoneNumber" && value.length > 10) {
      return; // Stop the state update if phone number exceeds 16 characters
    }
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

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(123);
  const [selectedState, setSelectedState] = useState("");
  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get("http://dev.saniiro.net/api/v1/country");
      setCountries(response.data.Data || []);
    };
    fetchCountries();
  }, []);

  // Fetch states based on the selected country
  useEffect(() => {
    const fetchStates = async () => {
      if (!selectedCountry) return;
      const response = await axios.get("http://dev.saniiro.net/api/v1/state", {
        params: { CountryId: selectedCountry },
      });
      setStates(response.data.Data || []);
    };
    fetchStates();
  }, [selectedCountry]);

  const handleCountryChange = (e) => {
    const newCountryId = Number(e.target.value);
    setSelectedCountry(newCountryId);
    setSelectedState("");
    setFormData((prev) => ({
      ...prev,
      CountryId: newCountryId, // Ensure CountryId is stored as a string
      StateId: "", // Reset state when country changes
      PhoneNumber: newCountryId === 123 ? prev.PhoneNumber : "",
    }));
  };

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    const foundState = states.find((state) => state.Name === newState);
    setFormData((prev) => ({
      ...prev,
      StateId: foundState ? Number(foundState.Id) : 0, // Ensure StateId is stored as a string
    }));
  };
  const sendOTP = async () => {
    if (!validateForm()) return;

    try {
      const response = await axios.get(
        "http://dev.saniiro.net/api/v1/Common/Messaging/otp",
        {
          params: {
            Action: "OTP",
            ApiForId: selectedCountry === 123 ? 2 : 1,
            MobileTo: selectedCountry === 123 ? formData.PhoneNumber : null,
            EmailTo: formData.Email,
            GroupId: 41,
          },
        }
      );
      if (response.data.Status === 1000) {
        setFormData((prev) => ({ ...prev, OtpId: response.data.Data[0].Id }));
        setOtpSent(true);
      } else {
        setModalError("Failed to send OTP");
        setModalVisible(true);
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setModalError("An error occurred during submission.");
      setModalVisible(true);
    }
  };

  const verifyOTP = async () => {
    if (!formData.Otp) {
      setModalError("OTP is required");
      setModalVisible(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://dev.saniiro.net/api/v1/pricing/purchase",
        {
          ...formData,
          CountryId: Number(formData.CountryId),
          StateId: Number(formData.StateId),
          PhoneNumber: selectedCountry === 123 ? formData.PhoneNumber : null,
        }
      );
      if (response.data.Status === 1000) {
        const transactionId = response.data.Data.Txnid;
        router.push(`/thank-you/${transactionId}`);
        localStorage.setItem("validTxnId", transactionId);
      } else {
        setModalError("Failed to verify OTP");
        setModalVisible(true);
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setModalError("An error occurred during submission.");
      setModalVisible(true);
    }
  };
  const resetForm = () => {
    setOtpSent(false);
    setErrors({});
    setFormData((prev) => ({
      ...prev,
      Otp: "", // Reset OTP field to empty
    }));
  };

  return (
    <>
      <Stack alignItems={"center"} p={{ xs: "40px 0", xl: "80px 0" }}>
        <Stack
          padding={{ xl: "20px", xs: "0" }}
          width={{ xl: "80%", xs: "100%" }}
          bgcolor={"#F15B25"}
          sx={{
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            height: "100%",
            alignItems: {
              xs: "center",
            },
          }}
        >
          <Stack
            width={"60%"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
            gap={"10px"}
            sx={{
              marginTop: {
                xs: "20px",
                lg: "0px",
              },
            }}
          >
            <Typography
              color={"white"}
              fontWeight={"bold"}
              sx={{
                fontSize: {
                  xs: "27px",
                  lg: "30px",
                },
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
                letterSpacing: "2px",
              }}
              letterSpacing={2}
            >
              Get Started in Less Then
            </Typography>
            <Stack
              sx={{
                width: {
                  xs: "100px",
                  lg: "31%",
                },
              }}
              gap={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src={stopWatch}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Typography
              sx={{
                fontSize: {
                  xs: "30px",
                  lg: "50px",
                },
              }}
              fontWeight={"bold"}
              color={"white"}
            >
              60 seconds
            </Typography>
          </Stack>

          <Stack
            bgcolor={"white"}
            borderRadius={4}
            gap={2}
            sx={{
              width: {
                xs: "85%",
                sm: "81%",
                md: "56%",
                lg: "50%",
                xl: "50%",
              },
              margin: {
                xs: "20px 0px",
                lg: "20px",
                xl: "20px",
              },
              padding: {
                xs: "20px 0px",
                sm: "20px",
                lg: "20px 0px",
                xl: "40px 30px",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "22px",
                  md: "28px",
                  xl: "33px",
                },
                textAlign: {
                  xs: "center",
                },
              }}
              color={"#052973"}
              // color={"white"}
              fontWeight={"bold"}
              fontSize={{ xl: "22px", sm: "20px" }}
              textAlign={"center"}
            >
              Try before you buy
            </Typography>
            <Stack
              alignItems={"center"}
              gap={2}
              margin={"0 auto"}
              sx={{
                width: {
                  xs: "80%",
                  sm: "100%",
                  md: "70%",
                  lg: "100%",
                  xl: "100%",
                },
              }}
            >
              <Stack>
                <Stack
                  style={{ position: "relative" }}
                  sx={{
                    width: {
                      xs: "220px",
                      sm: "268px",
                      smm: "400px",
                      md: "480px",
                      lg: "385px",
                      xl: "480px",
                    },
                    height: {
                      xs: "45px",
                      sm: "47px",
                      md: "67px",
                      lg: "57px",
                      xl: "67px",
                    },
                  }}
                >
                  <input
                    style={{
                      width: "94%",
                      height: "100%",
                      border: "1px solid #AAAAAA",
                      color: otpSent ? "#DDDDDD" : "#AAAAAA",
                      paddingLeft: "5%",
                      fontSize: "20px",
                      borderRadius: "12px",
                    }}
                    type="text"
                    name="Name"
                    disabled={otpSent}
                    placeholder="Full Name"
                    value={formData.Name}
                    onChange={handleInputChange}
                  />

                  <PersonIcon
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: "8px",
                      transform: "translateY(-50%)",
                      color: "#AAAAAA",
                      fontSize: {
                        xl: "40px",
                        md: "35px",
                        lg: "38px",
                        sm: "30px",
                      },
                    }}
                  />
                </Stack>
                {errors.Name && (
                  <Typography color="error">{errors.Name}</Typography>
                )}
              </Stack>
              <Stack>
                <Stack
                  style={{ position: "relative" }}
                  sx={{
                    width: {
                      xs: "220px",
                      sm: "268px",
                      smm: "400px",
                      md: "480px",
                      lg: "385px",
                      xl: "480px",
                    },
                    height: {
                      xs: "45px",
                      sm: "47px",
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
                    disabled={otpSent}
                    style={{
                      width: "94%",
                      height: "100%",
                      border: "1px solid #AAAAAA",
                      color: otpSent ? "#DDDDDD" : "#AAAAAA",
                      paddingLeft: "5%",
                      fontSize: "20px",
                      borderRadius: "12px",
                    }}
                  />

                  <EmailIcon
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: "8px",
                      transform: "translateY(-50%)",
                      color: "#AAAAAA",
                      fontSize: {
                        xl: "40px",
                        md: "35px",
                        lg: "38px",
                        sm: "30px",
                      },
                    }}
                  />
                </Stack>
                {errors.Email && (
                  <Typography color="error">{errors.Email}</Typography>
                )}
              </Stack>
              <Stack>
                <Stack
                  style={{ position: "relative" }}
                  sx={{
                    width: {
                      xs: "220px",
                      md: "480px",
                      sm: "268px",
                      smm: "400px",
                      lg: "385px",
                      xl: "480px",
                    },
                    height: {
                      xs: "45px",
                      sm: "47px",
                      md: "67px",
                      lg: "57px",
                      xl: "67px",
                    },
                  }}
                >
                  <input
                    type="text"
                    name="UserName"
                    placeholder="User name"
                    value={formData.UserName}
                    onChange={handleInputChange}
                    disabled={otpSent}
                    style={{
                      width: "94%",
                      height: "100%",
                      border: "1px solid #AAAAAA",
                      paddingLeft: "5%",
                      color: otpSent ? "#DDDDDD" : "#AAAAAA",
                      fontSize: "20px",
                      borderRadius: "12px",
                    }}
                  />

                  <AccountCircleIcon
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: "8px",
                      transform: "translateY(-50%)",
                      color: "#AAAAAA",
                      fontSize: {
                        xl: "40px",
                        md: "35px",
                        lg: "38px",
                        sm: "30px",
                      },
                    }}
                  />
                </Stack>
                {errors.UserName && (
                  <Typography color="error">{errors.UserName}</Typography>
                )}
              </Stack>
              <CitySelector
                selectedCountry={selectedCountry}
                handleCountryChange={handleCountryChange}
                countries={countries}
                selectedState={selectedState}
                handleStateChange={handleStateChange}
                states={states}
                errors={errors}
                otpSent={otpSent}
              />

              <Stack>
                {selectedCountry === 123 && (
                  <Stack
                    style={{ position: "relative" }}
                    sx={{
                      width: {
                        xs: "220px",
                        sm: "268px",
                        smm: "400px",
                        md: "480px",
                        lg: "385px",
                        xl: "480px",
                      },
                      height: {
                        xs: "45px",
                        sm: "47px",
                        md: "67px",
                        lg: "57px",
                        xl: "67px",
                      },
                    }}
                  >
                    <input
                      type="tel"
                      className="input-new"
                      value={formData.PhoneNumber}
                      name="PhoneNumber"
                      placeholder="Phone Number"
                      onChange={handleInputChange}
                      maxLength={16}
                      disabled={otpSent}
                      style={{
                        width: "94%",
                        height: "100%",
                        border: "1px solid #AAAAAA",
                        color: otpSent ? "#DDDDDD" : "#AAAAAA",
                        paddingLeft: "5%",
                        fontSize: "20px",
                        borderRadius: "12px",
                        WebkitAppearance: "none", // for Chrome, Safari, Edge, Opera
                        MozAppearance: "textfield",
                      }}
                    />

                    <PhoneAndroidIcon
                      sx={{
                        position: "absolute",
                        top: "50%",
                        right: "16px",
                        transform: "translateY(-50%)",
                        color: "#AAAAAA",
                        fontSize: {
                          xl: "40px",
                          md: "35px",
                          lg: "38px",
                          sm: "30px",
                        },
                      }}
                    />
                  </Stack>
                )}
                {formData.PhoneNumber.length === 16 && (
                  <div style={{ color: "red" }}>
                    Maximum 16 characters allowed.
                  </div>
                )}
                {errors.PhoneNumber && (
                  <Typography color="error">{errors.PhoneNumber}</Typography>
                )}
              </Stack>
              {/* <PhoneNumberInput formData={formData} setFormData={setFormData} errors={errors} /> */}
              <Stack
                gap={2}
                sx={{
                  alignItems: {
                    xs: "center",
                    lg: "left",
                  },
                }}
              >
                <Stack>
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
                    <Typography fontSize={"13px"} color={"black"}>
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
                </Stack>
                <Stack gap={"20px"} alignItems={"center"}>
                  {otpSent ? (
                    <>
                      <Stack
                        sx={{
                          width: {
                            xs: "220px",
                            sm: "268px",
                            smm: "400px",
                            md: "480px",
                            lg: "385px",
                            xl: "480px",
                          },
                          height: {
                            xs: "45px",
                            sm: "47px",
                            md: "67px",
                            lg: "57px",
                            xl: "67px",
                          },
                        }}
                      >
                        <input
                          type="number"
                          className="input-new"
                          value={formData.Otp}
                          name="Otp"
                          placeholder="OTP"
                          onChange={handleInputChange}
                          maxLength={16}
                          style={{
                            width: "94%",
                            height: "100%",
                            border: "1px solid #AAAAAA",
                            color: "#AAAAAA",
                            paddingLeft: "5%",
                            fontSize: "20px",
                            borderRadius: "12px",
                            WebkitAppearance: "none", // for Chrome, Safari, Edge, Opera
                            MozAppearance: "textfield",
                          }}
                        />
                      </Stack>
                      <Stack alignItems={"flex-end"} width={"95%"}>
                        <Typography
                          onClick={resetForm}
                          color={"white"}
                          sx={{ cursor: "pointer" }}
                        >
                          Edit Details
                        </Typography>
                      </Stack>
                      <Button
                        type="button"
                        sx={{
                          borderRadius: "10px",
                          width: {
                            xs: "220px",
                            sm: "268px",
                            smm: "400px",
                            md: "480px",
                            lg: "385px",
                            xl: "400px",
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
                            backgroundColor: "#F15B25",
                            // border: "1px solid #F15B25",
                            border: "1px solid #052973",
                            // color: "white",
                            color: "white",
                          },
                        }}
                        onClick={verifyOTP}
                      >
                        Verify OTP and Register
                      </Button>
                    </>
                  ) : (
                    <Button
                      type="button"
                      sx={{
                        borderRadius: "10px",
                        width: {
                          xs: "220px",
                          sm: "268px",
                          smm: "400px",
                          md: "480px",
                          lg: "385px",
                          xl: "400px",
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
                          backgroundColor: "#F15B25",
                          // border: "1px solid #F15B25",
                          border: "1px solid #052973",
                          // color: "white",
                          color: "white",
                        },
                      }}
                      onClick={sendOTP}
                    >
                      Try It Free for 7 Days
                    </Button>
                  )}
                </Stack>
                {modalVisible && (
                  <div className="modalBackground">
                    <Stack>
                      <div className="modalContainer">
                        <div className="titleCloseBtn">
                          <button onClick={() => setModalVisible(false)}>
                            X
                          </button>
                        </div>
                        <Stack
                          p={{ lg: "20px 40px 40px 40px", xs: "10px 20px" }}
                        >
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
    </>
  );
};

export default Clock;
