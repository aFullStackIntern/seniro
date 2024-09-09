import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import FortImage from "../../assets/image 164.png";
import TagSection from "./TagSection";
import CommentForm from "./CommentForm";
import RelatedPost from "./RelatedPost";
import { Tags, Blogs, FeaturedPosts } from "./TagsBlogsData";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { usePathname, useRouter } from "next/navigation";

import axios from "axios";
const BlogFeed = () => {
  const [activeTags, setActiveTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(10);
  const [tags, setTags] = useState([]);
  const [Featured, setFeatured] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const blogMatchesTags = (blog) => {
    return (
      activeTags.every((tag) => blog.region.includes(tag)) ||
      activeTags.every((tag) => blog.sector.includes(tag)) ||
      activeTags.every((tag) => blog.size.includes(tag)) ||
      activeTags.every((tag) => blog.others.includes(tag))
    );
  };
  const pathname = usePathname();
  const segments = pathname.split("/");
  const slug = segments[3];
  const BlogId = segments[4];
  const transformTags = (tagsData) => {
    const transformedTags = {};
    tagsData.forEach((tag) => {
      if (!transformedTags[tag.Category]) {
        transformedTags[tag.Category] = {
          id: tag.Id,
          title: tag.Category,
          tags: [],
        };
      }
      transformedTags[tag.Category].tags.push(tag.Tag);
    });
    return Object.values(transformedTags);
  };
  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(
        `http://dev.saniiro.net/api/v1/blog/?slug=${slug}`
      );
      setTags(transformTags(data.Data.Tags));
      setBlogs(data.Data.Blogs);
      setFeatured(data.Data.Populars);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = Blogs.filter(blogMatchesTags).slice(
    indexOfFirstBlog,
    indexOfLastBlog
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSetActiveTags = (tags) => {
    setActiveTags(tags);
    setCurrentPage(1);
  };

  const [filterClicked, setFilterClicked] = useState(false);
  const handleFilterClick = () => {
    setFilterClicked(!filterClicked);
  };
  return (
    <Stack
      backgroundColor={"#F6F8FF"}
      minHeight={{
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
      }}
      m={"0 auto"}
    >
      <Stack>
        <Stack
          alignSelf={"center"}
          position="relative"
          width={{
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "90%",
          }}
        >
          <Stack
            width={{
              xs: "100%",
              lg: "63%",
            }}
            direction="column"
            gap={2}
            sx={{
              marginTop: "0px",
              paddingTop: "30px",
            }}
            justifyContent={{
              xs: "center",
            }}
          >
            {blogs.map((blog, index) => (
              <Stack
                width={{
                  xs: "95%",
                }}
                m={"0 auto"}
                direction="row"
                flexWrap="wrap"
                gap={2}
                justifyContent={{
                  xs: "center",
                  lg: "left",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "20px",
                      md: "30px",
                      lg: "40px",
                    },
                    fontWeight: 600,
                    lineHeight: "47px",
                    letterSpacing: "0em",
                    textAlign: {
                      xs: "center",
                      lg: "left",
                    },
                  }}
                >
                  {blog.Title}
                </Typography>
                <Stack
                  width={"100%"}
                  direction={"column"}
                  justifyContent={"center"}
                  height={"40px"}
                  borderTop={"1px solid rgba(0, 0, 0, 0.3)"}
                  borderBottom={"1px solid rgba(0, 0, 0, 0.3)"}
                  padding={"10px 20px"}
                >
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Stack width={"70%"} direction={"row"} gap={3}>
                      <Box
                        sx={{
                          paddingRight: "20px",
                          borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                          fontFamily: "Work Sans",
                          fontSize: {
                            xs: "10px",
                            lg: "16px",
                          },
                          fontWeight: 500,
                          lineHeight: "22px",
                          letterSpacing: "0em",
                          textAlign: "left",
                        }}
                      >
                        Posted On {blog.CreatedOn}
                      </Box>
                      <Stack
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: {
                            xs: "10px",
                            lg: "16px",
                          },
                          fontWeight: 500,
                          lineHeight: "22px",
                          letterSpacing: "0em",
                          textAlign: "left",
                        }}
                      >
                        By {blog.CreatedBy}
                      </Stack>
                    </Stack>
                    <Stack
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: {
                          xs: "10px",
                          lg: "16px",
                        },
                        fontWeight: 600,
                        lineHeight: "22px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      9 Mins Read
                    </Stack>
                  </Stack>
                </Stack>

                {/* content  */}
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: blog.Description,
                  }}
                />

                <Box
                  marginTop={"20px"}
                  width={"100%"}
                  height={"1px"}
                  sx={{
                    backgroundColor: "gray",
                    marginBottom: "20px",
                  }}
                />
                <CommentForm BlogId={BlogId} />
                <RelatedPost />
              </Stack>
            ))}

            <Stack
              m={"0 auto"}
              width={"95%"}
              display={{
                xs: "flex",
                lg: "none",
              }}
            >
              <Box marginTop="30px" border="0.5px solid rgba(0, 0, 0, 0.3)" />
              <Stack>
                <Box marginTop="25px">
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "21px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    FEATURED POSTS
                  </Typography>
                </Box>
                <Stack>
                  {Featured.map((post, index) => (
                    <Stack key={index} gap={1} marginTop="27px">
                      <Stack direction="row" gap={1}>
                        <DescriptionIcon />
                        <Typography
                          key={index}
                          sx={{
                            fontFamily: "Work Sans",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            letterSpacing: "-0.02em",
                            textAlign: "left",
                          }}
                        >
                          {post.Title}
                        </Typography>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
              <Box marginTop="30px" border="0.5px solid rgba(0, 0, 0, 0.3)" />
            </Stack>
            <Stack
              display={{
                xs: "none",
                lg: "flex",
              }}
              sx={{
                position: "absolute",
                width: "330px",
                top: "30px",
                right: "30px",
              }}
            >
              <Box marginTop="30px" border="0.5px solid rgba(0, 0, 0, 0.3)" />
              <Stack width="324px">
                <Box marginTop="25px">
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "21px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    FEATURED POSTS
                  </Typography>
                </Box>
                <Stack>
                  {Featured.map((post, index) => (
                    <Stack key={index} gap={1} marginTop="27px">
                      <Stack direction="row" gap={1}>
                        <DescriptionIcon />
                        <Typography
                          key={index}
                          sx={{
                            fontFamily: "Work Sans",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            letterSpacing: "-0.02em",
                            textAlign: "left",
                          }}
                        >
                          {post.Title}
                        </Typography>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BlogFeed;
