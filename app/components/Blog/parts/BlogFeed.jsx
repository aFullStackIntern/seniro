// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Box,
//   InputAdornment,
//   Stack,
//   Typography,
//   TextField,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import DescriptionIcon from "@mui/icons-material/Description";
// import BlogCard from "./BlogCard";
// import TagSection from "./TagSection";
// import CustomPagination from "./Pagination";
// import Link from 'next/link';

// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { Tags, Blogs, FeaturedPosts } from "./TagsBlogsData";
// const BlogFeed = () => {

//    const [blogs, setBlogs] = useState([]);
//    const [currentPage, setCurrentPage] = useState(1);
//    const [blogsPerPage] = useState(10);
//    const [Featured, setFeatured] = useState([]);
//    const [tags, setTags] = useState([]);

//    const fetchBlogs = async () => {
//      try {
//        const { data } = await axios.get(
//          "http://dev.saniiro.net/api/v1/blog"
//        );
//        setTags(data.Data.Tags);
//        setBlogs(data.Data.Blogs);
//        setFeatured(data.Data.Populars);
//      } catch (error) {
//        console.error("Error fetching blogs:", error);
//      }
//    };

//   //  const transformTags = (tagsData) => {
//   //    const transformedTags = {};
//   //    tagsData.forEach((tag) => {
//   //      if (!transformedTags[tag.Category]) {
//   //        transformedTags[tag.Category] = {
//   //          id: tag.Id,
//   //          title: tag.Category,
//   //          tags: [],
//   //        };
//   //      }
//   //      transformedTags[tag.Category].tags.push(tag.Tag);
//   //    });
//   //    return Object.values(transformedTags);
//   //  };

//    useEffect(() => {
//      fetchBlogs();
//    }, []);
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const [filterClicked, setFilterClicked] = useState(false);
//   const [activeTags, setActiveTags] = useState([]);
//   const handleFilterClick = () => {
//     setFilterClicked(!filterClicked);
//   };
//   const handleSetActiveTags = (tags) => {
//     setActiveTags(tags);
//     setCurrentPage(1);
//   };
//   // useEffect(() => {
//   //   fetchBlogs().then(({ Tagsside, Blogsside, Featuredaside })=>{
//   //     const categorizedFAQs = categorizeFAQs(Tagsside);
//   //     setTagss(categorizedFAQs);
//   //     setBlogs(Blogsside);
//   //     setFeatured(Featuredaside);
//   //   })

//   // }, [])
//   return (

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BlogCard from "./BlogCard";
import TagSection from "./TagSection";
import CustomPagination from "./Pagination";
import Link from "next/link";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Tags, Blogs, FeaturedPosts } from "./TagsBlogsData";
import DescriptionIcon from "@mui/icons-material/Description";
const BlogFeed = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(10);
  const [Featured, setFeatured] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTags, setActiveTags] = useState([]);
  const [isTagActive, setIsTagActive] = useState(false);
  const [searchPosts, setSearchPosts] = useState("");

  const fetchBlogs = async () => {
    try {
      const tagIds = activeTags.join(","); // Join the activeTags array to create a comma-separated string

      const { data } = await axios.get("http://dev.saniiro.net/api/v1/blog", {
        params: {
          SearchTerm: searchPosts,
          TagIds: tagIds, // Send the tag IDs as a query parameter
          PageNumber: currentPage,
          PageSize: blogsPerPage,
        },
      });

      setTags(data.Data.Tags);
      setBlogs(data.Data.Blogs);
      setFeatured(data.Data.Populars);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [currentPage, activeTags]); // Fetch blogs when the page or active tags change

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [filterClicked, setFilterClicked] = useState(false);

  const handleFilterClick = () => {
    setFilterClicked(!filterClicked);
  };

  const handleSetActiveTags = (tags) => {
    setActiveTags(tags);
    setCurrentPage(1);
  };
  const handleTagClick = (isActive) => {
    setIsTagActive(isActive);
  };

  return (
    <Stack
      maxWidth={"1536px"}
      margin={"0 auto"}
      alignSelf={"center"}
      position="relative"
      width={{
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "1200px",
      }}
    >
      <Stack
        width={"100%"}
        direction="column"
        gap={2}
        sx={{
          marginTop: "0px",
          paddingTop: "30px",
        }}
        m={"0 auto"}
        justifyContent={{
          xs: "center",
        }}
      >
        <Stack
          display={{
            xs: "flex",
            lg: "none",
          }}
          m={"0 auto"}
          width={"95%"}
        >
          <Stack width={"100%"}>
            <TextField
              sx={{
                height: "50px",
              }}
              id="outlined-basic"
              label="Search Posts"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{
                        color: "gray",
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack
            borderRadius={"5px"}
            pb={2}
            mt={2}
            style={
              filterClicked
                ? {
                    border: "1px solid lightgray",
                    backgroundColor: "#dbe1f9",
                  }
                : {}
            }
          >
            <Stack
              onClick={handleFilterClick}
              border={"1px solid lightgray"}
              borderRadius={"5px"}
              p={2}
              minWidth={"50%"}
              direction={"row"}
              justifyContent={"space-between"}
              backgroundColor={"#F6F8FF"}
            >
              {" "}
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "21px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
                width={"100%"}
                color={"#4DB267"}
              >
                Filter Blogs{" "}
              </Typography>
              <ArrowDropDownIcon />
            </Stack>
            {filterClicked && (
              <Stack width={"90%"} m={"0 auto"}>
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
                      width={"100%"}
                    >
                      TAGS
                    </Typography>
                  </Box>
                </Stack>
                <TagSection
                  activeTags={activeTags}
                  setActiveTags={handleSetActiveTags}
                  Tagss={tags}
                />
              </Stack>
            )}
          </Stack>
        </Stack>

        {/*         blog cards  */}
        {blogs.length === 0 ? (
          <Typography
            width={{
              xs: "95%",
            }}
            sx={{
              ml: "5vw",
              height: "70vh",
            }}
          >
            No posts available
          </Typography>
        ) : (
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
            {currentBlogs.map((blog) => (
              <Link
                href={{
                  pathname: `/Resources/Blog/${blog.Slug}/${blog.Id}`,
                  // state: { blogId: blog.Id },
                }}
                key={blog.Id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <BlogCard blog={blog} />
              </Link>
            ))}
          </Stack>
        )}

        <CustomPagination
          blogsPerPage={blogsPerPage}
          totalBlogs={blogs.length}
          paginate={paginate}
        />
      </Stack>
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
              <Link
                href={{
                  pathname: `/Resources/Blog/${post.Slug}/${post.Id}`,
                }}
                key={index}
                style={{ textDecoration: "none", color: "inherit" }}
              >
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
                      {post.Title.length > 50
                        ? `${post.Title.substring(0, 50)}...`
                        : post.title}
                    </Typography>
                  </Stack>
                </Stack>
              </Link>
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
          height: isTagActive ? "80vh" : "auto", // Apply height when a tag is active
          overflowY: isTagActive ? "auto" : "visible",
        }}
      >
        <Stack>
          <TextField
            sx={{
              width: "330px",
              height: "50px",
            }}
            id="outlined-basic"
            label="Search Posts"
            variant="outlined"
            onChange={(e) => {
              setSearchPosts(e.target.value);
              fetchBlogs();
            }}
            value={searchPosts}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      color: "gray",
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                    // onChange={() => fetchBlogs()}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
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
              <Link
                href={{
                  pathname: `/Resources/Blog/${post.Slug}/${post.Id}`,
                }}
                key={index}
                style={{ textDecoration: "none", color: "inherit" }}
              >
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
              </Link>
            ))}
          </Stack>
        </Stack>
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
              TAGS
            </Typography>
          </Box>
        </Stack>
        <TagSection
          activeTags={activeTags}
          setActiveTags={handleSetActiveTags}
          Tagss={tags}
          onTagClick={handleTagClick}
        />
      </Stack>
    </Stack>
  );
};

export default BlogFeed;
