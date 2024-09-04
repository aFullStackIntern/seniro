import { Stack } from "@mui/material";
import React from "react";
import ContactFaq from "./ContactFaq";

const VirtualFaq = () => {
  return (
    <Stack
      width={"100%"}
      gap={4}
      sx={{
        background: "linear-gradient(180deg, #052973 0%, #052973 100%)",
      }}
    >
        <ContactFaq/>
    </Stack>
  );
};

export default VirtualFaq;
