import React from "react";
import Nav from "../../Navbar/Nav";
import Industry1 from "./parts/Industry1";
import Industry2 from "./parts/Industry2";
import Industry3 from "./parts/Industry3";
import Industry4 from "./parts/Industry4";
import Industry5 from "./parts/Industry5";
import Industry6 from "./parts/Industry6";
import { Stack } from "@mui/material";
import Signupfree from "../../Solutions/Signupfree";
import Footer from "../../utils/Footer";

const IndustriesByrole = () => {
  return (
    <>
      <Nav />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Stack
          pb={{
            xs: "50px",
            md: "100px",
          }}
          gap={{
            xs: "20px",
            md: "40px",
            lg: "60px",
          }}
        >
          <Industry1 />
          <Industry2 />
        </Stack>
      </Stack>
      <Industry3 />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Stack
          pb={{
            xs: "50px",
            md: "100px",
          }}
          gap={{
            xs: "20px",
            md: "40px",
            lg: "60px",
          }}
        >
          <Industry4 />
          <Industry5 />
          <Industry6 />
        </Stack>
      </Stack>
      <Signupfree />
      <Footer />
    </>
  );
};

export default IndustriesByrole;
