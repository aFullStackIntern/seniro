import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Nav from "../Navbar/Nav";
import FaqBanner from "./parts/FaqBanner";
import { Search } from "@mui/icons-material";
import SearchSection from "./parts/SearchSection";
import ActivityManagement from "./parts/ActivityManagement";
import Footer from "./../utils/Footer";
const Faq = () => {
  const [questions, setQuestions] = useState(null);
  // console.log(questions);
  return (
    <>
      <Nav />
      <FaqBanner />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <SearchSection setQuestions={setQuestions} />
        {questions ? (
          <Box margin={"0px auto"} sx={{ width: "75%", marginBottom: "30px" }}>
            {questions.map((question) => (
              <Box>
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  {question.Question}
                </Typography>
                <Typography
                  sx={{
                    marginBottom: "10px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: question.Brief,
                  }}
                />
              </Box>
            ))}
          </Box>
        ) : (
          <ActivityManagement />
        )}
      </Stack>
      <Footer />
    </>
  );
};

export default Faq;
