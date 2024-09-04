"use-client";

import React from "react";
import AboutBanner from "./parts/AboutBanner";
import Nav from "../Navbar/Nav";
import WelcomeToSaniiro from "./parts/WelcomeToSaniiro";
import ExploreAbout from "./parts/ExploreAbout";
import Clock from "../Home/parts/Clock";
import Awards from "../Home/parts/Awards";
import Footer from "../utils/Footer";
import OurJourney from "./parts/OurJourney";
import OurNetwork from "./parts/OurNetwork";
import ProductSlider from "./parts/ProductSlider";
import Name from "./parts/Name";
import { Stack } from "@mui/material";
const About = () => {
  return (
    <>
      <Stack gap={5}>
        <Nav />
        <AboutBanner />
      </Stack>
      <Stack gap={5} maxWidth={"1536px"} margin={"0 auto"}>
        <WelcomeToSaniiro />
      </Stack>
      <ExploreAbout />

      <OurJourney />
      <OurNetwork />
      <ProductSlider />
      <Stack gap={5} maxWidth={"1536px"} margin={"0 auto"}>
        <Name />
        <Clock />
        <Awards />
      </Stack>
      <Footer />
    </>
  );
};

export default About;
