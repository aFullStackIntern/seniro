import React from "react";
import Nav from "../Navbar/Nav";
import Simplify from "./parts/Simplify";
import RequestDemo from "./parts/RequestDemo";
import Billing from "./parts/Billing";
import ToggleSection from "./parts/State";
import Clock from "./parts/Clock";
import ContactFaq from "./parts/ContactFaq";
import Footer from "../utils/Footer";
import Awards from "./parts/Awards";
import Testimonial from "./parts/Testimonial";
import { Box, Stack } from "@mui/material";
import NavLight from "../Navbar/NavLight";
import Awards1 from "../Home/parts/NewPart";

const Home = () => {
  return (
    <>
      <Nav />
      <Box
        fontFamily={"Work Sans"}
        maxWidth={"1536px"}
        margin={"0 auto"}
        gap={4}
      >
        <Simplify />
      </Box>
      <RequestDemo />
      <Billing />
      <Awards1 />
      <ToggleSection />
      <Awards />
      <Clock />
      <ContactFaq />

      <Footer />

      {/* <Stack
        fontFamily={"Work Sans"}
        maxWidth={"1536px"}
        margin={"0 auto"}
        gap={4}
      >
        <Simplify />
        <RequestDemo />
        <Billing />
        <Testimonial />
        <ToggleSection />
        <Clock />
        <Awards />
        <ContactFaq />
      </Stack>
      <Footer /> */}
    </>
  );
};

export default Home;
