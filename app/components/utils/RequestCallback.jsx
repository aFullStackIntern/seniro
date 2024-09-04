import React, { useState } from "react";
import Nav from "../Navbar/Nav";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { MuiTelInput } from "mui-tel-input";
import Footer from "../utils/Footer";
import {
  CountryField,
  StateField,
  VisitorAPIComponents,
} from "react-country-state-fields";

const RequestCallback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [help, setHelp] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "phone") setPhone(value);
    else if (name === "help") setHelp(value);
  };

  const handleCaptchaVerification = (response) => {
    if (response) {
      setCaptchaVerified(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to submit the form data to your backend or handle it as needed
    console.log("Form submitted:", { name, email, phone, help });
    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
    setHelp("");
    setCaptchaVerified(false);
  };

  const [country, setCountry] = useState({});
  const [state, setState] = useState({});
  const visitorApiPrjectId = "";

  return (
    <>
      <Nav />
      <Stack maxWidth={"1536px"} margin={"0 auto"} backgroundColor={"#F5F5F5"}>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          pb={3}
        >
          <Stack
            margin={"0 auto"}
            width={{
              xs: "80%",
              md: "50%",
            }}
            alignItems={"center"}
            mt={{
              xs: 5,
              md: 20,
            }}
          >
            <Stack
              width={{
                xs: "100%",
                md: "70%",
              }}
              margin={"0 auto"}
              gap={2}
              fontFamily={"Work Sans"}
            >
              <Typography
                color={"#004ad4"}
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                variant="h3"
                fontWeight={"bold"}
                fontFamily={"Work Sans"}
              >
                Request a Callback
              </Typography>
              <Typography
                fontWeight={"bold"}
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                fontFamily={"Work Sans"}
              >
                Interested in learning more about Zoho CRM ? {`\n`} Fill out the
                form and one of our product experts will call you to understand
                your requirements better{" "}
              </Typography>
              <Typography fontFamily={"Work Sans"}>
                You can also reach us directly at:{" "}
              </Typography>
              <Stack direction={"row"} gap={2}>
                <PhoneIcon sx={{ color: "#F15B25" }} />
                <Stack direction={"column"} gap={0.5}>
                  <Typography fontFamily={"Work Sans"}>
                    {" "}
                    1800 102 1122
                  </Typography>
                  <Typography fontFamily={"Work Sans"}>
                    {" "}
                    1800 102 1123
                  </Typography>
                </Stack>
              </Stack>
              <Typography fontFamily={"Work Sans"}>
                Or write to us at:{" "}
              </Typography>
              <Stack direction={"row"} gap={2}>
                <MailIcon sx={{ color: "#F15B25" }} />
                <Typography fontFamily={"Work Sans"}>
                  sales@saniiro.com
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            margin={"0 auto"}
            width={{
              xs: "95%",
              md: "50%",
            }}
            height={"100%"}
          >
            <Stack mt={5}>
              <Stack
                border={"1px solid #E0E0E0"}
                borderRadius={"10px"}
                margin={"0 auto"}
                width={{
                  xs: "95%",
                  md: "70%",
                }}
                height={"100%"}
                backgroundColor={"white"}
                p={3}
                boxSizing={"border-box"}
              >
                <Stack>
                  <form onSubmit={handleSubmit}>
                    <Stack gap={2}>
                      <Stack width={"100%"}>
                        <label htmlFor="name">
                          <Typography fontWeight={"bold"}>
                            Name
                            <span
                              style={{
                                color: "red",
                              }}
                            >
                              *
                            </span>
                          </Typography>
                        </label>
                        <TextField
                          size="small"
                          id="name"
                          name="name"
                          value={name}
                          onChange={handleChange}
                          variant="outlined"
                          placeholder="What do we call you"
                          required
                        />
                      </Stack>
                      <Stack width={"100%"}>
                        <label htmlFor="email">
                          <Typography fontWeight={"bold"}>
                            Email
                            <span
                              style={{
                                color: "red",
                              }}
                            >
                              *
                            </span>
                          </Typography>
                        </label>
                        <TextField
                          size="small"
                          id="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          variant="outlined"
                          placeholder="Please enter your business email ID"
                          required
                        />
                      </Stack>
                      <Stack width={"100%"}>
                        <label htmlFor="phone">
                          <Typography fontWeight={"bold"}>
                            Phone
                            <span
                              style={{
                                color: "red",
                              }}
                            >
                              *
                            </span>
                          </Typography>
                        </label>
                        <MuiTelInput
                          size="small"
                          id="phone"
                          name="phone"
                          value={phone}
                          onChange={(newValue) =>
                            handleChange({
                              target: { name: "phone", value: newValue },
                            })
                          }
                          placeholder="Phone"
                          defaultCountry="IN"
                          required
                        />
                      </Stack>
                      <Stack width={"100%"} gap={1}>
                        <label htmlFor="phone">
                          <Typography fontWeight={"bold"}>
                            Country
                            <span
                              style={{
                                color: "red",
                              }}
                            >
                              *
                            </span>
                          </Typography>
                        </label>
                        <VisitorAPIComponents
                          projectId={visitorApiPrjectId}
                          handleCountryChange={(countryObj) =>
                            setCountry(countryObj)
                          }
                          handleStateChange={(stateObj) => setState(stateObj)}
                        >
                          <CountryField
                            sx={{ height: "20px" }}
                            label="Country"
                            placeholder="Country"
                          ></CountryField>
                          <StateField
                            size="small"
                            label="State"
                            placeholder="State"
                          ></StateField>
                        </VisitorAPIComponents>
                      </Stack>
                      <Stack width={"100%"} gap={2}>
                        <label htmlFor="help">
                          <Typography fontWeight={"bold"}>
                            How can our team help you?
                            <span
                              style={{
                                color: "red",
                              }}
                            >
                              *
                            </span>
                          </Typography>
                        </label>
                        <TextField
                          variant="outlined"
                          fullWidth
                          multiline
                          minRows={3}
                          size="small"
                          id="help"
                          name="help"
                          value={help}
                          onChange={handleChange}
                          placeholder="How can our team help you?"
                          required
                        />
                      </Stack>
                      <Stack width={"100%"} gap={2}>
                        <label htmlFor="captcha">
                          <Typography fontWeight={"bold"}>
                            Captcha
                            <span
                              style={{
                                color: "red",
                              }}
                            >
                              *
                            </span>
                          </Typography>
                        </label>
                        <div
                          className="g-recaptcha"
                          data-sitekey="6Ldyj58pAAAAAMxa5p0VGAIrBNxqDgwbUivphTon"
                          data-callback={handleCaptchaVerification}
                        ></div>
                        {!captchaVerified && (
                          <Typography style={{ color: "red" }}>
                            Please verify that you are not a robot.
                          </Typography>
                        )}
                      </Stack>

                      <Stack width={"100%"} gap={2}>
                        <Typography>
                          By submitting this form, you agree to our {` `}
                          <a href="#">Privacy Policy</a>
                        </Typography>
                      </Stack>
                      <Button
                        type="submit"
                        sx={{
                          backgroundColor: "#F15B25",
                          color: "#fff",
                          padding: "15px",
                          "&:hover": {
                            backgroundColor: "#F15B25",
                          },
                        }}
                        variant="contained"
                        fullWidth
                      >
                        <Typography fontWeight={"bold"}>
                          Submit Request
                        </Typography>
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Footer />
      </Stack>
    </>
  );
};

export default RequestCallback;
