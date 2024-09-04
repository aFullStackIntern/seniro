// import { Box, Stack, Typography } from "@mui/material";
// import React from "react";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import fedXImg from "../../assets/image 167.png";

// const TestmonialCard = ({ review, toggleReview }) => {
//   return (
//     <Stack
//       width={{
//         xs: "300px",
//         md: "350px",
//         lg: "300px",
//         xl: "350px",
//       }}
//       height={"100%"}
//       borderRadius={"6.98px"}
//       border={"1px solid gray"}
//       backgroundColor={"white"}
//     >
//       <Stack
//         padding={{
//           xs: "10px",
//           md: "20px",
//         }}
//       >
//         <Stack
//           direction={"column"}
//           justifyContent={"space-between"}
//           alignItems={"left"}
//           paddingX={{
//             xs: "10px",
//             md: "29px",
//           }}
//           paddingY={{
//             xs: "10px",
//             md: "29px",
//           }}
//         >
//           <Box
//             component="img"
//             sx={{
//               width: "101.52px",
//               height: "32.71px",
//               marginBottom: "15px",
//             }}
//             alt="Fedx Image"
//             src={fedXImg}
//           />
//           <Typography
//             sx={{
//               fontFamily: "Work Sans",
//               fontSize: {
//                 xs: "16px",
//                 md: "20px",
//               },
//               fontWeight: 400,
//               lineHeight: "25px",
//               letterSpacing: "-0.02em",
//               textAlign: "left",
//               marginBottom: "10px",
//             }}
//           >
//             {review.expanded ? (
//               <>
//                 {review.Review}{" "}
//                 {review.Review.length > 130 && (
//                   <span
//                     style={{
//                       color: "#052973",
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                     }}
//                     onClick={toggleReview}
//                   >
//                     View Less
//                   </span>
//                 )}
//               </>
//             ) : (
//               <>
//                 {review.Review.substring(0, 130)}...{" "}
//                 {review.Review.length > 130 && (
//                   <span
//                     style={{
//                       color: "#052973",
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                     }}
//                     onClick={toggleReview}
//                   >
//                     View More
//                   </span>
//                 )}
//               </>
//             )}
//           </Typography>
//           <Typography
//             sx={{
//               fontFamily: "Work Sans",
//               fontSize: "14px",
//               fontWeight: 600,
//               lineHeight: "14px",
//               letterSpacing: "-0.02em",
//               textAlign: "left",
//               marginBottom: "10px",
//               color: "#006FCE",
//             }}
//           >
//             Read More
//             <ArrowRightAltIcon
//               sx={{
//                 fontSize: "14px",
//                 marginLeft: "5px",
//               }}
//             />
//           </Typography>
//           <Stack>
//             <Typography
//               sx={{
//                 fontFamily: "Work Sans",
//                 fontSize: "18px",
//                 fontWeight: 500,
//                 lineHeight: "18px",
//                 letterSpacing: "-0.02em",
//                 textAlign: "left",
//                 marginBottom: "5px",
//               }}
//             >
//               {review.Name}
//             </Typography>
//             <Typography
//               sx={{
//                 fontFamily: "Work Sans",
//                 fontSize: "10px",
//                 fontWeight: 400,
//                 lineHeight: "10px",
//                 letterSpacing: "-0.02em",
//                 opacity: "60%",
//                 textAlign: "left",
//               }}
//             >
//               {review.Designation}
//             </Typography>
//           </Stack>
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };

// export default TestmonialCard;

// import { Box, Stack, Typography } from "@mui/material";
// import React from "react";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import fedXImg from "../../assets/image 167.png";

// const TestmonialCard = ({ review, toggleReview }) => {
//   return (
//     <Stack
//       width={{
//         xs: "300px",
//         md: "350px",
//         lg: "300px",
//         xl: "350px",
//       }}
//       height={"100%"}
//       borderRadius={"6.98px"}
//       border={"1px solid gray"}
//       backgroundColor={"white"}
//     >
//       <Stack
//         padding={{
//           xs: "10px",
//           md: "20px",
//         }}
//       >
//         <Stack
//           direction={"column"}
//           justifyContent={"space-between"}
//           alignItems={"left"}
//           paddingX={{
//             xs: "10px",
//             md: "29px",
//           }}
//           paddingY={{
//             xs: "10px",
//             md: "29px",
//           }}
//         >
//           <Box
//             component="img"
//             sx={{
//               width: "101.52px",
//               height: "32.71px",
//               marginBottom: "15px",
//             }}
//             alt="Fedx Image"
//             src={fedXImg}
//           />
//           <Typography
//             sx={{
//               fontFamily: "Work Sans",
//               fontSize: {
//                 xs: "16px",
//                 md: "20px",
//               },
//               fontWeight: 400,
//               lineHeight: "25px",
//               letterSpacing: "-0.02em",
//               textAlign: "left",
//               marginBottom: "10px",
//             }}
//             height={review.length <= 100 ? "42px" : "fit-content"}
//           >
//             {review.expanded ? (
//               <>
//                 {review.Review}{" "}
//                 {review.Review.length > 100 && (
//                   <span
//                     style={{
//                       color: "#052973",
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                     }}
//                     onClick={toggleReview}
//                   >
//                     View Less
//                   </span>
//                 )}
//               </>
//             ) : (
//               <>
//                 {review.Review.substring(0, 100)}...{" "}
//                 {review.Review.length > 100 && (
//                   <span
//                     style={{
//                       color: "#052973",
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                     }}
//                     onClick={toggleReview}
//                   >
//                     View More
//                   </span>
//                 )}
//               </>
//             )}
//           </Typography>
//           <Typography
//             sx={{
//               fontFamily: "Work Sans",
//               fontSize: "14px",
//               fontWeight: 600,
//               lineHeight: "14px",
//               letterSpacing: "-0.02em",
//               textAlign: "left",
//               marginBottom: "10px",
//               color: "#006FCE",
//             }}
//           >
//             Read More
//             <ArrowRightAltIcon
//               sx={{
//                 fontSize: "14px",
//                 marginLeft: "5px",
//               }}
//             />
//           </Typography>
//           <Stack>
//             <Typography
//               sx={{
//                 fontFamily: "Work Sans",
//                 fontSize: "18px",
//                 fontWeight: 500,
//                 lineHeight: "18px",
//                 letterSpacing: "-0.02em",
//                 textAlign: "left",
//                 marginBottom: "5px",
//               }}
//             >
//               {review.Name}
//             </Typography>
//             <Typography
//               sx={{
//                 fontFamily: "Work Sans",
//                 fontSize: "10px",
//                 fontWeight: 400,
//                 lineHeight: "10px",
//                 letterSpacing: "-0.02em",
//                 opacity: "60%",
//                 textAlign: "left",
//               }}
//             >
//               {review.Designation}
//             </Typography>
//           </Stack>
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };

// export default TestmonialCard;

import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import fedXImg from "../../assets/image 167.png";
import Image from "next/image";

const TestmonialCard = ({ review, toggleReview }) => {
  return (
    <Stack
      width={{
        xs: "300px",
        md: "350px",
        lg: "300px",
        xl: "350px",
      }}
      borderRadius={"6.98px"}
      border={"1px solid gray"}
      backgroundColor={"white"}
    >
      <Stack
        padding={{
          xs: "10px",
          md: "20px",
        }}
      >
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          alignItems={"left"}
          paddingX={{
            xs: "10px",
            md: "29px",
          }}
          paddingY={{
            xs: "10px",
            md: "29px",
          }}
        >
          <Image width={101.52} height={32.71} alt="Fedx Image" src={fedXImg} />
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: {
                xs: "16px",
                md: "20px",
              },
              fontWeight: 400,
              lineHeight: "25px",
              letterSpacing: "-0.02em",
              textAlign: "left",

              marginTop: "15px",
              marginBottom: "10px",
            }}
          >
            {review.expanded ? (
              <>
                {review.Review}{" "}
                {review.Review.length > 100 && (
                  <span
                    style={{
                      color: "#052973",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                    onClick={toggleReview}
                  >
                    View Less
                  </span>
                )}
              </>
            ) : (
              <>
                {review.Review.substring(0, 100)}...{" "}
                {review.Review.length > 100 && (
                  <span
                    style={{
                      color: "#052973",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                    onClick={toggleReview}
                  >
                    View More
                  </span>
                )}
              </>
            )}
          </Typography>
          <Stack>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "18px",
                letterSpacing: "-0.02em",
                textAlign: "left",
                marginBottom: "5px",
              }}
            >
              {review.Name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "10px",
                fontWeight: 400,
                lineHeight: "10px",
                letterSpacing: "-0.02em",
                opacity: "60%",
                textAlign: "left",
              }}
            >
              {review.Designation}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TestmonialCard;
