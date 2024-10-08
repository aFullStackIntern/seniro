import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import lo from "../assets/lo.svg";
import Lock from "../assets/Lock.png";
import Button from "../utils/Button";
import Link from "next/link";

// import CitySelector from "./../Home/parts/Cityselctor";
import "./Experience.css";
import Image from "next/image";

const ShareExperience = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    designation: "",
    companyName: "",
    feedback: "",
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      email: "",
      designation: "",
      companyName: "",
      feedback: "",
      captcha: "",
    });
  };

  return (
    <>
      {/* Desktop View */}
      <Stack
        display={{
          xs: "none",
          lg: "flex",
        }}
        pt={5}
        pb={5}
        height={{
          xs: "100%",
        }}
        margin={"0 auto"}
        bgcolor={"#052973"}
        className="textured-background-Experience"
        background-repeat={"no-repeat"}
        backgroundSize={"cover"}
        justifyContent={"center"}
        alignItems={"Center"}
      >
        <Stack
          zIndex={11}
          maxWidth={"1640px"}
          bgcolor={"rgb(230, 245, 255)"}
          width={{
            xs: "90%",
            sm: "80%",
            md: "70%",
          }}
          borderRadius={2}
          direction={"row"}
          p={3}
        >
          <Stack width={"50%"} zIndex={11} p={3} gap={8}>
            <Link href="/">
              <Stack>
                <Image
                  src={lo}
                  alt=""
                  style={{ width: "150px", height: "30px" }}
                />
              </Stack>
            </Link>
            <Stack gap={2}>
              <Stack alignItems={"center"}>
                <Image
                  src={Lock}
                  alt=""
                  style={{ width: "290px", height: "236px" }}
                />
              </Stack>
              <Typography
                fontSize={"18px"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                Enhanced sign-in security
              </Typography>
              <Typography fontSize={"18px"} textAlign={"center"} p={"0 11px"}>
                Move away from risky passwords and experience one-tap access to
                Zoho. Download and install OneAuth.
              </Typography>
              <Button
                sx={{
                  bgcolor: "transparent",
                  color: "#0079FF",
                  fontSize: "16px",
                  fontWeight: "bold",
                  pl: "0px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#0079FF",
                    textDecoration: "underline",
                  },
                }}
              >
                Know More
              </Button>
            </Stack>
          </Stack>
          <Stack justifyContent={"center"}>
            <Stack
              sx={{
                content: "''",
                width: "2px",
                height: "90%",
                bgcolor: "#0139ff",
              }}
            ></Stack>
          </Stack>
          <Stack width={"50%"} zIndex={11} p={3}>
            <form onSubmit={handleSubmit}>
              <Stack gap={2}>
                <Stack gap={2}>
                  <Stack width={"90%"}>
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </Stack>
                  <Stack width={"90%"}>
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Stack>
                  <Stack width={"90%"}>
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder="Designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                    />
                  </Stack>
                  <Stack width={"90%"}>
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder="Company Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </Stack>
                  <Stack width={"90%"}>
                    <textarea
                      style={{
                        width: "100%",
                        height: "150px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder="Please share your Feedback*"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                    />
                  </Stack>
                  <Stack width={"90%"}>
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="file"
                      className="input-Login"
                      placeholder="Company Name"
                    />
                  </Stack>
                  {/* <CitySelector /> */}
                  <Stack width={"90%"}>
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder=""
                    />
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder="Captcha*"
                      name="captcha"
                      value={formData.captcha}
                      onChange={handleChange}
                    />
                  </Stack>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "black",
                      textAlign: "left",
                      fontFamily: "Work Sans",
                    }}
                  >
                    By submitting this form, you agree to the processing of
                    personal data according to our Privacy Policy.
                  </Typography>
                </Stack>
              </Stack>
              <Stack alignItems={"center"}>
                <Button
                  type="submit"
                  sx={{
                    width: "100%",
                    color: "white",
                    height: "67px",
                    fontSize: "22px",
                    bgcolor: "#F15B25",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#F15B25",
                      color: "white",
                    },
                  }}
                >
                  Submit your story
                </Button>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Stack>

      {/* Mobile View */}
      <Stack
        display={{ xs: "flex", lg: "none" }}
        bgcolor={"#052973"}
        className="textured-background-Login"
        background-repeat={"no-repeat"}
        backgroundSize={"cover"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"Center"}
      >
        <Stack
          p={{
            md: 2,
          }}
          bgcolor={"rgb(230, 245, 255)"}
          width={"90%"}
          borderRadius={2}
          direction={{ xs: "column", md: "row" }}
          m={"10px auto"}
        >
          <Stack width={"90%"} zIndex={11} p={1} gap={1} m={"0 auto"}>
            <Link href="/">
              <Stack>
                <Image
                  src={lo}
                  alt=""
                  style={{ width: "150px", height: "30px" }}
                />
              </Stack>
            </Link>
            <Stack gap={1}>
              <Stack
                alignItems={"center"}
                width={{
                  xs: "110px",
                  sm: "110px",
                  md: "140px",
                }}
                m={"0 auto"}
              >
                <Image
                  src={Lock}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Stack>
              <Typography
                fontSize={{
                  xs: "11px",
                  sm: "14px",
                  md: "18px",
                }}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                Enhanced sign-in security
              </Typography>
              <Typography
                fontSize={{
                  xs: "11px",
                  sm: "14px",
                  md: "18px",
                }}
                textAlign={"center"}
                p={"0 11px"}
              >
                Move away from risky passwords and experience one-tap access to
                Zoho. Download and install OneAuth.
              </Typography>
              <Button
                fontSize={{
                  xs: "9px",
                  sm: "11px",
                }}
                sx={{
                  bgcolor: "transparent",
                  color: "#0079FF",

                  fontWeight: "bold",
                  pl: "0px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#0079FF",
                    textDecoration: "underline",
                  },
                }}
              >
                Know More
              </Button>
            </Stack>
          </Stack>
          <Stack width={"94%"} zIndex={11} margin={"0 auto"}>
            <form onSubmit={handleSubmit}>
              <Stack gap={2} justifyContent={"center"}>
                <Stack gap={2}>
                  <Stack width={"90%"}>
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </Stack>
                  <Stack width={"90%"}>
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Stack>
                  <Stack width={"90%"}>
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder="Designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                    />
                  </Stack>
                  <Stack width={"90%"}>
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder="Company Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </Stack>
                  <Stack width={"90%"}>
                    <textarea
                      style={{
                        width: "100%",
                        height: "150px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder="Please share your Feedback*"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                    />
                  </Stack>
                  <Stack width={"90%"}>
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="file"
                      className="input-Login"
                      placeholder="Company Name"
                    />
                  </Stack>
                  {/* <CitySelector /> */}
                  <Stack width={"90%"}>
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder=""
                    />
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #AAAAAA",
                      }}
                      type="text"
                      className="input-Login"
                      placeholder="Captcha*"
                      name="captcha"
                      value={formData.captcha}
                      onChange={handleChange}
                    />
                  </Stack>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "black",
                      textAlign: "left",
                      fontFamily: "Work Sans",
                    }}
                  >
                    By submitting this form, you agree to the processing of
                    personal data according to our Privacy Policy.
                  </Typography>
                </Stack>
              </Stack>
              <Stack alignItems={"start"} mb={4}>
                <Button
                  type="submit"
                  sx={{
                    width: "98%",
                    color: "white",
                    height: {
                      xs: "40px",
                      md: "50px",
                    },
                    fontSize: {
                      xs: "16px",
                      sm: "18px",
                      md: "20px",
                    },
                    bgcolor: "#F15B25",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#F15B25",
                      color: "white",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ShareExperience;
