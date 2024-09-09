// import React from "react";
// import { useLocation, useParams } from "react-router-dom";
// import { Box, Typography, TextField, Button, Stack } from "@mui/material";
// import {
//   Table,
//   TableBody,
//   TableRow,
//   TableCell,
// } from "@mui/material";
// import Nav from "../Navbar/Nav";
// import Footer from "../utils/Footer";
// const CheckoutPage = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const price = location.state?.price || 0;

//   return (
//     <>
//     <Nav/>
//       <Box>
//         <Typography variant="h4" align="center" gutterBottom>
//           Package Details
//         </Typography>
//         <Table>
//           <TableBody>
//             <TableRow>
//               <TableCell>Package Name</TableCell>
//               <TableCell>{id}</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>Price</TableCell>
//               <TableCell>{price}</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>18% GST</TableCell>
//               <TableCell>{(price * 0.18).toFixed(2)}</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>Total</TableCell>
//               <TableCell>{(price * 1.18).toFixed(2)}</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           size="large"
//           sx={{ mt: 4 }}
//         >
//           PAY NOW
//         </Button>
//       </Box>
//       <Footer/>
//     </>
//   );
// };

// export default CheckoutPage;

import React, { useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import Footer from "../utils/Footer";
import Nav from "../Navbar/Nav";
import PopupPricing from "./PopupPricing";
const CheckoutPage = () => {
  const params = useParams();
  const id = params.id;
  const pathname = usePathname();
  const price = pathname.state?.price || 0;
  const [popupVisible, setPopupVisible] = useState(false);

  const handlePayNowClick = () => {
    setPopupVisible(true);
  };
  return (
    <>
      <Nav />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
      >
        <Typography
          variant="h4"
          align="center"
          fontSize={"25px"}
          fontWeight={"bold"}
          gutterBottom
          sx={{ marginBottom: "30px" }}
        >
          Package Details
        </Typography>
        <Table
          sx={{ width: "100%", border: "1px solid #ccc", marginBottom: "30px" }}
        >
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#1976d2",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Package Name
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#1976d2",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Price
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{id}</TableCell>
              <TableCell>{price}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18% GST</TableCell>
              <TableCell>{(price * 0.18).toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ backgroundColor: "#d1c4e9", fontWeight: "bold" }}
              >
                Total
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#d1c4e9", fontWeight: "bold" }}
              >
                {(price * 1.18).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ backgroundColor: "#1e88e5" }}
        >
          PAY NOW
        </Button> */}
        <Button
          type="button"
          fontFamily={"Work Sans"}
          sx={{
            width: {
              xs: "220px",
              sm: "300px",
              md: "480px",
              lg: "385px",
              xl: "480px",
            },
            height: {
              xs: "45px",
              sm: "55px",
              md: "67px",
              lg: "57px",
              xl: "67px",
            },
            color: "white",
            fontSize: {
              xs: "16px",
              sm: "19px",
              md: "22px",
            },
            bgcolor: "#052973",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "transparent",
              border: "1px solid #052973",
              color: "black",
            },
          }}
          onClick={handlePayNowClick}
        >
          Pay Now
        </Button>

        {popupVisible && (
          <div className="modalBackground">
            <Stack>
              <div className="modalContainer">
                <div className="titleCloseBtn">
                  <button onClick={() => setPopupVisible(false)}>X</button>
                </div>
                <Stack>
                  <PopupPricing />
                </Stack>
              </div>
            </Stack>
          </div>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default CheckoutPage;
