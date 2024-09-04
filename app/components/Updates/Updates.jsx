import { Stack } from "@mui/material";
import React from "react";
import Nav from "../Navbar/Nav";
import UpdatesBanner from "./parts/UpdatesBanner";
import SearchSection from "./parts/SearchSection";
import UpdatesManagement from "./parts/UpdatesManagement";
import Footer from "./../utils/Footer";
const Faq = () => {
  return (
    <>
      <Nav />
      <UpdatesBanner />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <SearchSection />
        <UpdatesManagement />
      </Stack>
      <Footer />
    </>
  );
};

export default Faq;
