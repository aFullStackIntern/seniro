import React from "react";
import PRicingBAnner from "./PRicingBAnner";
import PricingTab from "./PricingTab";
import Readytosign from "../Contact/parts/Readytosign";
// import PriceCardSection from "./PriceCardSection";
// import PriceTagSection from "./PracingTagSection";
// import PricingFeaturesTable from "./PricingFeaturesTable";
import Footer from "../utils/Footer";
import ContactFaq from "../Home/parts/ContactFaq";
import JoinBusinesses from "./JoinBusinesses";
import { Stack } from "@mui/material";
const Pricings = () => {
  return (
    <>
      <PRicingBAnner />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <PricingTab />
        <JoinBusinesses />
        <ContactFaq />
      </Stack>
      <Readytosign />
      <Footer />
    </>
  );
};

export default Pricings;
