// import { Stack, Typography } from "@mui/material";
// import React from "react";
// import award1 from "../../assets/award1.svg";
// import review from "../../assets/review1.svg";
// const Awards = () => {
//   return (
//     <Stack alignItems={"center"} pb={6}>
//       <Stack
//         width={"90%"}
//         sx={{
//           flexDirection: {
//             xs: "column",
//             lg: "row",
//           },
//         }}
//         justifyContent={"center"}
//         gap={3}
//       >
//         <Stack
//           sx={{
//             width: {
//               xs: "100%",
//               lg: "40%",
//             },
//           }}
//           boxShadow={"1px 0px 2px 3px #F1F1F1"}
//         >
//           <Typography
//             color={"grey"}
//             fontSize={"20px"}
//             fontWeight={"bold"}
//             display={"flex"}
//             justifyContent={"center"}
//           >
//             Awards
//           </Typography>
//           <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
//             <Stack
//               sx={{
//                 width: {
//                   xs: "30%",
//                   md: "180px",
//                 },
//                 height: {
//                   xs: "20%",
//                   md: "110px",
//                 },
//               }}
//             >
//               <img
//                 src={award1}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Stack>
//             <Stack
//               sx={{
//                 width: {
//                   xs: "30%",
//                   md: "180px",
//                 },
//                 height: {
//                   xs: "20%",
//                   md: "110px",
//                 },
//               }}
//             >
//               <img
//                 src={award1}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Stack>
//             <Stack
//               sx={{
//                 width: {
//                   xs: "30%",
//                   md: "180px",
//                 },
//                 height: {
//                   xs: "20%",
//                   md: "110px",
//                 },
//               }}
//             >
//               <img
//                 src={award1}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Stack>
//             <Stack
//               sx={{
//                 width: {
//                   xs: "30%",
//                   md: "180px",
//                 },
//                 height: {
//                   xs: "20%",
//                   md: "110px",
//                 },
//               }}
//             >
//               <img
//                 src={award1}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Stack>
//             <Stack
//               sx={{
//                 width: {
//                   xs: "30%",
//                   md: "180px",
//                 },
//                 height: {
//                   xs: "20%",
//                   md: "110px",
//                 },
//               }}
//             >
//               <img
//                 src={award1}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Stack>
//           </Stack>
//         </Stack>
//         <Stack
//           sx={{
//             width: {
//               xs: "100%",
//               lg: "40%",
//             },
//           }}
//           boxShadow={"1px 0px 2px 3px #F1F1F1"}
//         >
//           <Typography
//             color={"grey"}
//             fontSize={"20px"}
//             fontWeight={"bold"}
//             display={"flex"}
//             justifyContent={"center"}
//           >
//             Reviews
//           </Typography>
//           <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
//             <Stack
//               sx={{
//                 width: {
//                   xs: "48%",
//                   md: "220px",
//                 },
//                 height: {
//                   xs: "20%",
//                   md: "110px",
//                 },
//               }}
//             >
//               <img
//                 src={review}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Stack>
//             <Stack
//               sx={{
//                 width: {
//                   xs: "48%",
//                   md: "220px",
//                 },
//                 height: {
//                   xs: "20%",
//                   md: "110px",
//                 },
//               }}
//             >
//               <img
//                 src={review}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Stack>
//             <Stack
//               sx={{
//                 width: {
//                   xs: "48%",
//                   md: "220px",
//                 },
//                 height: {
//                   xs: "20%",
//                   md: "110px",
//                 },
//               }}
//             >
//               <img
//                 src={review}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Stack>
//             <Stack
//               sx={{
//                 width: {
//                   xs: "48%",
//                   md: "220px",
//                 },
//                 height: {
//                   xs: "20%",
//                   md: "110px",
//                 },
//               }}
//             >
//               <img
//                 src={review}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Stack>
//           </Stack>
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };

// export default Awards;


import React from "react";
import { Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import "./Features.css";
const Awards = () => {
  return (
    <Stack
      direction={{
        xs: "column",
        lg: "row",
      }}
      justifyContent="space-between"
      alignItems="center"
      p={{ xs: "0px", md: "60px 0" }}
      gap={{ xs: 2, md: 4 }}
    >
      <Stack
        alignItems="center"
        position="relative"
        justifyContent="center"
        paddingLeft={{ xs: 0, md: 0 }}
        sx={{
          width: { xs: "-webkit-fill-available", md: "85%", lg: "54%" },
          height: { xs: "none", sm: "none", md: "450px", lg: "500px" },
        }}
      >
        <Stack
          width={{ xl: "90%", xs: "90%" }}
          alignItems={"center"}
          border={"1px solid red"}
          display={{ xl: "flex", md: "none", sm: "none" }}
        >
          <ReactPlayer
            url="https://youtu.be/7nhhfmx_3OU"
            controls
            width="100%"
            height="419px"
          />
        </Stack>
        <Stack
          width={{ xl: "90%", xs: "90%" }}
          border={"1px solid red"}
          alignItems={"center"}
          display={{ xl: "none", md: "flex", sm: "none" }}
        >
          <ReactPlayer
            url="https://youtu.be/7nhhfmx_3OU"
            controls
            width="100%"
            height="450px"
          />
        </Stack>
        <Stack
          width={{ xl: "90%", xs: "100%" }}
          border={"1px solid red"}
          alignItems={"center"}
          display={{ xl: "none", md: "none", sm: "flex" }}
        >
          <ReactPlayer
            url="https://youtu.be/7nhhfmx_3OU"
            controls
            width="100%"
            height="300px"
          />
        </Stack>
      </Stack>
      <Stack
        width={{ xs: "100%", md: "76%", lg: "46%" }}
        justifyContent="center"
        alignItems="flex-start"
        gap={2}
        paddingRight={{ xs: 0, md: 0, lg: 3 }}
      >
        <Typography
          width="100%"
          color="#052973"
          textAlign={{
            xs: "center",
            md: "left",
          }}
          fontSize={{
            xs: "20px",
            sm: "20px",
            md: "32px",
            lg: "30px",
            xll: "30px",
            xl: "36px",
          }}
          fontWeight="bold"
        >
          Best in class Accounting, Billing and Inventory software
        </Typography>
        <Typography
          letterSpacing={1.1}
          textAlign="justify"
          lineHeight={1.3}
          padding={{ xs: "0 20px", md: 0 }}
          fontSize={{ xs: "14px", md: "16px", xll: "20px", xl: "17px" }}
        >
          At Saniiro Technologies Private Limited, we deliver top-tier
          accounting and billing software tailored to the unique needs of each
          client, including a comprehensive GST accounting solution and
          affordable ecommerce development tools.
          <br />
          Our global financialmanagement systems, including user-friendly
          quotation management software and versatile CMS software, enable
          seamless management of quotes, invoices, and web content.
          <br />
          Additionally, our inventory management software provides detailed
          insights into orders, inventory levels, sales, and deliveries,
          complementing our task management software that enhances planning,
          tracking, testing, and reporting processes to expedite goal
          achievement.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Awards;
