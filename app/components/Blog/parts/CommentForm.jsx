import React, { useState } from "react";
import {
  FormControl,
  Stack,
  Typography,
  Button as MuiButton,
} from "@mui/material";
import axios from "axios";
import Button from "../../utils/Button";
const CommentForm = ({ BlogId }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneCode: "0", // Default as "0" if not using phone fields
    PhoneNumber: "0", // Default as "0" if not using phone fields
    UserComment: "",
    BlogId: BlogId, // Assuming BlogId and ParentId as static for demo
    ParentId: 0,
    Images: [], // Empty array for Images
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit form data
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://dev.saniiro.net/api/v1/feedback/reply",
        formData
      );
      if (response.data.Code === 1000) {
        setFormData({
          Name: "",
          Email: "",
          PhoneCode: "", // Default as "0" if not using phone fields
          PhoneNumber: "", // Default as "0" if not using phone fields
          UserComment: "",
          BlogId: "", // Assuming BlogId and ParentId as static for demo
          ParentId: 0,
          Images: [],
        });
      }
      console.log("Response:", response);
      // Handle further actions like showing success message, clearing form, etc.
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  console.log("formData", formData);
  return (
    <>
      <Stack width={"100%"}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "25px",
            fontWeight: 600,
            lineHeight: "43px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Comments
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "35px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Leave a Reply
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
            opacity: "0.5",
          }}
        >
          Your email address will not be published.Required fields are marked*
        </Typography>
        <Stack
          width={{
            xs: "100%",
            lg: "789px",
          }}
          height={{
            xs: "100%",
          }}
        >
          {/* <FormControl>
            <Stack gap={2}>
              <Stack gap={"5px"}>
                <label
                  style={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  htmlFor="commaents"
                >
                  COMMENTS*
                </label>
                <input
                  style={{
                    height: "200px",
                    border: "1px solid gray",
                  }}
                  type="text"
                />
              </Stack>
              <Stack gap={"5px"}>
                <label
                  style={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  htmlFor="name"
                >
                  NAME*
                </label>
                <input
                  style={{
                    border: "1px solid gray",
                    width: "95%",
                    height: "43px",
                  }}
                  type="text"
                />
              </Stack>

              <Stack gap={"5px"}>
                <label
                  style={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  htmlFor="email"
                >
                  EMAIL*
                </label>
                <input
                  style={{
                    border: "1px solid gray",
                    width: "100%",
                    height: "43px",
                  }}
                  type="text"
                />
              </Stack>
              <Stack gap={"5px"}>
                <label
                  style={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  htmlFor="website"
                >
                  WEBSITE*
                </label>
                <input
                  style={{
                    border: "1px solid gray",
                    width: "100%",
                    height: "43px",
                  }}
                  type="text"
                />
              </Stack>
            </Stack>

            <Typography
              margin={"20px 0px"}
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "28px",
                letterSpacing: "0em",
                textAlign: "left",
                opacity: "0.5",
              }}
            >
              By submitting this form, you agree to the processing of personal
              data according to our Privacy Policy.
            </Typography>
            <Stack
              alignItems={{
                xs: "center",
                lg: "flex-start",
              }}
            >
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  width: {
                    xs: "140px",
                    lg: "187px",
                  },
                  height: {
                    xs: "35px",
                    lg: "46px",
                  },
                  padding: "7px 16px",
                  gap: "10px",
                  backgroundColor: "#F15B25",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "12px",
                      lg: "16px",
                    },
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Post Comment
                </Typography>
              </Stack>
            </Stack>
          </FormControl> */}
          <FormControl component="form" onSubmit={handleSubmit}>
            <Stack gap={2}>
              {/* <Typography variant="h5">Comments</Typography>
              <label htmlFor="Name">Name*</label>
              <input
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
              /> */}
              <Stack gap={"5px"}>
                <label
                  style={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  htmlFor="comments"
                >
                  COMMENTS*
                </label>
                <input
                  name="UserComment"
                  value={formData.UserComment}
                  onChange={handleChange}
                  required
                  style={{
                    height: "200px",
                    border: "1px solid gray",
                  }}
                  type="text"
                />
              </Stack>

              {/* <label htmlFor="Email">Email*</label>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                required
              /> */}
              <Stack gap={"5px"}>
                <label
                  style={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  htmlFor="Name"
                >
                  Name*
                </label>
                <input
                  type="name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                  style={{
                    border: "1px solid gray",
                    width: "95%",
                    height: "43px",
                  }}
                />
              </Stack>
              <Stack gap={"5px"}>
                <label
                  style={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  htmlFor="Email"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                  style={{
                    border: "1px solid gray",
                    width: "95%",
                    height: "43px",
                  }}
                />
              </Stack>

              {/* <label htmlFor="Comments">Comments*</label>
              <textarea
                name="UserComment"
                value={formData.UserComment}
                onChange={handleChange}
                required
              /> */}

              <Typography>
                By submitting this form, you agree to the processing of personal
                data according to our Privacy Policy.
              </Typography>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  width: {
                    xs: "140px",
                    lg: "187px",
                  },
                  height: {
                    xs: "35px",
                    lg: "46px",
                  },
                  padding: "7px 16px",
                  gap: "10px",
                  backgroundColor: "#F15B25",
                }}
              >
                <MuiButton
                  type="submit"
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "12px",
                      lg: "16px",
                    },
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Post Comment
                </MuiButton>
              </Stack>
            </Stack>
          </FormControl>
        </Stack>
      </Stack>
    </>
  );
};

export default CommentForm;
