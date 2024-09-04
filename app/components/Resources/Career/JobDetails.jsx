import React from "react";
import Nav from "../../Navbar/Nav";
import JobDiscrption from "./parts/JobDiscrption";
import Footer from "../../utils/Footer";
import Readytosign from "../../Contact/parts/Readytosign";
import { Stack } from "@mui/material";

const JobDetails = () => {
  return (
    <>
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Nav />
        <JobDiscrption />
      </Stack>
      <Readytosign />
      <Footer />
    </>
  );
};

export default JobDetails;
