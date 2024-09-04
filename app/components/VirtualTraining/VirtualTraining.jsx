import { Stack } from "@mui/material";
import React from "react";
import Nav from "../Navbar/Nav";
import BuildingSuccess from "./parts/BuildingSuccess";
import VirtualFaq from "./parts/VirtualFaq";
import Clock from "./parts/Clock";
import Footer from "../utils/Footer";

const VirtualTraining = () => {
  return (
    <Stack>
      <Nav />

      <BuildingSuccess />
      <VirtualFaq />
      <Clock />
      <Footer />
    </Stack>
  );
};

export default VirtualTraining;
