import { Stack } from "@mui/material";
import React from "react";
import Industries from "./IndustriesByusecases/Industries";
import Industry2 from "./IndustriesByusecases/Industry2";
import Footer from "../utils/Footer";
import Signupfree from "./Signupfree";

const SolutionByusecases = () => {
  return (
    <>
      <Industries />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Industry2 />
      </Stack>
      <Signupfree />
      <Footer />
    </>
  );
};

export default SolutionByusecases;
