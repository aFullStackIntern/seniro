import React from "react";
import Featured from "./Featured";
import FeaturesMain from "./FeaturesMain";
import Readytosign from "../Contact/parts/Readytosign";
import Footer from "../utils/Footer";
import { Stack } from "@mui/material";

const Featuredd = () => {
  return (
    <>
      <Featured />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <FeaturesMain />
      </Stack>
      <Readytosign />
      <Footer />
    </>
  );
};

export default Featuredd;
