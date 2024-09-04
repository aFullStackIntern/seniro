import React from "react";
import SolutionsBanner from "./parts/SolutionsBanner";
import Nav from "../Navbar/Nav";
import SolutionSection2 from "./parts/SolutionSection2";
import SolutionSection3 from "./parts/SolutionSection3";
import Footer from "../utils/Footer";
import ReadytoBuild from "./parts/ReadytoBuild";
import { Stack } from "@mui/material";

const Solutions = () => {
  return (
    <>
      <Nav />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <SolutionsBanner />
      </Stack>
      <SolutionSection2 />
      <SolutionSection3 />
      <ReadytoBuild />

      <Footer />
    </>
  );
};

export default Solutions;
