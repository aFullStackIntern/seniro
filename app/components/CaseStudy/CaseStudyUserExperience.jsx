import React from "react";

import CaseStudyUserBanner from "./parts/CaseStudyUserBanner";
import ContentSection from "./parts/ContentSection";
import RecommendedSection from "./parts/RecommendedSection";
import Footer from ".././utils/Footer";
import { Stack } from "@mui/material";
const CaseStudyUserExperience = () => {
  return (
    <>
      <CaseStudyUserBanner />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <ContentSection />
        <RecommendedSection />
      </Stack>
      <Footer />
    </>
  );
};

export default CaseStudyUserExperience;
