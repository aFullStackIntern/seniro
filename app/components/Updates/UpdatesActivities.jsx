import React from "react";
import Nav from "../Navbar/Nav";
import UpdatesBanner from "./parts/UpdatesBanner";
import UpdatesBodyTop from "./parts/UpdatesBodytop";
import UpdatesBodyContent from "./parts/UpdatesBodyContent";
import Footer from "../utils/Footer";
import { Stack } from "@mui/material";
const FaqActivities = () => {
  return (
    <>
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Nav />
        <UpdatesBanner />
        <UpdatesBodyTop />
        <UpdatesBodyContent />
      </Stack>
      <Footer />
    </>
  );
};

export default FaqActivities;
