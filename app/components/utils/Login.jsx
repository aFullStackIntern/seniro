import { Box, Stack, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import lo from "../assets/lo.svg";
import Lock from "../assets/Lock.png";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./Footer.css";
import Google from "../assets/google.png";
import LinkedIn from "../assets/linkedIn.png";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {/* desktop view */}
      <Stack
        display={{
          xs: "none",
          lg: "flex",
        }}
        margin={"0 auto"}
        bgcolor={"#052973"}
        className="textured-background-Login"
        background-repeat={"no-repeat"}
        backgroundSize={"cover"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"Center"}
      >
        <Stack
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
                height: "450px",
                bgcolor: "#0139ff",
              }}
            ></Stack>
          </Stack>
          <Stack width={"50%"} zIndex={11} p={3}>
            <Stack alignItems={"end"}>
              <Link href="/Sign-up">
                <Button
                  sx={{
                    bgcolor: "transparent",
                    color: "#0079FF",
                    fontSize: "11px",
                    fontWeight: "bold",
                    pl: "0px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#0079FF",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Don't have an account?
                </Button>
              </Link>
            </Stack>
            <Stack gap={2}>
              <Stack>
                <Typography fontWeight={"bold"} fontSize={"31px"}>
                  Sign in
                </Typography>
                <Typography fontSize={"18px"} color={"grey"}>
                  to access Begin
                </Typography>
              </Stack>
              <Stack gap={2}>
                <Stack style={{ position: "relative" }} width={"90%"}>
                  <input
                    style={{
                      width: "100%",
                      height: "67px",
                      fontSize: "22px",
                      border: "1px solid #AAAAAA",
                    }}
                    type="text"
                    className="input-Login"
                    placeholder="Customer Login Id"
                  />
                  <PersonIcon
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "16px",
                      transform: "translateY(-50%)",
                      color: "#AAAAAA",
                      fontSize: "40px",
                    }}
                  />
                </Stack>
                <Stack style={{ position: "relative" }} width={"90%"}>
                  <input
                    style={{
                      width: "100%",
                      height: "67px",
                      fontSize: "22px",
                      border: "1px solid #AAAAAA",
                    }}
                    type="Email"
                    className="input-Login"
                    placeholder="User Name"
                  />
                  <EmailIcon
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "16px",
                      transform: "translateY(-50%)",
                      color: "#AAAAAA",
                      fontSize: "40px",
                    }}
                  />
                </Stack>
                <Stack style={{ position: "relative" }} width={"90%"}>
                  <input
                    style={{
                      width: "100%",
                      height: "67px",
                      fontSize: "22px",
                      border: "1px solid #AAAAAA",
                    }}
                    name="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create Password"
                    className="input-Login"
                  />
                  <IconButton
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "16px",
                      transform: "translateY(-50%)",
                      color: "#AAAAAA",
                      fontSize: "50px",
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </Stack>
              </Stack>
              <Stack alignItems={"center"}>
                <Button
                  type="button"
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
                  Get Started
                </Button>
              </Stack>
              <Stack alignItems={"end"}>
                <Button
                  sx={{
                    bgcolor: "transparent",
                    color: "#0079FF",
                    fontSize: "16px",
                    textDecoration: "underline",
                    fontWeight: "bold",
                    pl: "0px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#0079FF",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Forgot Password?
                </Button>
              </Stack>
              <Stack direction={"row"} justifyContent={"right"} gap={1}>
                <Typography display={"flex"} alignItems={"center"}>
                  or sign in using
                </Typography>
                <Image src={Google} style={{ width: "32px", height: "32px" }} />
                <Image
                  src={LinkedIn}
                  style={{ width: "32px", height: "32px" }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* mobile view */}

      <Stack
        display={{ xs: "flex", lg: "none" }}
        bgcolor={"#052973"}
        className="textured-background-Login"
        background-repeat={"no-repeat"}
        backgroundSize={"cover"}
        height={"100vh"}
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
            <Stack alignItems={"end"}>
              <Link href="/Sign-up">
                <Button
                  sx={{
                    bgcolor: "transparent",
                    color: "#0079FF",
                    fontSize: "11px",
                    fontWeight: "bold",
                    pl: "0px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#0079FF",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Don't have an account?
                </Button>
              </Link>
            </Stack>
            <Stack gap={2}>
              <Stack>
                <Typography
                  fontWeight={"bold"}
                  fontSize={{
                    xs: "20px",
                    sm: "23px",
                    md: "27px",
                  }}
                  textAlign={"center"}
                >
                  Sign in
                </Typography>
                <Typography
                  fontSize={{
                    xs: "12px",
                    sm: "14px",
                    md: "16px",
                  }}
                  textAlign={"center"}
                  color={"grey"}
                >
                  to access Begin
                </Typography>
              </Stack>
              <Stack gap={2} justifyContent={"center"}>
                <Stack style={{ position: "relative" }} width={"92%"}>
                  <input
                    style={{
                      width: "100%",
                      height: "40px",
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                      },

                      border: "1px solid #AAAAAA",
                    }}
                    type="text"
                    className="input-Login"
                    placeholder="Customer Login Id"
                  />
                  <PersonIcon
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "8px",
                      transform: "translateY(-50%)",
                      color: "#AAAAAA",
                      fontSize: "30px",
                    }}
                  />
                </Stack>
                <Stack style={{ position: "relative" }} width={"92%"}>
                  <input
                    style={{
                      width: "100%",
                      height: "40px",
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                      },

                      border: "1px solid #AAAAAA",
                    }}
                    type="Email"
                    className="input-Login"
                    placeholder="User Name"
                  />
                  <EmailIcon
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "8px",
                      transform: "translateY(-50%)",
                      color: "#AAAAAA",
                      fontSize: "30px",
                    }}
                  />
                </Stack>
                <Stack style={{ position: "relative" }} width={"92%"}>
                  <input
                    style={{
                      width: "100%",
                      height: "40px",
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                      },
                      padding: {
                        xs: "0 8px",
                        sm: "0 12px",
                        md: "0 16px",
                      },
                      border: "1px solid #AAAAAA",
                    }}
                    name="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create Password"
                    className="input-Login"
                  />
                  <IconButton
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "5px",
                      transform: "translateY(-50%)",
                      color: "#AAAAAA",
                      fontSize: "40px",
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </Stack>
              </Stack>
              <Stack alignItems={"start"}>
                <Button
                  type="button"
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
              <Stack alignItems={"end"}>
                <Button
                  sx={{
                    bgcolor: "transparent",
                    color: "#0079FF",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                    },
                    textDecoration: "underline",
                    fontWeight: "bold",
                    pl: "0px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#0079FF",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Forgot Password?
                </Button>
              </Stack>
              <Stack direction={"row"} justifyContent={"right"} gap={1} pb={1}>
                <Typography
                  fontSize={{
                    xs: "12px",
                    sm: "14px",
                    md: "16px",
                  }}
                  display={"flex"}
                  alignItems={"center"}
                >
                  or sign in using
                </Typography>
                <Image src={Google} style={{ width: "25px", height: "25px" }} />
                <Image
                  src={LinkedIn}
                  style={{ width: "25px", height: "25px" }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
