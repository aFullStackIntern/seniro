import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import searchImg from "./../../assets/icons/search.png";
import axios from "axios";
import Image from "next/image";

const SearchSection = ({ setQuestions }) => {
  const [searchValue, setSearchValue] = useState("");

  async function fetchQuestions() {
    const url = "http://dev.saniiro.net/api/v1/faq";

    const { data } = await axios.get(url, {
      params: {
        SearchTerm: searchValue,
      },
    });
    console.log(data.Data.FrequentAskQuestions);
    setQuestions(data.Data.FrequentAskQuestions);
  }

  function handleSearchQuestions() {
    fetchQuestions();
  }

  return (
    <>
      <Stack
        maxWidth={{
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1240px",
        }}
        direction={"column"}
        margin={"0px auto"}
      >
        <Stack
          direction={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          margin={"20px 0 20px"}
          gap={1}
          justifyContent={"center"}
        >
          <Stack
            margin={{
              xs: "0 auto",
              lg: "",
            }}
            width={{
              xs: "95%",
              lg: "870px",
            }}
            height={"53px"}
            position={"relative"}
          >
            <Image
              width={30}
              height={30}
              src={searchImg}
              alt="SearchBar"
              style={{
                position: "absolute",
                zIndex: 1,
                left: "10px",
                top: "10px",
              }}
            />
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              style={{
                width: {
                  xs: "95%",
                  lg: "745px",
                },
                height: "53px",
                border: "1px solid #8C8C8C",
                padding: "10px 60px ",
              }}
              placeholder="Search articles"
            />
          </Stack>
          <Stack
            direction={"row"}
            gap={2}
            width={{
              xs: "95%",
              lg: "33%",
            }}
            margin={{
              xs: "20px auto",
              lg: "0",
            }}
          >
            <Stack
              sx={{
                width: "100px",
                height: "33px",
                padding: "10px 30px",
                gap: "10px",
                justifyContent: "center",
                backgroundColor: "#F15B25",
                "&:hover": {
                  cursor: "pointer",
                  boxShadow: "1px 1px 5px 1px #000000",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "12px",
                  fontWeight: 700,
                  lineHeight: "12px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "white",
                }}
                onClick={handleSearchQuestions}
              >
                Search
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        {/* <Typography
          margin={"0 auto"}
          sx={{
            width: {
              xs: "95%",
              lg: "100%",
            },
            fontFamily: "Work Sans",
            fontSize: "9px",
            fontWeight: 400,
            lineHeight: "9px",
            letterSpacing: "0em",
            textAlign: "left",
            marginBottom: "20px",
          }}
        >
          CRM {`>`} SOLUTIONS {`>`} REAL ESTATE CRM
        </Typography> */}
      </Stack>
    </>
  );
};

export default SearchSection;
