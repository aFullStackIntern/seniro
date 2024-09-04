import React from "react";
import ResourceBanner from "./parts/ResourceBanner";
import Readytosign from "../Contact/parts/Readytosign";
import Footer from "../utils/Footer";
import { Stack } from "@mui/material";
const Resources = () => {
  return (
    <>
      <ResourceBanner />
      <Readytosign />
      <Footer />
    </>
  );
};

export default Resources;
