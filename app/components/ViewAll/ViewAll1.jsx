import { Stack } from "@mui/material";
import React from "react";
import HeaderBanner from "./parts/HeaderBanner";
import ContentSection from "./parts/ContentSection";
import LookingAt from "./parts/LookingAt";
import Footer from "../utils/Footer";

const ViewAll1 = () => {
  return (
    <>
      <Stack>
        <HeaderBanner />
        <ContentSection />
        <LookingAt />
      </Stack>
      <Footer />
    </>
  );
};

export default ViewAll1;
