// import { Box, Stack, Typography } from "@mui/material";
// import React, { useState } from "react";
// import FeedbackCard from "./TestmonialCard";
// import EastSharpIcon from "@mui/icons-material/EastSharp";
// import Link from 'next/link';

// import Review from "./data";
// import CustomPagination from "./Pagination";

// const TestimonialsCardsSection = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const jobsPerPage = 9; // Define the number of testimonials per page

//   // Divide the Review array into pages
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = Review.slice(indexOfFirstJob, indexOfLastJob);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Divide current jobs into 3 columns
//   const columns = [[], [], []];
//   currentJobs.forEach((review, index) => {
//     columns[index % 3].push(review);
//   });

//   return (
//     <>
//       {/* desktop view  */}
//       <Stack
//         display={{
//           xs: "none",
//           lg: "flex",
//         }}
//         backgroundColor={"#052973"}
//         paddingBottom={"50px"}
//       >
//         <Stack
//           maxWidth={"1536px"}
//           justifyContent={"center"}
//           width={"95%"}
//           margin={"60px auto"}
//           direction={"row"}
//           gap={3}
//         >
//           {/* Render the columns */}
//           {columns.map((column, columnIndex) => (
//             <Stack key={columnIndex} width={"30%"} direction={"column"} gap={3}>
//               {/* Render FeedbackCard components in each column */}
//               {column.map((review) => (
//                 <Link
//                   to={`/Resources/CaseStudy/${review.id}`}
//                   key={review.id}
//                   style={{ textDecoration: "none", color: "black" }}
//                   onClick={() => window.scrollTo(0, 0)}
//                 >
//                   <FeedbackCard key={review.id} {...review} />
//                 </Link>
//               ))}
//             </Stack>
//           ))}
//         </Stack>
//         <CustomPagination
//           jobsPerPage={jobsPerPage}
//           totalJobs={Review.length}
//           paginate={paginate}
//         />
//         <Stack
//           direction={"row"}
//           alignItems={"center"}
//           justifyContent={"center"}
//         >
//           {/* <EastSharpIcon
//           sx={{
//             transform: "rotate(180deg)",
//             color: "#FFFFFF",
//             "&:hover": {
//               color: "gray",
//               cursor: "pointer",
//             },
//           }}
//         /> */}
//           <Box
//             sx={{
//               width: "Hug (147px)",
//               height: "Hug (42px)",
//               padding: "12px 29px 12px 29px",
//               borderRadius: "4px",
//               gap: "20px",
//               backgroundColor: "#FFFFFF",
//               margin: "0px 40px 0px 40px",
//               border: "1px solid white",
//               "&:hover": {
//                 backgroundColor: "#F15B25",
//                 border: "1px solid white",
//                 color: "#FFFFFF",
//                 cursor: "pointer",
//               },
//             }}
//           >
//             <Typography
//               sx={{
//                 fontFamily: "Work Sans",
//                 fontSize: "19px",
//                 fontWeight: 600,
//                 lineHeight: "18px",
//                 letterSpacing: "0em",
//                 textAlign: "center",
//               }}
//             >
//               View all
//             </Typography>
//           </Box>

//           {/* <EastSharpIcon
//           sx={{
//             color: "#FFFFFF",
//             "&:hover": {
//               color: "gray",
//               cursor: "pointer",
//             },
//           }}
//         /> */}
//         </Stack>
//         <Stack>
//           <Stack
//             marginTop={"80px"}
//             direction={"column"}
//             alignItems={"center"}
//             justifyContent={"center"}
//             gap={1}
//           >
//             <Box>
//               <Typography
//                 sx={{
//                   fontFamily: "Work Sans",
//                   fontSize: "35px",
//                   fontWeight: 700,
//                   lineHeight: "46px",
//                   letterSpacing: "0em",
//                   textAlign: "center",
//                   color: "#FFFFFF",
//                 }}
//               >
//                 Share your experience with us
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontFamily: "Work Sans",
//                   fontSize: "18px",
//                   fontWeight: 400,
//                   lineHeight: "24px",
//                   letterSpacing: "0em",
//                   textAlign: "center",
//                   color: "#FFFFFF",
//                 }}
//               >
//                 We love to hear from you and we are always looking to improve
//                 our
//               </Typography>
//             </Box>
//             <Link
//               to="/Resources/Testimonials/share-your-experince-form"
//               style={{ textDecoration: "none", color: "black" }}
//             >
//               <Box
//                 onClick={() => window.scrollTo(0, 0)}
//                 sx={{
//                   marginTop: "30px",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   width: "200px",
//                   height: "20px",
//                   padding: "20px 54px 20px 54px",
//                   gap: "10px",
//                   backgroundColor: "#FFFFFF",
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontFamily: "Work Sans",
//                     fontSize: "19px",
//                     fontWeight: 600,
//                     lineHeight: "18px",
//                     letterSpacing: "0em",
//                     textAlign: "center",
//                     color: "#000000",
//                   }}
//                 >
//                   Share your Story
//                 </Typography>
//               </Box>
//             </Link>
//           </Stack>
//         </Stack>
//       </Stack>

//       {/* mobile view */}
//       <Stack
//         display={{
//           xs: "block",
//           lg: "none",
//         }}
//         backgroundColor={"#052973"}
//         paddingBottom={"50px"}
//         pt={3}
//       >
//         <Stack
//           width={"95%"}
//           direction={"row"}
//           flexWrap={"wrap"}
//           gap={2}
//           margin={"0 auto"}
//           justifyContent={"center"}
//         >
//           {columns.map((column, columnIndex) =>
//             column.map((review) => (
//               <Link
//                 to={`/Resources/CaseStudy/${review.id}`}
//                 key={review.id}
//                 style={{ textDecoration: "none", color: "black" }}
//                 onClick={() => window.scrollTo(0, 0)}
//               >
//                 <FeedbackCard key={review.id} {...review} />
//               </Link>
//             ))
//           )}
//         </Stack>
//         <CustomPagination
//           jobsPerPage={jobsPerPage}
//           totalJobs={Review.length}
//           paginate={paginate}
//         />
//         <Stack
//           direction={"row"}
//           alignItems={"center"}
//           justifyContent={"center"}
//         >
//           {/* <EastSharpIcon
//           sx={{
//             transform: "rotate(180deg)",
//             color: "#FFFFFF",
//             "&:hover": {
//               color: "gray",
//               cursor: "pointer",
//             },
//           }}
//         /> */}
//           <Box
//             sx={{
//               width: "Hug (147px)",
//               height: "Hug (42px)",
//               padding: "12px 29px 12px 29px",
//               borderRadius: "4px",
//               gap: "20px",
//               backgroundColor: "#FFFFFF",
//               margin: "0px 40px 0px 40px",
//               border: "1px solid white",
//               "&:hover": {
//                 backgroundColor: "#F15B25",
//                 border: "1px solid white",
//                 color: "#FFFFFF",
//                 cursor: "pointer",
//               },
//             }}
//           >
//             <Typography
//               sx={{
//                 fontFamily: "Work Sans",
//                 fontSize: "19px",
//                 fontWeight: 600,
//                 lineHeight: "18px",
//                 letterSpacing: "0em",
//                 textAlign: "center",
//               }}
//             >
//               View all
//             </Typography>
//           </Box>

//           {/* <EastSharpIcon
//           sx={{
//             color: "#FFFFFF",
//             "&:hover": {
//               color: "gray",
//               cursor: "pointer",
//             },
//           }}
//         /> */}
//         </Stack>
//         <Stack>
//           <Stack
//             marginTop={"80px"}
//             direction={"column"}
//             alignItems={"center"}
//             justifyContent={"center"}
//             gap={1}
//           >
//             <Box>
//               <Typography
//                 sx={{
//                   fontFamily: "Work Sans",
//                   fontSize: "35px",
//                   fontWeight: 700,
//                   lineHeight: "46px",
//                   letterSpacing: "0em",
//                   textAlign: "center",
//                   color: "#FFFFFF",
//                 }}
//               >
//                 Share your experience with us
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontFamily: "Work Sans",
//                   fontSize: "18px",
//                   fontWeight: 400,
//                   lineHeight: "24px",
//                   letterSpacing: "0em",
//                   textAlign: "center",
//                   color: "#FFFFFF",
//                 }}
//               >
//                 We love to hear from you and we are always looking to improve
//                 our
//               </Typography>
//             </Box>
//             <Box
//               sx={{
//                 marginTop: "30px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 width: "200px",
//                 height: "20px",
//                 padding: "20px 54px 20px 54px",
//                 gap: "10px",
//                 backgroundColor: "#FFFFFF",
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontFamily: "Work Sans",
//                   fontSize: "19px",
//                   fontWeight: 600,
//                   lineHeight: "18px",
//                   letterSpacing: "0em",
//                   textAlign: "center",
//                   color: "#000000",
//                 }}
//               >
//                 Share your Story
//               </Typography>
//             </Box>
//           </Stack>
//         </Stack>
//       </Stack>
//     </>
//   );
// };

// export default TestimonialsCardsSection;

import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

import { useRouter } from "next/navigation";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import TestmonialCard from "./CaseStudyCard";
import CustomPagination from "./CaseStudyPagination";

const TestimonialsCardsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState([]);
  const jobsPerPage = 9;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "http://dev.saniiro.net/api/v1/case-study"
        );
        setReviews(response.data.Data); // Assuming the response data is an array of reviews
      } catch (error) {
        console.error("Error fetching the reviews: ", error);
      }
    };

    fetchReviews();
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = reviews.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const columns = [[], [], []];
  currentJobs.forEach((review, index) => {
    columns[index % 3].push(review);
  });
  const router = useRouter();

  const handleExploreMoreClick = (slug) => {
    router.push(`/Resources/CaseStudy/${slug}`);
    window.scrollTo(0, 0);
  };
  return (
    <>
      {/* Desktop view */}
      <Stack
        display={{
          xs: "none",
          lg: "flex",
        }}
        backgroundColor={"#052973"}
        paddingBottom={"50px"}
      >
        <Stack
          maxWidth={"1536px"}
          justifyContent={"center"}
          width={"95%"}
          margin={"60px auto"}
          direction={"row"}
          gap={3}
        >
          {columns.map((column, columnIndex) => (
            <Stack key={columnIndex} width={"30%"} direction={"column"} gap={3}>
              {column.map((review) => (
                <Link
                  href={`/Resources/CaseStudy/${review.Slug}`}
                  key={review.id}
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <TestmonialCard
                    key={review.id}
                    review={review}
                    handleExploreMoreClick={handleExploreMoreClick}
                  />
                </Link>
              ))}
            </Stack>
          ))}
        </Stack>
        <CustomPagination
          jobsPerPage={jobsPerPage}
          totalJobs={reviews.length}
          paginate={paginate}
        />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            sx={{
              width: "Hug (147px)",
              height: "Hug (42px)",
              padding: "12px 29px 12px 29px",
              borderRadius: "4px",
              gap: "20px",
              backgroundColor: "#FFFFFF",
              margin: "0px 40px 0px 40px",
              border: "1px solid white",
              "&:hover": {
                backgroundColor: "#F15B25",
                border: "1px solid white",
                color: "#FFFFFF",
                cursor: "pointer",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "19px",
                fontWeight: 600,
                lineHeight: "18px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              View all
            </Typography>
          </Box>
        </Stack>
        <Stack>
          <Stack
            marginTop={"80px"}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "35px",
                  fontWeight: 700,
                  lineHeight: "46px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Share your experience with us
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                We love to hear from you and we are always looking to improve
                our
              </Typography>
            </Box>
            <Link
              href="/Resources/Testimonials/share-your-experience-form"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Box
                onClick={() => window.scrollTo(0, 0)}
                sx={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "200px",
                  height: "20px",
                  padding: "20px 54px 20px 54px",
                  gap: "10px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "19px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "#000000",
                  }}
                >
                  Share your Story
                </Typography>
              </Box>
            </Link>
          </Stack>
        </Stack>
      </Stack>

      {/* Mobile view */}
      <Stack
        display={{
          xs: "block",
          lg: "none",
        }}
        backgroundColor={"#052973"}
        paddingBottom={"50px"}
        pt={3}
      >
        <Stack
          width={"95%"}
          direction={"row"}
          flexWrap={"wrap"}
          gap={2}
          margin={"0 auto"}
          justifyContent={"center"}
        >
          {columns.map((column, columnIndex) =>
            column.map((review) => (
              <Link
                href={`/Resources/CaseStudy/${review.id}`}
                key={review.id}
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => window.scrollTo(0, 0)}
              >
                <TestmonialCard key={review.id} review={review} />
              </Link>
            ))
          )}
        </Stack>
        <CustomPagination
          jobsPerPage={jobsPerPage}
          totalJobs={reviews.length}
          paginate={paginate}
        />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            sx={{
              width: "Hug (147px)",
              height: "Hug (42px)",
              padding: "12px 29px 12px 29px",
              borderRadius: "4px",
              gap: "20px",
              backgroundColor: "#FFFFFF",
              margin: "0px 40px 0px 40px",
              border: "1px solid white",
              "&:hover": {
                backgroundColor: "#F15B25",
                border: "1px solid white",
                color: "#FFFFFF",
                cursor: "pointer",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "19px",
                fontWeight: 600,
                lineHeight: "18px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              View all
            </Typography>
          </Box>
        </Stack>
        <Stack>
          <Stack
            marginTop={"80px"}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "35px",
                  fontWeight: 700,
                  lineHeight: "46px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Share your experience with us
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                We love to hear from you and we are always looking to improve
                our
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "200px",
                height: "20px",
                padding: "20px 54px 20px 54px",
                gap: "10px",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "19px",
                  fontWeight: 600,
                  lineHeight: "18px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#000000",
                }}
              >
                Share your Story
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TestimonialsCardsSection;
