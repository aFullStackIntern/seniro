// import React from "react";
// import { Box, Typography, Button, Stack } from "@mui/material";
// import { Translate } from "@mui/icons-material";

// const Card = ({ Subsplan, onClick, isActive, plan }) => {
//   const handleClick = () => {
//     onClick(Subsplan);
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         height: "396px",
//         width: "270px",
//         border: isActive ? "1px solid black" : "1px solid #CECECE",
//         display: "flex",
//         flexDirection: "column",
//         fontWeight: "600",
//         alignItems: "center",
//         borderRadius: "10px",
//         boxShadow: isActive ? "10px 10px " : "none",
//         "&:hover": {
//           boxShadow: isActive ? "10px 10px " : "none",
//         },
//       }}
//       onClick={handleClick}
//     >
//       {Subsplan.Title === "ENTERPRISE" && (
//         <Stack
//           justifyContent={"center"}
//           alignItems={"center"}
//           sx={{
//             position: "absolute",
//             top: 26,
//             width: "63px",
//             height: "15px",
//             borderTopLeftRadius: "0px",
//             borderTopRightRadius: "8px",
//             borderBottomLeftRadius: "8px",
//             borderBottomRightRadius: "8px",
//             bgcolor: "#F15B25",
//           }}
//         >
//           <Typography
//             sx={{
//               fontFamily: "Work Sans",
//               fontSize: "8px",
//               fontWeight: "700",
//               lineHeight: "7px",
//               letterSpacing: "0em",
//               textAlign: "center",
//               bgcolor: "#F15B25",
//               color: "white",
//             }}
//           >
//             Most Popular
//           </Typography>
//         </Stack>
//       )}

//       <Typography
//         sx={{
//           fontFamily: "Work Sans",
//           marginTop: "60px",
//           fontSize: "18px",
//           fontWeight: "600",
//           letterSpacing: "0em",
//           textAlign: "center",
//           backgroundColor: "white",
//         }}
//         textTransform={"capitalize"}
//         variant="h6"
//       >
//         {Subsplan.price}
//       </Typography>

//       <Typography
//         sx={{
//           marginTop: "21px",
//           fontFamily: "Work Sans",
//           fontSize: "50px",
//           fontWeight: "900",
//           lineHeight: "50px",
//           letterSpacing: "0em",
//           textAlign: "left",
//         }}
//         variant="h3"
//         className="text-5xl font-bold"
//       >
//         <span
//           sx={{
//             color: "gray",
//             fontSize: "14px",
//             position: "absolute",
//             top: 0,
//           }}
//         >
//           ₹
//         </span>{" "}
//         {plan === "monthly" ? Subsplan.MRP : Subsplan.DiscountPrice}
//       </Typography>

//       <Typography
//         sx={{
//           marginTop: "12px",
//         }}
//       >
//         {Subsplan.PeriodDesc}
//       </Typography>

//       <Button
//         sx={{
//           marginTop: "24px",
//           border: "1px solid #F15B25",
//           backgroundColor: "white",
//           color: isActive ? "#ffffff" : "#F15B25",
//           fontSize: "14px",
//           fontWeight: "600",
//           lineHeight: "13px",
//           textAlign: "center",
//           padding: "13px 16px",
//           borderRadius: "5px",
//           cursor: "pointer",
//           backgroundColor: isActive ? "#F15B25" : "#ffffff",
//           "&:hover": {
//             backgroundColor: "#F15B25",
//             color: "white",
//           },
//         }}
//       >
//         START FREE TRIAL
//       </Button>

//       <Typography
//         ml={1}
//         mr={1}
//         sx={{
//           marginTop: "24px",
//           fontFamily: "Work Sans",
//           fontSize: "13px",
//           fontWeight: "600",
//           lineHeight: "15px",
//           letterSpacing: "0em",
//           textAlign: "center",
//           marginLeft: "60px",
//           marginRight: "60px",
//         }}
//       >
//         {Subsplan.CartTitle}
//       </Typography>

//       {Subsplan !== 0 && (
//         <Typography
//           sx={{
//             marginTop: "24px",
//             color: "#006FCE",
//             textDecoration: "underline",
//             fontSize: "11px",
//           }}
//         >
//           Learn More
//         </Typography>
//       )}

//       <Typography
//         sx={{
//           position: "absolute",
//           bottom: "10px",
//           color: "#006FCE",
//           textDecoration: "underline",
//           fontSize: "11px",
//         }}
//       >
//         Show More
//       </Typography>
//     </Box>
//   );
// };

// export default Card;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Typography, Button, Stack } from "@mui/material";

// const Card = ({ Subsplan, onClick, isActive, plan }) => {
//   console.log("plan", Subsplan);
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     // Navigate to the checkout page with the package id and price
//     navigate(`/Pricing/checkout/${Subsplan.Slug}`, {
//       state: {
//         price: Subsplan.price
//       },
//     });
//     window.scroll(0,0)
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         height: "396px",
//         width: "270px",
//         border: isActive ? "1px solid black" : "1px solid #CECECE",
//         display: "flex",
//         flexDirection: "column",
//         fontWeight: "600",
//         alignItems: "center",
//         borderRadius: "10px",
//         boxShadow: isActive ? "10px 10px " : "none",
//         "&:hover": {
//           boxShadow: isActive ? "10px 10px " : "none",
//         },
//       }}
//       onClick={handleCardClick}
//     >
//       {Subsplan.Title === "ENTERPRISE" && (
//         <Stack
//           justifyContent={"center"}
//           alignItems={"center"}
//           sx={{
//             position: "absolute",
//             top: 26,
//             width: "63px",
//             height: "15px",
//             borderTopLeftRadius: "0px",
//             borderTopRightRadius: "8px",
//             borderBottomLeftRadius: "8px",
//             borderBottomRightRadius: "8px",
//             bgcolor: "#F15B25",
//           }}
//         >
//           <Typography
//             sx={{
//               fontFamily: "Work Sans",
//               fontSize: "8px",
//               fontWeight: "700",
//               lineHeight: "7px",
//               letterSpacing: "0em",
//               textAlign: "center",
//               bgcolor: "#F15B25",
//               color: "white",
//             }}
//           >
//             Most Popular
//           </Typography>
//         </Stack>
//       )}

//       <Typography
//         sx={{
//           fontFamily: "Work Sans",
//           marginTop: "60px",
//           fontSize: "18px",
//           fontWeight: "600",
//           letterSpacing: "0em",
//           textAlign: "center",
//           backgroundColor: "white",
//         }}
//         textTransform={"capitalize"}
//         variant="h6"
//       >
//         {Subsplan.price}
//       </Typography>

//       <Typography
//         sx={{
//           marginTop: "21px",
//           fontFamily: "Work Sans",
//           fontSize: "50px",
//           fontWeight: "900",
//           lineHeight: "50px",
//           letterSpacing: "0em",
//           textAlign: "left",
//         }}
//         variant="h3"
//         className="text-5xl font-bold"
//       >
//         <span
//           sx={{
//             color: "gray",
//             fontSize: "14px",
//             position: "absolute",
//             top: 0,
//           }}
//         >
//           ₹
//         </span>{" "}
//         {plan === "monthly" ? Subsplan.MRP : Subsplan.DiscountPrice}
//       </Typography>

//       <Typography
//         sx={{
//           marginTop: "12px",
//         }}
//       >
//         {Subsplan.PeriodDesc}
//       </Typography>

//       <Button
//         sx={{
//           marginTop: "24px",
//           border: "1px solid #F15B25",
//           backgroundColor: "white",
//           color: isActive ? "#ffffff" : "#F15B25",
//           fontSize: "14px",
//           fontWeight: "600",
//           lineHeight: "13px",
//           textAlign: "center",
//           padding: "13px 16px",
//           borderRadius: "5px",
//           cursor: "pointer",
//           backgroundColor: isActive ? "#F15B25" : "#ffffff",
//           "&:hover": {
//             backgroundColor: "#F15B25",
//             color: "white",
//           },
//         }}
//       >
//         START FREE TRIAL
//       </Button>

//       <Typography
//         ml={1}
//         mr={1}
//         sx={{
//           marginTop: "24px",
//           fontFamily: "Work Sans",
//           fontSize: "13px",
//           fontWeight: "600",
//           lineHeight: "15px",
//           letterSpacing: "0em",
//           textAlign: "center",
//           marginLeft: "60px",
//           marginRight: "60px",
//         }}
//       >
//         {Subsplan.CartTitle}
//       </Typography>

//       {Subsplan !== 0 && (
//         <Typography
//           sx={{
//             marginTop: "24px",
//             color: "#006FCE",
//             textDecoration: "underline",
//             fontSize: "11px",
//           }}
//         >
//           Learn More
//         </Typography>
//       )}

//       <Typography
//         sx={{
//           position: "absolute",
//           bottom: "10px",
//           color: "#006FCE",
//           textDecoration: "underline",
//           fontSize: "11px",
//         }}
//       >
//         Show More
//       </Typography>
//     </Box>
//   );
// };

// export default Card;

import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

const Card = ({ Subsplan, onClick, isActive, plan }) => {
  const router = useRouter();
  console.log("Subsplan", Subsplan);
  const handleCardClick = () => {
    router.push(`/Pricing/checkout/${Subsplan.Slug}`, {
      state: {
        price: Subsplan.price,
      },
    });
    window.scroll(0, 0);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "312px",
        width: "14%", // Increased width
        border: isActive ? "1px solid black" : "1px solid #CECECE",
        display: "flex",
        flexDirection: "column",
        fontWeight: "600",
        alignItems: "center",
        borderRadius: "10px",
        boxShadow: Subsplan.IsFreeTrial === 1 ? "10px 10px " : "none",
        "&:hover": {
          boxShadow: Subsplan.IsFreeTrial === 1 ? "10px 10px " : "none",
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans",
          marginTop: "35px",
          fontSize: "18px",
          fontWeight: "600",
          letterSpacing: "0em",
          textAlign: "center",
          backgroundColor: "white",
        }}
        textTransform={"capitalize"}
        variant="h6"
      >
        {Subsplan.Name}
      </Typography>
      {Subsplan.IsPopular === 1 && (
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            position: "absolute",
            top: 26,
            width: "63px",
            height: "15px",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "8px",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            bgcolor: "#F15B25",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "8px",
              fontWeight: "700",
              lineHeight: "7px",
              letterSpacing: "0em",
              textAlign: "center",
              bgcolor: "#F15B25",
              color: "white",
            }}
          >
            Most Popular
          </Typography>
        </Stack>
      )}

      <Typography
        sx={{
          marginTop: "21px",
          fontFamily: "Work Sans",
          fontSize: "40px",
          fontWeight: "bold",
          lineHeight: "50px",
          letterSpacing: "0em",
          textAlign: "left",
        }}
        variant="h3"
      >
        <span
          sx={{
            color: "gray",
            fontSize: "11px",
            position: "absolute",
            top: 0,
            fontWeight: "bold",
          }}
        >
          ₹{Subsplan.price}
        </span>
        {/* {plan === "monthly" ? Subsplan.MRP : Subsplan.DiscountPrice} */}
      </Typography>

      <Typography
        sx={{
          marginTop: "12px",
        }}
      >
        {Subsplan.usercondition}
      </Typography>

      <Button
        sx={{
          marginTop: "24px",
          border: "1px solid #F15B25",
          backgroundColor: "white",
          color: isActive ? "#ffffff" : "#F15B25",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "13px",
          textAlign: "center",
          padding: "13px 16px",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: isActive ? "#F15B25" : "#ffffff",
          "&:hover": {
            backgroundColor: "#F15B25",
            color: "white",
          },
        }}
        onClick={handleCardClick}
      >
        {Subsplan.IsFreeTrial === 0 ? "Buy Now" : "Start Free Trial"}
      </Button>

      <Typography
        ml={1}
        mr={1}
        sx={{
          marginTop: "24px",
          fontFamily: "Work Sans",
          fontSize: "13px",
          fontWeight: "600",
          lineHeight: "15px",
          letterSpacing: "0em",
          textAlign: "center",
          marginLeft: "60px",
          marginRight: "60px",
        }}
      >
        {Subsplan.CartTitle}
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          bottom: "10px",
          color: "#006FCE",
          textDecoration: "underline",
          fontSize: "11px",
        }}
      >
        Show More
      </Typography>
    </Box>
  );
};

export default Card;
