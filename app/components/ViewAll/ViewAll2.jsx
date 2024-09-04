import { Stack } from "@mui/material";
import React from "react";
import BannerTrainingForDev from "./parts/BannerTrainingForDev";
import LookingForOnline from "./parts/LookingForOnline";
import Queries from "./parts/Queries";
import Footer from "../utils/Footer";

const ViewAll2 = () => {
  return (
    <>
      <Stack>
        <BannerTrainingForDev />
        <Queries />
        <LookingForOnline />
      </Stack>
      <Footer />
    </>
  );
};

export default ViewAll2;
