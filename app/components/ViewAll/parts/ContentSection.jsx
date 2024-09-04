import { Stack } from "@mui/material";
import React from "react";
import QuoteCard from "./QuoteCard";
import TweetCard from "./TweetCard";
const ContentSection = () => {
  return (
    <Stack
      width={{
        xs: "95%",
        sm: "90%",
        md: "85%",
        lg: "80%",
      }}
      hieight={"100%"}
      margin={"0 auto"}
      direction={{
        xs: "column",
        md: "row",
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        margin={"0 auto"}
        width={{
          md: "50%",
        }}
        gap={3}
      >
        <QuoteCard />
        <TweetCard />
      </Stack>
      <Stack
        margin={"0 auto"}
        width={{
          md: "50%",
        }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
      >
        <TweetCard />

        <QuoteCard />
      </Stack>
    </Stack>
  );
};

export default ContentSection;
