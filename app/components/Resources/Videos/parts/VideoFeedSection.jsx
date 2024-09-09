"use client";

import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import videoImg from "../../../assets/Rectangle 4301.png";
import Link from "next/link";

import { useData } from "../../../context/Authcontext";
import axios from "axios";

const VideoCategories = [
  { id: 1, category: "Industries" },
  { id: 2, category: "Security" },
  { id: 3, category: "Services" },
  { id: 4, category: "Platform" },
  { id: 5, category: "Global Presence" },
  { id: 6, category: "Partners" },
  { id: 7, category: "Why Zoho?" },
];

const VideoFeedSection = () => {
  const [videos, setVideos] = useState([]);
  const { categories } = useData();
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    handleCategoryClick("Industries", 1);
  }, []);

  const handleCategoryClick = async (category, Id) => {
    const url = "http://dev.saniiro.net/api/v1/videos";
    const { data } = await axios.get(url, {
      params: {
        classificationId: Id,
      },
    });

    setVideos(data.Data.VideoResources);
    setSelectedCategory(category);
  };

  return (
    <>
      <Stack
        display={{
          lg: "flex",
          xs: "none",
        }}
        width={"90%"}
        margin={"40px auto"}
        direction={"row"}
        justifyContent={"center"}
        gap={4}
      >
        <Stack width={"20%"} display={"sticky"}>
          {/* Category Sidebar */}
          <Stack margin={"20px auto 0"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "21px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#34A853",
              }}
            >
              CRM FOR BEGINNERS
            </Typography>
            <hr
              style={{
                width: "80%",
                border: "1px solid #34A853",
                marginTop: "6px",
                marginBottom: "30px",
              }}
            />
            <Stack
              direction={"column"}
              justifyContent={"center"}
              paddingLeft={"10%"}
              gap={3}
            >
              {categories.map((category) => (
                <Typography
                  key={categories.Id}
                  onClick={() => {
                    handleCategoryClick(category.Name, category.Id);
                  }}
                  style={{
                    cursor: "pointer",
                    color:
                      selectedCategory === category.ShortName
                        ? "#34A853"
                        : "inherit",
                  }}
                >
                  {category.ShortName}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Stack width={"80%"} direction={"column"}>
          <Stack padding={"10px 30px "}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "25px",
                  fontWeight: 700,
                  lineHeight: "37px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#000000",
                }}
              >
                CRM for Beginners
              </Typography>
            </Stack>
            <hr
              style={{
                width: "100%",
                border: "1px solid #34A853",
                marginTop: "3px",
                marginBottom: "20px",
              }}
            />
            {videos ? (
              <Stack
                direction={"row"}
                gap={8}
                flexWrap={"wrap"}
                justifyContent={"left"}
              >
                {videos.map((video) => (
                  <Link
                    onClick={handleClick}
                    key={video.Id}
                    href={`/Resources/Videos/${video.Slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <VideoCard
                      key={video.Id}
                      img={video.Thumbnail}
                      title={video.Title}
                    />
                  </Link>
                ))}
              </Stack>
            ) : (
              <Typography variant="body1">No videos found.</Typography>
            )}
          </Stack>
        </Stack>
      </Stack>

      <Stack
        display={{
          xs: "flex",
          xl: "none",
        }}
        margin={"0 auto"}
        marginTop={"40px"}
        marginBottom={"40px"}
        width={{
          lg: "100%",
          xs: "95%",
        }}
        direction={{
          lg: "row",
          xs: "column",
        }}
        justifyContent={"center"}
        gap={4}
      >
        <Stack
          display={{
            xs: "flex",
            lg: "none",
          }}
          width={{
            lg: "100%",
            md: "100%",
            xs: "100%",
          }}
        >
          <Stack>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "21px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#34A853",
              }}
            >
              CRM FOR BEGINNERS
            </Typography>
            <hr
              style={{
                width: "70%",
                border: "1px solid #34A853",
                marginTop: "3px",
                marginBottom: "30px",
              }}
            />
            <Stack
              direction={"row"}
              justifyContent={"center"}
              gap={3}
              sx={{
                overflowY: "scroll",
                scrollbarWidth: "none",
                scrollbarColor: "transparent transparent",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {VideoCategories.map((category) => (
                <Typography
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      borderBottom: "1px solid grey",
                    },
                  }}
                  key={category.id}
                  onClick={() => handleCategoryClick(category.category)}
                  style={{
                    cursor: "pointer",
                    color:
                      selectedCategory === category.category
                        ? "#34A853"
                        : "inherit",
                  }}
                >
                  {category.category}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Stack
          width={{
            lg: "1020px",
            md: "100%",
          }}
          direction={"column"}
        >
          <Stack
            padding={{
              lg: "10px 30px ",
              xs: 0,
            }}
            width={"100%"}
            margin={"0 auto"}
          >
            <Stack
              margin={"0 auto"}
              width={"90%"}
              direction={{
                lg: "row",
                xs: "column",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "25px",
                  fontWeight: 700,
                  lineHeight: "37px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#000000",
                }}
              >
                CRM for Beginners
              </Typography>
              <Stack
                width={{
                  lg: "250px",
                  xs: "100%",
                }}
                m={"0 auto"}
                height={"40px"}
                marginBottom={{
                  lg: "10px",
                }}
              >
                <input
                  type="text"
                  placeholder="Search Videos"
                  style={{ height: "40px", width: "80%" }}
                />
              </Stack>
            </Stack>
            <hr
              style={{
                width: "100%",
                border: "1px solid #34A853",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
            {videos ? (
              <Stack
                direction={"row"}
                gap={5}
                flexWrap={"wrap"}
                justifyContent={"center"}
              >
                {videos.map((video) => (
                  <Link
                    onClick={handleClick}
                    key={video.id}
                    href={`/Resources/Videos/${video.Slug}`} // Corrected link generation
                    style={{ textDecoration: "none" }} // Ensure proper styling for Link
                  >
                    <VideoCard
                      key={video.Id}
                      img={video.Thumbnail}
                      title={video.Title}
                    />
                  </Link>
                ))}
              </Stack>
            ) : (
              <Typography variant="body1">No videos found.</Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default VideoFeedSection;
