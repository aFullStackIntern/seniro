import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../../utils/Button";
import "./Virtualtraining.css"
const Clock = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value, country) => {
    // Update the state with the selected phone number and country code
    setPhone(value);
  };
  return (
    <Stack alignItems={"center"}>
      <Stack
        width={"100%"}
        bgcolor={"#F15B25"}
        gap={4}
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          height: "100%",
          alignItems: {
            xs: "center",
          },
        }}
      >
        <Stack
          width={"50%"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
          sx={{
            marginTop: {
              xs: "20px",
              lg: "0px",
            },
          }}
        >
          <Typography
            className="text-strokes"
            fontFamily={"monospace"}
            sx={{
              textTransform: "uppercase",
              fontSize: {
                xs: "55px",
                sm: "60px",
                lg: "85px",
                xl: "146px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
              fontWeight: "bold",
              letterSpacing: 1,
              color: "transparent",
              lineHeight: 1,
            }}
          >
            Get in
          </Typography>
          <Typography
            textTransform={"uppercase"}
            sx={{
              fontSize: {
                xs: "55px",
                sm: "60px",
                lg: "85px",
                xl: "136px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
            color={"white"}
            fontWeight={900}
            lineHeight={0.9}
            letterSpacing={"0.05em"}
          >
            TOUCH
          </Typography>
          <Typography
            color={"white"}
            fontWeight={"bold"}
            sx={{
              fontSize: {
                xs: "20px",
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
            Got questions? Write to us.
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: {
              xs: "100%",
              md: "60%",
              lg: "40%",
            },
            padding: {
              xs: "0 0 40px 0",
              md: "40px 20px",
            },
          }}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "20px",
                lg: "25px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
              letterSpacing: "2px",
            }}
            color={"white"}
            fontWeight={"bold"}
            letterSpacing={2}
          >
            Get started with your free trial
          </Typography>
          <Stack gap={2} width={"100%"} alignItems={"center"}>
            <Stack
              alignItems={"center"}
              sx={{
                width: {
                  xs:"50%",
                  sm:"60%",
                  md:"70%",
                  lg: "80%",
                },
                height: {
                  xs: "55px",
                  lg: "67px",
                },
              }}
            >
              <input
                type="text"
                className="input-clock"
                placeholder="First Name"
                style={{ width: "100%", height: "55px" }}
              />
            </Stack>
            <Stack
              alignItems={"center"}
              sx={{
                width: {
                  xs:"50%",
                  sm:"60%",
                  md:"70%",
                  lg: "80%",
                },
                height: {
                  xs: "55px",
                  lg: "67px",
                },
              }}
            >
              <input
                type="text"
                className="input-clock"
                placeholder="Last Name"
                style={{ width: "100%", height: "55px" }}
              />
            </Stack>
            <Stack
              alignItems={"center"}
              sx={{
                width: {
                  xs:"50%",
                  sm:"60%",
                  md:"70%",
                  lg: "80%",
                },
                height: {
                  xs: "55px",
                  lg: "67px",
                },
              }}
            >
              <input
                type="Email"
                className="input-clock"
                placeholder="Email"
                style={{ width: "100%", height: "55px" }}
              />
            </Stack>
            <Stack
              alignItems={"center"}
              sx={{
               width: {
                  xs:"50%",
                  sm:"60%",
                  md:"70%",
                  lg: "80%",
                },
                height: {
                  xs: "55px",
                  lg: "67px",
                },
              }}
            >
              <input
                type="number"
                className="input-clock"
                placeholder="Phone Number"
                style={{ width: "100%", height: "55px" }}
              />
            </Stack>
            {/* <PhoneInput
              country={""} // Default country code for India (+91)
              value={phone}
              placeholder="Phone Number"
              onChange={handlePhoneChange}
              inputProps={{
                name: "phone",
                id: "phoneInput",
              }}
            /> */}

            <Stack gap={2} width={"85%"}>
              <Button
                type="button"
                sx={{
                  width: "100%",
                  color: "white",
                  height: "67px",
                  fontSize: "22px",
                  bgcolor: "#052973",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#052973",
                    color: "white",
                  },
                }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Clock;
