// import React, { useState } from "react";
// import { Box, Grid, Stack, Switch, Typography } from "@mui/material";
// import ButtonWithImage from "../../utils/StateButton";
// import icon from "../../assets/icon.svg";
// import Link from 'next/link';

// import Button from "../../utils/Button";
// import EastIcon from "@mui/icons-material/East";
// const ToggleSection = () => {
//   const [isToggled, setToggled] = useState(false);

//   const handleToggle = () => {
//     setToggled(!isToggled);
//   };

// const buttonsData = [
//   {
//     id: 1,
//     name: "Approval",
//     details:
//       "Maintain document approval hierarchy. Maker & checker system for oversight.",
//   },
//   {
//     id: 2,
//     name: "User Access & Privileges",
//     details:
//       "Manage user rights and access. Two-factor authentication via OTP.",
//   },
//   {
//     id: 3,
//     name: "Multi-Currency",
//     details:
//       "International transactions with conversion rates. Real-time currency gains/losses automation.",
//   },
//   {
//     id: 4,
//     name: "Notifications & Alerts",
//     details:
//       "Custom email/SMS alerts for transactions. Automatic invoice details to customers.",
//   },
//   {
//     id: 5,
//     name: "User Defined Fields/Attributes",
//     details: "Custom fields for vouchers. Detailed analysis reports.",
//   },
//   {
//     id: 6,
//     name: "Price/Discount List",
//     details:
//       "Multiple rates and discount structures. Error reduction in pricing.",
//   },
//   {
//     id: 7,
//     name: "Barcode Generation",
//     details: "Design and print barcodes. Embed and retrieve information.",
//   },
//   {
//     id: 8,
//     name: "Multi Location",
//     details:
//       "Operate multiple locations in one company. Location-wise or consolidated reports.",
//   },
//   {
//     id: 9,
//     name: "Advance Inventory",
//     details:
//       "Serial, barcode, IMEI, and batch tracking. Real-time inventory valuation.",
//   },
//   {
//     id: 10,
//     name: "Custom Reports",
//     details: "Custom report formats. 300+ pre-crafted reports.",
//   },
//   {
//     id: 11,
//     name: "Multiple Document Print Format",
//     details:
//       "Predefined print formats for transactions. Customize with logos, GST numbers.",
//   },
//   {
//     id: 12,
//     name: "Salesman/Agent Tracking",
//     details:
//       "Sales/purchase analytics with tagging. Field team tracking, order booking via mobile app.",
//   },
//   {
//     id: 13,
//     name: "Audit Trail",
//     details: "Log creation, modification, and deletion of transactions.",
//   },
// ];

//   const renderButtons = (startIndex, endIndex) => {
//     return buttonsData.slice(startIndex, endIndex).map((button) => (
//       <Grid item key={button.id} xs={12} sm={6} md={4} lg={2.5}>
//         <Stack>
//           <ButtonWithImage iconPosition="start" imageUrl={icon}>
//             {button.name}
//           </ButtonWithImage>
//           {isToggled && <Typography>{button.details}</Typography>}
//         </Stack>
//       </Grid>
//     ));
//   };

//   return (
//     <Stack
//       marginTop={"50px"}
//       bgcolor={"#F0F0F0"}
//       gap={3}
//       p={"30px 0"}
//       sx={{
//         display: {
//           xs: "none",
//           lg: "block",
//         },
//       }}
//     >
//       <Box fontFamily={"Work Sans"} maxWidth={"1536px"} margin={"0 auto"}>
//         <Stack direction="row" alignItems="center" justifyContent={"center"}>
//           <Switch
//             checked={isToggled}
//             onChange={handleToggle}
//             sx={{
//               "& .MuiSwitch-thumb": {
//                 backgroundColor: isToggled ? "#34A853" : "#F15B25",
//               },
//               "& .MuiSwitch-track": {
//                 backgroundColor: "white",
//               },
//             }}
//           />
//           <Typography>let me show you something else</Typography>
//         </Stack>
//         <Stack alignItems={"center"}>
//           <Grid container spacing={2}>
//             <Grid
//               container
//               item
//               xs={12}
//               spacing={1}
//               sx={{
//                 justifyContent: "center",
//               }}
//             >
//               {renderButtons(0, 3)}
//             </Grid>
//             <Grid
//               container
//               item
//               xs={12}
//               spacing={2}
//               sx={{
//                 justifyContent: "center",
//               }}
//             >
//               {renderButtons(3, 5)}
//             </Grid>
//             <Grid
//               container
//               item
//               xs={12}
//               spacing={2}
//               sx={{
//                 justifyContent: "center",
//               }}
//             >
//               {renderButtons(5, 8)}
//             </Grid>
//             <Grid
//               container
//               item
//               xs={12}
//               spacing={2}
//               sx={{
//                 justifyContent: "center",
//               }}
//             >
//               {renderButtons(8, 10)}
//             </Grid>
//             <Grid
//               container
//               item
//               xs={12}
//               spacing={2}
//               sx={{
//                 justifyContent: "center",
//               }}
//             >
//               {renderButtons(10, 13)}
//             </Grid>
//             <Grid
//               container
//               item
//               xs={12}
//               spacing={2}
//               sx={{
//                 justifyContent: "center",
//               }}
//             >
//               {renderButtons(13, 15)}
//             </Grid>
//             <Grid
//               container
//               item
//               xs={12}
//               spacing={2}
//               sx={{
//                 justifyContent: "center",
//               }}
//             >
//               {renderButtons(15, 18)}
//             </Grid>
//             <Grid
//               container
//               item
//               xs={12}
//               spacing={2}
//               sx={{
//                 justifyContent: "center",
//               }}
//             >
//               {renderButtons(18, 20)}
//             </Grid>
//           </Grid>
//         </Stack>
//         <Stack alignItems={"center"}>
//           <Link  href
// ={"/Features"} onClick={() => window.scrollTo(0, 0)}>
//             <Button
//               endIcon={<EastIcon />}
//               sx={{
//                 bgcolor: "transparent",
//                 color: "#0079FF",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 "&:hover": {
//                   backgroundColor: "transparent",
//                   color: "#0079FF",
//                   textDecoration: "underline",
//                 },
//               }}
//             >
//               View all apps
//             </Button>
//           </Link>
//         </Stack>
//       </Box>
//     </Stack>
//   );
// };

// export default ToggleSection;

"use client";

import React, { useState } from "react";
import { Box, Grid, Stack, Switch, Typography } from "@mui/material";
import ButtonWithImage from "../../utils/StateButton";
import icon from "../../assets/icon.svg";
import Link from "next/link";

import Button from "../../utils/Button";
import EastIcon from "@mui/icons-material/East";
import roundedAwwow from "../../assets/curveArrow.png";
import Image from "next/image";

const ToggleSection = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  const buttonsData = [
    {
      id: 1,
      name: "Approval",
      details:
        "Maintain document approval hierarchy. Maker & checker system for oversight.",
    },
    {
      id: 2,
      name: "User Access & Privileges",
      details:
        "Manage user rights and access. Two-factor authentication via OTP.",
    },
    {
      id: 3,
      name: "Multi-Currency",
      details:
        "International transactions with conversion rates. Real-time currency gains/losses automation.",
    },
    {
      id: 4,
      name: "Notifications & Alerts",
      details:
        "Custom email/SMS alerts for transactions. Automatic invoice details to customers.",
    },
    {
      id: 5,
      name: "User Defined Fields/Attributes",
      details: "Custom fields for vouchers. Detailed analysis reports.",
    },
    {
      id: 6,
      name: "Price/Discount List",
      details:
        "Multiple rates and discount structures. Error reduction in pricing.",
    },
    {
      id: 7,
      name: "Barcode Generation",
      details: "Design and print barcodes. Embed and retrieve information.",
    },
    {
      id: 8,
      name: "Multi Location",
      details:
        "Operate multiple locations in one company. Location-wise or consolidated reports.",
    },
    {
      id: 9,
      name: "Advance Inventory",
      details:
        "Serial, barcode, IMEI, and batch tracking. Real-time inventory valuation.",
    },
    {
      id: 10,
      name: "Custom Reports",
      details: "Custom report formats. 300+ pre-crafted reports.",
    },
    {
      id: 11,
      name: "Multiple Document Print Format",
      details:
        "Predefined print formats for transactions. Customize with logos, GST numbers.",
    },
    {
      id: 12,
      name: "Salesman/Agent Tracking",
      details:
        "Sales/purchase analytics with tagging. Field team tracking, order booking via mobile app.",
    },
    {
      id: 13,
      name: "Audit Trail",
      details: "Log creation, modification, and deletion of transactions.",
    },
  ];

  const renderButtons = (startIndex, endIndex) => {
    return buttonsData.slice(startIndex, endIndex).map((button) => (
      <Grid item key={button.id} xs={12} sm={6} md={4} lg={2.5}>
        <Stack alignItems={"end"}>
          <ButtonWithImage iconPosition="start" imageUrl={icon}>
            {button.name}
          </ButtonWithImage>

          {isToggled && (
            <>
              <Image
                src={roundedAwwow}
                alt="arrow"
                style={{
                  padding: "10px 100px",
                  transform: "scale3d(-1.5, -2, 0.5)",
                  width: "50px",
                  height: "50px",
                }}
              />
              <Typography
                component="div"
                bgcolor={"#F5F5F5"}
                width={"220px"}
                borderRadius={"8px"}
              >
                <ul>
                  {button.details.split(". ").map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </Typography>
            </>
          )}
        </Stack>
      </Grid>
    ));
  };

  return (
    <Stack
      marginTop={"50px"}
      bgcolor={"#F0F0F0"}
      gap={3}
      p={"30px 0"}
      sx={{
        display: {
          xs: "none",
          lg: "block",
        },
      }}
    >
      <Stack
        fontFamily={"Work Sans"}
        maxWidth={"1536px"}
        margin={"0 auto"}
        gap={"40px"}
      >
        <Stack direction="row" alignItems="center" justifyContent={"center"}>
          <Switch
            checked={isToggled}
            onChange={handleToggle}
            sx={{
              "& .MuiSwitch-thumb": {
                backgroundColor: isToggled ? "#34A853" : "#F15B25",
              },
              "& .MuiSwitch-track": {
                backgroundColor: "black",
              },
            }}
          />
          <Typography>let me show you something else</Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Grid container spacing={3}>
            <Grid
              gap={3}
              container
              item
              xs={12}
              spacing={1}
              sx={{
                justifyContent: "center",
              }}
            >
              {renderButtons(0, 3)}
            </Grid>
            <Grid
              gap={3}
              container
              item
              xs={12}
              spacing={2}
              sx={{
                justifyContent: "center",
              }}
            >
              {renderButtons(3, 5)}
            </Grid>
            <Grid
              gap={3}
              container
              item
              xs={12}
              spacing={2}
              sx={{
                justifyContent: "center",
              }}
            >
              {renderButtons(5, 8)}
            </Grid>
            <Grid
              gap={3}
              container
              item
              xs={12}
              spacing={2}
              sx={{
                justifyContent: "center",
              }}
            >
              {renderButtons(8, 10)}
            </Grid>
            <Grid
              gap={3}
              container
              item
              xs={12}
              spacing={2}
              sx={{
                justifyContent: "center",
              }}
            >
              {renderButtons(10, 13)}
            </Grid>
          </Grid>
        </Stack>
        <Stack alignItems={"center"}>
          <Link href="/Features" onClick={() => window.scrollTo(0, 0)}>
            <Button
              endIcon={<EastIcon />}
              sx={{
                bgcolor: "transparent",
                color: "#0079FF",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#0079FF",
                  textDecoration: "underline",
                },
              }}
            >
              View all apps
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ToggleSection;
