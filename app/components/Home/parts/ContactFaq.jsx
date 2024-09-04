"use client";

import React, { useEffect, useState } from "react";
// import "./Faq.css"; // Import a CSS file for custom styling
import ContactCustomFaq from "./ContactCustomFaq";
import { Typography } from "@mui/material";
import axios from "axios";

const config = {
  animate: true,
  tabFocus: true,
};
const ContactFaq = () => {
  const [faqs, setFaqs] = useState("");
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get("http://dev.saniiro.net/api/v1/faq");
        setFaqs(response.data.Data);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      }
    };
    fetchFAQs();
  }, []);
  return (
    <>
      <Typography
        marginTop={"10px"}
        fontWeight={"bold"}
        color={"#052973"}
        display={"flex"}
        justifyContent={"Center"}
        textAlign={"center"}
        sx={{
          fontSize: { xs: "20px", sm: "30px", md: "45px" },
          margin: {
            xs: "7px",
            sm: "15px",
            lg: "0px",
          },
        }}
      >
        Frequently Asked Question
      </Typography>
      <ContactCustomFaq data={faqs} />
    </>
  );
};

export default ContactFaq;
