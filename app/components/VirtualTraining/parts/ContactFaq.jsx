import React from "react";
// import "./Faq.css"; // Import a CSS file for custom styling
import ContactCustomFaq from "./ContactCustomFaq";
import { Typography } from "@mui/material";

const data = {
  rows: [
    {
      title: `About virtual training`,
      content: (
        <p>
          Discover all the ways Zoho CRM can enhance your journey as your
          organization's Administrator! As an Administrator, you are vital to
          ensuring a successful journey for your customers. Understanding a
          customer's lifecycle and pain points can help you streamline processes
          and provide a more seamless customer experience. Zoho CRM for
          Administrators is an in-depth, virtual classroom training program
          designed to assist Administrators in effectively setting up and
          managing their businesses with Zoho CRM.
        </p>
      ),
    },
    {
      title: "Training delivery and format",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Who will benefit from this training?",
      content: `Cancellation Time Frame: Cancellations must be made at least 1 hour before the scheduled booking time.  `,
    },
    {
      title: "Discover the secrets to succeeding as a Zoho CRM Administrator",
      content: (
        <p>
          Users are expected to treat the pod and its contents with care. Any
          damages or malfunctions should be reported immediately through the
          app.
        </p>
      ),
    },
    {
      title: "Get ready to experience a comprehensive virtual training program",
      content: `Cancellation Time Frame: Cancellations must be made at least 1 hour before the scheduled booking time.  `,
    },
  ],
};

const config = {
  animate: true,
  tabFocus: true,
};

const ContactFaq = () => {
  return (
    <>
      <ContactCustomFaq data={data} />
    </>
  );
};

export default ContactFaq;
