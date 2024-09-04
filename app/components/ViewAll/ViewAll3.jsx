import { Stack } from "@mui/material";
import React from "react";
import BannerVirtualTraining from "./parts/BannerVirtualTraining";
import Footer from "../utils/Footer";
import WhatOpt from "./parts/WhatOpt";
import ContactFaq from "../Home/parts/ContactFaq";
const ViewAll2 = () => {
  return (
    <>
      <BannerVirtualTraining />
      <WhatOpt />
      <ContactFaq />
      <Footer />
    </>
  );
};

export default ViewAll2;
