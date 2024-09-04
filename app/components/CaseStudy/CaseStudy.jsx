import React from "react";
import CaseStudyBanner from "./parts/CaseStudyBanner";
import CompanyBanner from "./parts/CompanyBanner";
import ReviewSection from "./parts/ReviewSection";
import Footer from ".././utils/Footer";
import { Stack } from "@mui/material";
import TestimonialsCardsSection from "./CaseStudyCardsSection";
const CaseStudy = () => {
  return (
    <>
      <CaseStudyBanner />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <CompanyBanner />
      </Stack>
      <TestimonialsCardsSection />
      <Footer />
    </>
  );
};

export default CaseStudy;
