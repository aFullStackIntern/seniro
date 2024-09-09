// import {
//   Stack,
//   IconButton,
//   Typography,
//   Snackbar,
//   Alert,
//   TextField,
// } from "@mui/material";
// import React, { useEffect, useState, useRef } from "react";
// import PersonIcon from "@mui/icons-material/Person";
// import EmailIcon from "@mui/icons-material/Email";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import CitySelector from "./Cityselctor";
// import Button from "./Button";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
// import "./PopupPricing.css";
// import axios from "axios";
// import Link from 'next/link';

// const PopupPricing = () => {
//   const navigate = useNavigate();
//   const initialState = {
//     Name: "",
//     UserName: "",
//     PhoneCode: "91",
//     PhoneNumber: "",
//     Email: "",
//     CountryId: 123,
//     StateId: "",
//     Slug: "⁠saniiro-7days-trial-package⁠",
//     Otp: "",
//     OtpId: "",
//   };
//   const [formData, setFormData] = useState(initialState);
//   const [errors, setErrors] = useState({});
//   const [otpSent, setOtpSent] = useState(false);
//   const [checkboxError, setCheckboxError] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const [modalError, setModalError] = useState("");
//   // const [paymentData, setPaymentData] = useState({});
//   // const [paymentDataPayu, setPaymentDataPayu] = useState({});

//   //  const payLinkPayURef = useRef();
//   //  const payLinkRazorpayRef = useRef();
//   const validateForm = () => {
//     let tempErrors = {};
//     tempErrors.Name =
//       formData.Name.length > 2 ? "" : "Name must be at least 3 characters";
//     tempErrors.Email = /^\S+@\S+\.\S+$/.test(formData.Email)
//       ? ""
//       : "Email is not valid";
//     tempErrors.UserName =
//       formData.UserName.length > 0 ? "" : "Username is required";
//     if (selectedCountry === 123) {
//       // Only validate phone number if the selected country is 123
//       tempErrors.PhoneNumber =
//         formData.PhoneNumber.length > 0 ? "" : "Phone number is required";
//     }
//     tempErrors.CountryId =
//       formData.CountryId > 0 ? "" : "Please Select Country";
//     tempErrors.StateId = formData.StateId > 0 ? "" : "Please Select State";
//     if (!isChecked) {
//       tempErrors.checkbox = setCheckboxError(
//         "You must agree to the Terms of Service and Privacy to proceed."
//       );
//     }
//     setErrors(tempErrors);
//     return Object.values(tempErrors).every((x) => x === "");
//   };
//   const [isChecked, setChecked] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // Handle specific restrictions for the PhoneNumber field
//     if (name === "PhoneNumber" && value.length > 10) {
//       return; // Stop the state update if phone number exceeds 10 characters
//     }

//     // Remove spaces if the field is UserName
//     const newValue = name === "UserName" ? value.replace(/\s+/g, "") : value;

//     // Update form data state
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: newValue,
//     }));

//     // Clear errors for the field being changed
//     if (errors[name]) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: "",
//       }));
//     }

//     // Clear a specific error for the checkbox, if applicable, when other fields are updated
//     if (name !== "checkbox" && checkboxError) {
//       setCheckboxError("");
//     }
//   };

//   const handleCheckboxChange = (e) => {
//     const isChecked = e.target.checked;
//     setChecked(isChecked);
//     if (!isChecked) {
//       setCheckboxError(
//         "You must agree to the Terms of Service and Privacy Policy"
//       );
//     } else {
//       setCheckboxError(""); // Clear any existing error when the checkbox is checked
//     }
//   };

//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(123);
//   const [selectedState, setSelectedState] = useState("");
//   // Fetch countries
//   useEffect(() => {
//     const fetchCountries = async () => {
//       const response = await axios.get(
//         "http://dev.saniiro.net/api/v1/country"
//       );
//       setCountries(response.data.Data || []);
//     };
//     fetchCountries();
//   }, []);

//   // Fetch states based on the selected country
//   useEffect(() => {
//     const fetchStates = async () => {
//       if (!selectedCountry) return;
//       const response = await axios.get("http://dev.saniiro.net/api/v1/state", {
//         params: { CountryId: selectedCountry },
//       });
//       setStates(response.data.Data || []);
//     };
//     fetchStates();
//   }, [selectedCountry]);

//   const handleCountryChange = (e) => {
//     const newCountryId = Number(e.target.value);
//     setSelectedCountry(newCountryId);
//     setSelectedState("");
//     setFormData((prev) => ({
//       ...prev,
//       CountryId: newCountryId, // Ensure CountryId is stored as a string
//       StateId: "", // Reset state when country changes
//       PhoneNumber: newCountryId === 123 ? prev.PhoneNumber : "",
//     }));
//   };

//   const handleStateChange = (e) => {
//     const newState = e.target.value;
//     setSelectedState(newState);
//     const foundState = states.find((state) => state.Name === newState);
//     setFormData((prev) => ({
//       ...prev,
//       StateId: foundState ? Number(foundState.Id) : 0, // Ensure StateId is stored as a string
//     }));
//   };
//   const sendOTP = async () => {
//     if (!validateForm()) return;

//     try {
//       const response = await axios.get(
//         "http://dev.saniiro.net/api/v1/Common/Messaging/otp",
//         {
//           params: {
//             Action: "OTP",
//             ApiForId: selectedCountry === 123 ? 2 : 1,
//             MobileTo: selectedCountry === 123 ? formData.PhoneNumber : null,
//             EmailTo: formData.Email,
//             GroupId: 41,
//           },
//         }
//       );
//       if (response.data.Status === 1000) {
//         setFormData((prev) => ({ ...prev, OtpId: response.data.Data[0].Id }));
//         setOtpSent(true);
//       } else {
//         setModalError("Failed to send OTP");
//         setModalVisible(true);
//       }
//     } catch (error) {
//       console.error("Error during API call:", error);
//       setModalError("An error occurred during submission.");
//       setModalVisible(true);
//     }
//   };

//   const verifyOTP = async () => {
//     if (!formData.Otp) {
//       setModalError("OTP is required");
//       setModalVisible(true);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://dev.saniiro.net/api/v1/pricing/purchase",
//         {
//           ...formData,
//           CountryId: Number(formData.CountryId),
//           StateId: Number(formData.StateId),
//           PhoneNumber: selectedCountry === 123 ? formData.PhoneNumber : null,
//         }
//       );
//       if (response.data.Status === 1000) {
//         const transactionId = response.data.Data.Txnid;
//         navigate(`/thank-you/${transactionId}`);
//         localStorage.setItem("validTxnId", transactionId);
//       } else {
//         setModalError("Failed to verify OTP");
//         setModalVisible(true);
//       }
//     } catch (error) {
//       console.error("Error during API call:", error);
//       setModalError("An error occurred during submission.");
//       setModalVisible(true);
//     }
//   };
//   const resetForm = () => {
//     setOtpSent(false);
//     setErrors({});
//     setFormData((prev) => ({
//       ...prev,
//       Otp: "", // Reset OTP field to empty
//     }));
//   };

//   return (
//     <>
//       <Stack pt={5}>
//         <Stack
//           alignItems={"center"}
//           justifyContent={"space-between"}
//           p={"0 10px"}
//           // direction={"row"}
//           // zIndex={-1}
//           sx={{
//             flexDirection: {
//               xs: "column",
//               lg: "row",
//             },
//             // width: "100%",
//             margin: {
//               xs: "0px",
//               sm: "20px",
//               lg: "0px",
//             },
//           }}
//         >
//           <Stack borderRadius={4} gap={3}>
//             <Typography
//               sx={{
//                 fontSize: {
//                   xs: "18px",
//                   sm: "22px",
//                   md: "28px",
//                   xl: "28px",
//                 },
//                 textAlign: {
//                   xs: "center",
//                 },
//               }}
//               color={"#052973"}
//               // color={"white"}
//               fontWeight={"bold"}
//               textAlign={"center"}
//             >
//               Begin Your Journey with{" "}
//               <span style={{ color: "rgb(241, 91, 37)" }}>Saniiro</span> Today!
//             </Typography>
//             <Stack
//               alignItems={"center"}
//               gap={2}
//               margin={"0 auto"}
//               sx={{
//                 width: {
//                   xs: "80%",
//                   sm: "100%",
//                   md: "70%",
//                   lg: "100%",
//                   xl: "100%",
//                 },
//               }}
//             >
//               <Stack direction={"row"} gap={"10px"}>
//                 <Stack>
//                   <Stack
//                     style={{ position: "relative" }}
//                     sx={{
//                       width: {
//                         xs: "220px",
//                         sm: "268px",
//                         smm: "400px",
//                         md: "480px",
//                         lg: "385px",
//                         xl: "480px",
//                       },
//                       height: {
//                         xs: "45px",
//                         sm: "47px",
//                         md: "67px",
//                         lg: "57px",
//                         xl: "67px",
//                       },
//                     }}
//                   >
//                     <input
//                       style={{
//                         width: "94%",
//                         height: "100%",
//                         border: "1px solid #AAAAAA",
//                         color: otpSent ? "#DDDDDD" : "#AAAAAA",
//                         paddingLeft: "5%",
//                         fontSize: "20px",
//                         borderRadius: "12px",
//                       }}
//                       type="text"
//                       name="Name"
//                       disabled={otpSent}
//                       placeholder="Full Name"
//                       value={formData.Name}
//                       onChange={handleInputChange}
//                     />

//                     <PersonIcon
//                       sx={{
//                         position: "absolute",
//                         top: "50%",
//                         right: "8px",
//                         transform: "translateY(-50%)",
//                         color: "#AAAAAA",
//                         fontSize: {
//                           xl: "40px",
//                           md: "35px",
//                           lg: "38px",
//                           sm: "30px",
//                         },
//                       }}
//                     />
//                   </Stack>
//                   {errors.Name && (
//                     <Typography color="error">{errors.Name}</Typography>
//                   )}
//                 </Stack>
//                 <Stack>
//                   <Stack
//                     style={{ position: "relative" }}
//                     sx={{
//                       width: {
//                         xs: "220px",
//                         sm: "268px",
//                         smm: "400px",
//                         md: "480px",
//                         lg: "385px",
//                         xl: "480px",
//                       },
//                       height: {
//                         xs: "45px",
//                         sm: "47px",
//                         md: "67px",
//                         lg: "57px",
//                         xl: "67px",
//                       },
//                     }}
//                   >
//                     <input
//                       type="email"
//                       name="Email"
//                       placeholder="Work Email"
//                       value={formData.Email}
//                       onChange={handleInputChange}
//                       disabled={otpSent}
//                       style={{
//                         width: "94%",
//                         height: "100%",
//                         border: "1px solid #AAAAAA",
//                         color: otpSent ? "#DDDDDD" : "#AAAAAA",
//                         paddingLeft: "5%",
//                         fontSize: "20px",
//                         borderRadius: "12px",
//                       }}
//                     />

//                     <EmailIcon
//                       sx={{
//                         position: "absolute",
//                         top: "50%",
//                         right: "8px",
//                         transform: "translateY(-50%)",
//                         color: "#AAAAAA",
//                         fontSize: {
//                           xl: "40px",
//                           md: "35px",
//                           lg: "38px",
//                           sm: "30px",
//                         },
//                       }}
//                     />
//                   </Stack>
//                   {errors.Email && (
//                     <Typography color="error">{errors.Email}</Typography>
//                   )}
//                 </Stack>
//               </Stack>
//               <Stack direction={"row"} gap={"10px"}>
//                 <Stack>
//                   <Stack
//                     style={{ position: "relative" }}
//                     sx={{
//                       width: {
//                         xs: "220px",
//                         md: "480px",
//                         sm: "268px",
//                         smm: "400px",
//                         lg: "385px",
//                         xl: "480px",
//                       },
//                       height: {
//                         xs: "45px",
//                         sm: "47px",
//                         md: "67px",
//                         lg: "57px",
//                         xl: "67px",
//                       },
//                     }}
//                   >
//                     <input
//                       type="text"
//                       name="UserName"
//                       placeholder="User name"
//                       value={formData.UserName}
//                       onChange={handleInputChange}
//                       disabled={otpSent}
//                       style={{
//                         width: "94%",
//                         height: "100%",
//                         border: "1px solid #AAAAAA",
//                         paddingLeft: "5%",
//                         color: otpSent ? "#DDDDDD" : "#AAAAAA",
//                         fontSize: "20px",
//                         borderRadius: "12px",
//                       }}
//                     />

//                     <AccountCircleIcon
//                       sx={{
//                         position: "absolute",
//                         top: "50%",
//                         right: "8px",
//                         transform: "translateY(-50%)",
//                         color: "#AAAAAA",
//                         fontSize: {
//                           xl: "40px",
//                           md: "35px",
//                           lg: "38px",
//                           sm: "30px",
//                         },
//                       }}
//                     />
//                   </Stack>
//                   {errors.UserName && (
//                     <Typography color="error">{errors.UserName}</Typography>
//                   )}
//                 </Stack>
//                 <CitySelector
//                   selectedCountry={selectedCountry}
//                   handleCountryChange={handleCountryChange}
//                   countries={countries}
//                   selectedState={selectedState}
//                   handleStateChange={handleStateChange}
//                   states={states}
//                   errors={errors}
//                   otpSent={otpSent}
//                 />
//               </Stack>
//               <Stack direction={"row"} gap={"10px"}>
//                 <Stack>
//                   <Stack
//                     style={{ position: "relative" }}
//                     sx={{
//                       width: {
//                         xs: "220px",
//                         md: "480px",
//                         sm: "268px",
//                         smm: "400px",
//                         lg: "385px",
//                         xl: "480px",
//                       },
//                       height: {
//                         xs: "45px",
//                         sm: "47px",
//                         md: "67px",
//                         lg: "57px",
//                         xl: "67px",
//                       },
//                     }}
//                   >
//                     <input
//                       type="text"
//                       name="SalesExecutive"
//                       placeholder="Sales Executive"
//                       value={formData.SalesExecutive}
//                       onChange={handleInputChange}
//                       disabled={otpSent}
//                       style={{
//                         width: "94%",
//                         height: "100%",
//                         border: "1px solid #AAAAAA",
//                         paddingLeft: "5%",
//                         color: otpSent ? "#DDDDDD" : "#AAAAAA",
//                         fontSize: "20px",
//                         borderRadius: "12px",
//                       }}
//                     />

//                     <AccountCircleIcon
//                       sx={{
//                         position: "absolute",
//                         top: "50%",
//                         right: "8px",
//                         transform: "translateY(-50%)",
//                         color: "#AAAAAA",
//                         fontSize: {
//                           xl: "40px",
//                           md: "35px",
//                           lg: "38px",
//                           sm: "30px",
//                         },
//                       }}
//                     />
//                   </Stack>
//                   {errors.SalesExecutive && (
//                     <Typography color="error">
//                       {errors.SalesExecutive}
//                     </Typography>
//                   )}
//                 </Stack>
//                 <Stack>
//                   {selectedCountry === 123 && (
//                     <Stack
//                       style={{ position: "relative" }}
//                       sx={{
//                         width: {
//                           xs: "220px",
//                           sm: "268px",
//                           smm: "400px",
//                           md: "480px",
//                           lg: "385px",
//                           xl: "480px",
//                         },
//                         height: {
//                           xs: "45px",
//                           sm: "47px",
//                           md: "67px",
//                           lg: "57px",
//                           xl: "67px",
//                         },
//                       }}
//                     >
//                       <input
//                         type="tel"
//                         className="input-new"
//                         value={formData.PhoneNumber}
//                         name="PhoneNumber"
//                         placeholder="Phone Number"
//                         onChange={handleInputChange}
//                         maxLength={16}
//                         disabled={otpSent}
//                         style={{
//                           width: "94%",
//                           height: "100%",
//                           border: "1px solid #AAAAAA",
//                           color: otpSent ? "#DDDDDD" : "#AAAAAA",
//                           paddingLeft: "5%",
//                           fontSize: "20px",
//                           borderRadius: "12px",
//                           WebkitAppearance: "none", // for Chrome, Safari, Edge, Opera
//                           MozAppearance: "textfield",
//                         }}
//                       />

//                       <PhoneAndroidIcon
//                         sx={{
//                           position: "absolute",
//                           top: "50%",
//                           right: "16px",
//                           transform: "translateY(-50%)",
//                           color: "#AAAAAA",
//                           fontSize: {
//                             xl: "40px",
//                             md: "35px",
//                             lg: "38px",
//                             sm: "30px",
//                           },
//                         }}
//                       />
//                     </Stack>
//                   )}
//                   {formData.PhoneNumber.length === 16 && (
//                     <div style={{ color: "red" }}>
//                       Maximum 16 characters allowed.
//                     </div>
//                   )}
//                   {errors.PhoneNumber && (
//                     <Typography color="error">{errors.PhoneNumber}</Typography>
//                   )}
//                 </Stack>
//               </Stack>
//               {/* <PhoneNumbe direcrInput formData={formData} setFormData={setFormData} errors={errors} /> */}
//               <Stack
//                 gap={2}
//                 sx={{
//                   alignItems: {
//                     xs: "center",
//                     lg: "left",
//                   },
//                 }}
//               >
//                 <Stack>
//                   <Stack
//                     direction={"row"}
//                     gap={1}
//                     sx={{ textAlign: { xs: "left", lg: "left" } }}
//                   >
//                     <input
//                       type="checkbox"
//                       checked={isChecked}
//                       onChange={handleCheckboxChange}
//                     />
//                     <Typography fontSize={"13px"} color={"#052973"}>
//                       I agree to the Terms of Service and Privacy Policy.
//                     </Typography>
//                   </Stack>
//                   {checkboxError && (
//                     <Typography
//                       color="error"
//                       sx={{ fontSize: "14px", marginLeft: "20px" }}
//                     >
//                       {checkboxError}
//                     </Typography>
//                   )}
//                 </Stack>
//                 <Stack gap={"20px"} alignItems={"center"}>
//                   {otpSent ? (
//                     <>
//                       <Stack
//                         sx={{
//                           width: {
//                             xs: "220px",
//                             sm: "268px",
//                             smm: "400px",
//                             md: "480px",
//                             lg: "385px",
//                             xl: "480px",
//                           },
//                           height: {
//                             xs: "45px",
//                             sm: "47px",
//                             md: "67px",
//                             lg: "57px",
//                             xl: "67px",
//                           },
//                         }}
//                       >
//                         <input
//                           type="number"
//                           className="input-new"
//                           value={formData.Otp}
//                           name="Otp"
//                           placeholder="OTP"
//                           onChange={handleInputChange}
//                           maxLength={16}
//                           style={{
//                             width: "94%",
//                             height: "100%",
//                             border: "1px solid #AAAAAA",
//                             color: "#AAAAAA",
//                             paddingLeft: "5%",
//                             fontSize: "20px",
//                             borderRadius: "12px",
//                             WebkitAppearance: "none", // for Chrome, Safari, Edge, Opera
//                             MozAppearance: "textfield",
//                           }}
//                         />
//                       </Stack>
//                       <Stack alignItems={"flex-end"} width={"95%"}>
//                         <Typography
//                           onClick={resetForm}
//                           color={"white"}
//                           sx={{ cursor: "pointer" }}
//                         >
//                           Edit Details
//                         </Typography>
//                       </Stack>
//                       <Button
//                         type="button"
//                         sx={{
//                           borderRadius: "10px",
//                           width: {
//                             xs: "220px",
//                             sm: "268px",
//                             smm: "400px",
//                             md: "480px",
//                             lg: "385px",
//                             xl: "400px",
//                           },
//                           height: {
//                             xs: "45px",
//                             sm: "55px",
//                             md: "67px",
//                             lg: "57px",
//                             xl: "67px",
//                           },
//                           color: "white",
//                           fontSize: {
//                             xs: "16px",
//                             sm: "19px",
//                             md: "22px",
//                           },
//                           // border: "1px solid #F15B25",
//                           bgcolor: "#F15B25",
//                           // bgcolor: "#F15B25",
//                           fontWeight: "bold",
//                           "&:hover": {
//                             backgroundColor: "#F15B25",
//                             // border: "1px solid #F15B25",
//                             border: "1px solid #052973",
//                             // color: "white",
//                             color: "white",
//                           },
//                         }}
//                         onClick={verifyOTP}
//                       >
//                         Verify OTP and Register
//                       </Button>
//                     </>
//                   ) : (
//                     <Button
//                       type="button"
//                       sx={{
//                         borderRadius: "10px",
//                         width: {
//                           xs: "220px",
//                           sm: "268px",
//                           smm: "400px",
//                           md: "480px",
//                           lg: "385px",
//                           xl: "400px",
//                         },
//                         height: {
//                           xs: "45px",
//                           sm: "55px",
//                           md: "67px",
//                           lg: "57px",
//                           xl: "67px",
//                         },
//                         color: "white",
//                         fontSize: {
//                           xs: "16px",
//                           sm: "19px",
//                           md: "22px",
//                         },
//                         // border: "1px solid #F15B25",
//                         bgcolor: "#F15B25",
//                         // bgcolor: "#F15B25",
//                         fontWeight: "bold",
//                         "&:hover": {
//                           backgroundColor: "#F15B25",
//                           // border: "1px solid #F15B25",
//                           border: "1px solid #052973",
//                           // color: "white",
//                           color: "white",
//                         },
//                       }}
//                       onClick={sendOTP}
//                     >
//                       Try It Free for 7 Days
//                     </Button>
//                   )}
//                 </Stack>
//                 {modalVisible && (
//                   <div className="modalBackground">
//                     <Stack>
//                       <div className="modalContainer">
//                         <div className="titleCloseBtn">
//                           <button onClick={() => setModalVisible(false)}>
//                             X
//                           </button>
//                         </div>
//                         <Stack
//                           p={{ lg: "20px 40px 40px 40px", xs: "10px 20px" }}
//                         >
//                           <>
//                             {modalMessage && (
//                               <Typography fontSize={"30px"} color="green">
//                                 {modalMessage}
//                               </Typography>
//                             )}
//                             {modalError && (
//                               <Typography fontSize={"15px"} color="red">
//                                 {modalError}
//                               </Typography>
//                             )}
//                           </>
//                         </Stack>
//                       </div>
//                     </Stack>
//                   </div>
//                 )}
//               </Stack>
//             </Stack>
//           </Stack>
//         </Stack>
//       </Stack>
//     </>
//   );
// };

// export default PopupPricing;

// import { Stack, Typography, Snackbar, Alert } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import PersonIcon from "@mui/icons-material/Person";
// import EmailIcon from "@mui/icons-material/Email";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
// import "./PopupPricing.css";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import CitySelector from "./Cityselctor";
// import Button from "./Button";

// const PopupPricing = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const initialState = {
//     Name: "",
//     UserName: "",
//     PhoneCode: "91", // Default to 91 for India, can be changed based on selected country
//     PhoneNumber: "",
//     Email: "",
//     CountryId: 123,
//     StateId: "",
//     Slug: "", // Will be set based on URL
//     Otp: "0", // Static
//     OtpId: 0, // Static
//     CouponCode: "", // Blank
//     SalesExecutiveRefCode: "", // Optional
//   };

//   const [formData, setFormData] = useState(initialState);
//   const [errors, setErrors] = useState({});
//   const [checkboxError, setCheckboxError] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const [modalError, setModalError] = useState("");
//   const [isChecked, setChecked] = useState(false);

//   useEffect(() => {
//     // Set the slug from the URL
//     const pathParts = location.pathname.split("/");
//     const slug = pathParts[pathParts.length - 1];
//     setFormData((prevState) => ({
//       ...prevState,
//       Slug: slug,
//     }));
//   }, [location.pathname]);

//   const validateForm = () => {
//     let tempErrors = {};
//     tempErrors.Name =
//       formData.Name.length > 2 ? "" : "Name must be at least 3 characters";
//     tempErrors.Email = /^\S+@\S+\.\S+$/.test(formData.Email)
//       ? ""
//       : "Email is not valid";
//     tempErrors.UserName =
//       formData.UserName.length > 0 ? "" : "Username is required";
//     if (formData.CountryId === 123) {
//       tempErrors.PhoneNumber =
//         formData.PhoneNumber.length > 0 ? "" : "Phone number is required";
//     }
//     tempErrors.CountryId =
//       formData.CountryId > 0 ? "" : "Please Select Country";
//     tempErrors.StateId = formData.StateId > 0 ? "" : "Please Select State";
//     if (!isChecked) {
//       tempErrors.checkbox = setCheckboxError(
//         "You must agree to the Terms of Service and Privacy to proceed."
//       );
//     }
//     setErrors(tempErrors);
//     return Object.values(tempErrors).every((x) => x === "");
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "PhoneNumber" && value.length > 10) {
//       return;
//     }
//     const newValue = name === "UserName" ? value.replace(/\s+/g, "") : value;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: newValue,
//     }));
//     if (errors[name]) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: "",
//       }));
//     }
//     if (name !== "checkbox" && checkboxError) {
//       setCheckboxError("");
//     }
//   };

//   const handleCheckboxChange = (e) => {
//     const isChecked = e.target.checked;
//     setChecked(isChecked);
//     if (!isChecked) {
//       setCheckboxError(
//         "You must agree to the Terms of Service and Privacy Policy"
//       );
//     } else {
//       setCheckboxError("");
//     }
//   };

//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(123);
//   const [selectedState, setSelectedState] = useState("");

//   useEffect(() => {
//     const fetchCountries = async () => {
//       const response = await axios.get(
//         "http://dev.saniiro.net/api/v1/country"
//       );
//       setCountries(response.data.Data || []);
//     };
//     fetchCountries();
//   }, []);

//   useEffect(() => {
//     const fetchStates = async () => {
//       if (!selectedCountry) return;
//       const response = await axios.get("http://dev.saniiro.net/api/v1/state", {
//         params: { CountryId: selectedCountry },
//       });
//       setStates(response.data.Data || []);
//     };
//     fetchStates();
//   }, [selectedCountry]);

//   const handleCountryChange = (e) => {
//     const newCountryId = Number(e.target.value);
//     setSelectedCountry(newCountryId);
//     setSelectedState("");
//     setFormData((prev) => ({
//       ...prev,
//       CountryId: newCountryId,
//       PhoneCode: newCountryId === 123 ? "91" : "0",
//       StateId: "",
//       PhoneNumber: newCountryId === 123 ? prev.PhoneNumber : "",
//     }));
//   };

//   const handleStateChange = (e) => {
//     const newState = e.target.value;
//     setSelectedState(newState);
//     const foundState = states.find((state) => state.Name === newState);
//     setFormData((prev) => ({
//       ...prev,
//       StateId: foundState ? Number(foundState.Id) : 0,
//     }));
//   };

//   const handlePurchase = async () => {
//     if (!validateForm()) return;

//     const payload = {
//       ...formData,
//       CountryId: Number(formData.CountryId),
//       StateId: Number(formData.StateId),
//     };

//     console.log("Payload to be sent:", payload);

//     try {
//       const response = await axios.post(
//         "http://dev.saniiro.net/api/v1/pricing/purchase",
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Response received:", response.data);

//       if (response.data.Code === 1000) {
//         const transactionId = response.data.Data.Txnid;
//         navigate(`/thank-you/${transactionId}`);
//         localStorage.setItem("validTxnId", transactionId);
//       } else {
//         setModalError("Failed to complete the purchase");
//         setModalVisible(true);
//       }
//     } catch (error) {
//       console.error(
//         "Error during API call:",
//         error.response?.data || error.message || error
//       );
//       setModalError("An error occurred during submission.");
//       setModalVisible(true);
//     }
//   };

//   return (
//     <>
//       <Stack pt={5}>
//         <Stack
//           alignItems={"center"}
//           justifyContent={"space-between"}
//           p={"0 10px"}
//           sx={{
//             flexDirection: {
//               xs: "column",
//               lg: "row",
//             },
//             margin: {
//               xs: "0px",
//               sm: "20px",
//               lg: "0px",
//             },
//           }}
//         >
//           <Stack borderRadius={4} gap={3}>
//             <Typography
//               sx={{
//                 fontSize: {
//                   xs: "18px",
//                   sm: "22px",
//                   md: "28px",
//                   xl: "28px",
//                 },
//                 textAlign: {
//                   xs: "center",
//                 },
//               }}
//               color={"#052973"}
//               fontWeight={"bold"}
//               textAlign={"center"}
//             >
//               Begin Your Journey with{" "}
//               <span style={{ color: "rgb(241, 91, 37)" }}>Saniiro</span> Today!
//             </Typography>
//             <Stack
//               alignItems={"center"}
//               gap={2}
//               margin={"0 auto"}
//               sx={{
//                 width: {
//                   xs: "80%",
//                   sm: "100%",
//                   md: "70%",
//                   lg: "100%",
//                   xl: "100%",
//                 },
//               }}
//             >
//               <Stack direction={"row"} gap={"10px"}>
//                 <Stack>
//                   <Stack
//                     style={{ position: "relative" }}
//                     sx={{
//                       width: {
//                         xs: "220px",
//                         sm: "268px",
//                         smm: "400px",
//                         md: "480px",
//                         lg: "385px",
//                         xl: "480px",
//                       },
//                       height: {
//                         xs: "45px",
//                         sm: "47px",
//                         md: "67px",
//                         lg: "57px",
//                         xl: "67px",
//                       },
//                     }}
//                   >
//                     <input
//                       style={{
//                         width: "94%",
//                         height: "100%",
//                         border: "1px solid #AAAAAA",
//                         color: "#AAAAAA",
//                         paddingLeft: "5%",
//                         fontSize: "20px",
//                         borderRadius: "12px",
//                       }}
//                       type="text"
//                       name="Name"
//                       placeholder="Full Name"
//                       value={formData.Name}
//                       onChange={handleInputChange}
//                     />
//                     <PersonIcon
//                       sx={{
//                         position: "absolute",
//                         top: "50%",
//                         right: "8px",
//                         transform: "translateY(-50%)",
//                         color: "#AAAAAA",
//                         fontSize: {
//                           xl: "40px",
//                           md: "35px",
//                           lg: "38px",
//                           sm: "30px",
//                         },
//                       }}
//                     />
//                   </Stack>
//                   {errors.Name && (
//                     <Typography color="error">{errors.Name}</Typography>
//                   )}
//                 </Stack>
//                 <Stack>
//                   <Stack
//                     style={{ position: "relative" }}
//                     sx={{
//                       width: {
//                         xs: "220px",
//                         sm: "268px",
//                         smm: "400px",
//                         md: "480px",
//                         lg: "385px",
//                         xl: "480px",
//                       },
//                       height: {
//                         xs: "45px",
//                         sm: "47px",
//                         md: "67px",
//                         lg: "57px",
//                         xl: "67px",
//                       },
//                     }}
//                   >
//                     <input
//                       type="email"
//                       name="Email"
//                       placeholder="Work Email"
//                       value={formData.Email}
//                       onChange={handleInputChange}
//                       style={{
//                         width: "94%",
//                         height: "100%",
//                         border: "1px solid #AAAAAA",
//                         color: "#AAAAAA",
//                         paddingLeft: "5%",
//                         fontSize: "20px",
//                         borderRadius: "12px",
//                       }}
//                     />
//                     <EmailIcon
//                       sx={{
//                         position: "absolute",
//                         top: "50%",
//                         right: "8px",
//                         transform: "translateY(-50%)",
//                         color: "#AAAAAA",
//                         fontSize: {
//                           xl: "40px",
//                           md: "35px",
//                           lg: "38px",
//                           sm: "30px",
//                         },
//                       }}
//                     />
//                   </Stack>
//                   {errors.Email && (
//                     <Typography color="error">{errors.Email}</Typography>
//                   )}
//                 </Stack>
//               </Stack>
//               <Stack direction={"row"} gap={"10px"}>
//                 <Stack>
//                   <Stack
//                     style={{ position: "relative" }}
//                     sx={{
//                       width: {
//                         xs: "220px",
//                         md: "480px",
//                         sm: "268px",
//                         smm: "400px",
//                         lg: "385px",
//                         xl: "480px",
//                       },
//                       height: {
//                         xs: "45px",
//                         sm: "47px",
//                         md: "67px",
//                         lg: "57px",
//                         xl: "67px",
//                       },
//                     }}
//                   >
//                     <input
//                       type="text"
//                       name="UserName"
//                       placeholder="User name"
//                       value={formData.UserName}
//                       onChange={handleInputChange}
//                       style={{
//                         width: "94%",
//                         height: "100%",
//                         border: "1px solid #AAAAAA",
//                         paddingLeft: "5%",
//                         color: "#AAAAAA",
//                         fontSize: "20px",
//                         borderRadius: "12px",
//                       }}
//                     />
//                     <AccountCircleIcon
//                       sx={{
//                         position: "absolute",
//                         top: "50%",
//                         right: "8px",
//                         transform: "translateY(-50%)",
//                         color: "#AAAAAA",
//                         fontSize: {
//                           xl: "40px",
//                           md: "35px",
//                           lg: "38px",
//                           sm: "30px",
//                         },
//                       }}
//                     />
//                   </Stack>
//                   {errors.UserName && (
//                     <Typography color="error">{errors.UserName}</Typography>
//                   )}
//                 </Stack>
//                 <CitySelector
//                   selectedCountry={selectedCountry}
//                   handleCountryChange={handleCountryChange}
//                   countries={countries}
//                   selectedState={selectedState}
//                   handleStateChange={handleStateChange}
//                   states={states}
//                   errors={errors}
//                 />
//               </Stack>
//               <Stack direction={"row"} gap={"10px"}>
//                 <Stack>
//                   <Stack
//                     style={{ position: "relative" }}
//                     sx={{
//                       width: {
//                         xs: "220px",
//                         md: "480px",
//                         sm: "268px",
//                         smm: "400px",
//                         lg: "385px",
//                         xl: "480px",
//                       },
//                       height: {
//                         xs: "45px",
//                         sm: "47px",
//                         md: "67px",
//                         lg: "57px",
//                         xl: "67px",
//                       },
//                     }}
//                   >
//                     <input
//                       type="text"
//                       name="SalesExecutive"
//                       placeholder="Sales Executive"
//                       value={formData.SalesExecutive}
//                       onChange={handleInputChange}
//                       style={{
//                         width: "94%",
//                         height: "100%",
//                         border: "1px solid #AAAAAA",
//                         paddingLeft: "5%",
//                         color: "#AAAAAA",
//                         fontSize: "20px",
//                         borderRadius: "12px",
//                       }}
//                     />
//                     <AccountCircleIcon
//                       sx={{
//                         position: "absolute",
//                         top: "50%",
//                         right: "8px",
//                         transform: "translateY(-50%)",
//                         color: "#AAAAAA",
//                         fontSize: {
//                           xl: "40px",
//                           md: "35px",
//                           lg: "38px",
//                           sm: "30px",
//                         },
//                       }}
//                     />
//                   </Stack>
//                   {errors.SalesExecutive && (
//                     <Typography color="error">
//                       {errors.SalesExecutive}
//                     </Typography>
//                   )}
//                 </Stack>
//                 <Stack>
//                   {selectedCountry === 123 && (
//                     <Stack
//                       style={{ position: "relative" }}
//                       sx={{
//                         width: {
//                           xs: "220px",
//                           sm: "268px",
//                           smm: "400px",
//                           md: "480px",
//                           lg: "385px",
//                           xl: "480px",
//                         },
//                         height: {
//                           xs: "45px",
//                           sm: "47px",
//                           md: "67px",
//                           lg: "57px",
//                           xl: "67px",
//                         },
//                       }}
//                     >
//                       <input
//                         type="tel"
//                         className="input-new"
//                         value={formData.PhoneNumber}
//                         name="PhoneNumber"
//                         placeholder="Phone Number"
//                         onChange={handleInputChange}
//                         maxLength={16}
//                         style={{
//                           width: "94%",
//                           height: "100%",
//                           border: "1px solid #AAAAAA",
//                           color: "#AAAAAA",
//                           paddingLeft: "5%",
//                           fontSize: "20px",
//                           borderRadius: "12px",
//                           WebkitAppearance: "none",
//                           MozAppearance: "textfield",
//                         }}
//                       />
//                       <PhoneAndroidIcon
//                         sx={{
//                           position: "absolute",
//                           top: "50%",
//                           right: "16px",
//                           transform: "translateY(-50%)",
//                           color: "#AAAAAA",
//                           fontSize: {
//                             xl: "40px",
//                             md: "35px",
//                             lg: "38px",
//                             sm: "30px",
//                           },
//                         }}
//                       />
//                     </Stack>
//                   )}
//                   {formData.PhoneNumber.length === 16 && (
//                     <div style={{ color: "red" }}>
//                       Maximum 16 characters allowed.
//                     </div>
//                   )}
//                   {errors.PhoneNumber && (
//                     <Typography color="error">{errors.PhoneNumber}</Typography>
//                   )}
//                 </Stack>
//               </Stack>
//               <Stack
//                 gap={2}
//                 sx={{
//                   alignItems: {
//                     xs: "center",
//                     lg: "left",
//                   },
//                 }}
//               >
//                 <Stack>
//                   <Stack
//                     direction={"row"}
//                     gap={1}
//                     sx={{ textAlign: { xs: "left", lg: "left" } }}
//                   >
//                     <input
//                       type="checkbox"
//                       checked={isChecked}
//                       onChange={handleCheckboxChange}
//                     />
//                     <Typography fontSize={"13px"} color={"#052973"}>
//                       I agree to the Terms of Service and Privacy Policy.
//                     </Typography>
//                   </Stack>
//                   {checkboxError && (
//                     <Typography
//                       color="error"
//                       sx={{ fontSize: "14px", marginLeft: "20px" }}
//                     >
//                       {checkboxError}
//                     </Typography>
//                   )}
//                 </Stack>
//                 <Stack gap={"20px"} alignItems={"center"}>
//                   <Button
//                     type="button"
//                     sx={{
//                       borderRadius: "10px",
//                       width: {
//                         xs: "220px",
//                         sm: "268px",
//                         smm: "400px",
//                         md: "480px",
//                         lg: "385px",
//                         xl: "400px",
//                       },
//                       height: {
//                         xs: "45px",
//                         sm: "55px",
//                         md: "67px",
//                         lg: "57px",
//                         xl: "67px",
//                       },
//                       color: "white",
//                       fontSize: {
//                         xs: "16px",
//                         sm: "19px",
//                         md: "22px",
//                       },
//                       bgcolor: "#F15B25",
//                       fontWeight: "bold",
//                       "&:hover": {
//                         backgroundColor: "#F15B25",
//                         border: "1px solid #052973",
//                         color: "white",
//                       },
//                     }}
//                     onClick={handlePurchase}
//                   >
//                     Try It Free for 7 Days
//                   </Button>
//                 </Stack>
//                 {modalVisible && (
//                   <div className="modalBackground">
//                     <Stack>
//                       <div className="modalContainer">
//                         <div className="titleCloseBtn">
//                           <button onClick={() => setModalVisible(false)}>
//                             X
//                           </button>
//                         </div>
//                         <Stack
//                           p={{ lg: "20px 40px 40px 40px", xs: "10px 20px" }}
//                         >
//                           <>
//                             {modalMessage && (
//                               <Typography fontSize={"30px"} color="green">
//                                 {modalMessage}
//                               </Typography>
//                             )}
//                             {modalError && (
//                               <Typography fontSize={"15px"} color="red">
//                                 {modalError}
//                               </Typography>
//                             )}
//                           </>
//                         </Stack>
//                       </div>
//                     </Stack>
//                   </div>
//                 )}
//               </Stack>
//             </Stack>
//           </Stack>
//         </Stack>
//       </Stack>
//     </>
//   );
// };

// export default PopupPricing;

import React, { useEffect, useState } from "react";
import { Stack, Typography, Snackbar, Alert } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import "./PopupPricing.css";
import axios from "axios";

import { useRouter } from "next/navigation";
import CitySelector from "./Cityselctor";
import Button from "./Button";
import PayLinkRazorpay from "./PayLinkRazorpay";
import PayLink from "./PayLink";

const PopupPricing = () => {
  const router = useRouter();

  const initialState = {
    Name: "",
    UserName: "",
    PhoneCode: "91", // Default to 91 for India, can be changed based on selected country
    PhoneNumber: "",
    Email: "",
    CountryId: 123,
    StateId: "",
    Slug: "", // Will be set based on URL
    Otp: "0", // Static
    OtpId: 0, // Static
    CouponCode: "", // Blank
    SalesExecutiveRefCode: "", // Optional
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [checkboxError, setCheckboxError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalError, setModalError] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    // Set the slug from the URL
    const pathParts = router.pathname.split("/");
    const slug = pathParts[pathParts.length - 1];
    setFormData((prevState) => ({
      ...prevState,
      Slug: slug,
    }));
  }, [router.pathname]);

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.Name =
      formData.Name.length > 2 ? "" : "Name must be at least 3 characters";
    tempErrors.Email = /^\S+@\S+\.\S+$/.test(formData.Email)
      ? ""
      : "Email is not valid";
    tempErrors.UserName =
      formData.UserName.length > 0 ? "" : "Username is required";
    if (formData.CountryId === 123) {
      tempErrors.PhoneNumber =
        formData.PhoneNumber.length > 0 ? "" : "Phone number is required";
    }
    tempErrors.CountryId =
      formData.CountryId > 0 ? "" : "Please Select Country";
    tempErrors.StateId = formData.StateId > 0 ? "" : "Please Select State";
    if (!isChecked) {
      tempErrors.checkbox = setCheckboxError(
        "You must agree to the Terms of Service and Privacy to proceed."
      );
    }
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "PhoneNumber" && value.length > 10) {
      return;
    }
    const newValue = name === "UserName" ? value.replace(/\s+/g, "") : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
    if (name !== "checkbox" && checkboxError) {
      setCheckboxError("");
    }
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    if (!isChecked) {
      setCheckboxError(
        "You must agree to the Terms of Service and Privacy Policy"
      );
    } else {
      setCheckboxError("");
    }
  };

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(123);
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get("http://dev.saniiro.net/api/v1/country");
      setCountries(response.data.Data || []);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      if (!selectedCountry) return;
      const response = await axios.get("http://dev.saniiro.net/api/v1/state", {
        params: { CountryId: selectedCountry },
      });
      setStates(response.data.Data || []);
    };
    fetchStates();
  }, [selectedCountry]);

  const handleCountryChange = (e) => {
    const newCountryId = Number(e.target.value);
    setSelectedCountry(newCountryId);
    setSelectedState("");
    setFormData((prev) => ({
      ...prev,
      CountryId: newCountryId,
      PhoneCode: newCountryId === 123 ? "91" : "0",
      StateId: "",
      PhoneNumber: newCountryId === 123 ? prev.PhoneNumber : "",
    }));
  };

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    const foundState = states.find((state) => state.Name === newState);
    setFormData((prev) => ({
      ...prev,
      StateId: foundState ? Number(foundState.Id) : 0,
    }));
  };

  const handlePurchase = async () => {
    if (!validateForm()) return;

    const payload = {
      ...formData,
      CountryId: Number(formData.CountryId),
      StateId: Number(formData.StateId),
    };

    console.log("Payload to be sent:", payload);

    try {
      const response = await axios.post(
        "http://dev.saniiro.net/api/v1/pricing/purchase",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response received:", response.data);

      if (response.data.Code === 1000) {
        const transactionId = response.data.Data.Txnid;
        setPaymentData(response.data.Data);
      } else {
        setModalError("Failed to complete the purchase");
        setModalVisible(true);
      }
    } catch (error) {
      console.error(
        "Error during API call:",
        error.response?.data || error.message || error
      );
      setModalError("An error occurred during submission.");
      setModalVisible(true);
    }
  };

  return (
    <>
      <Stack pt={5}>
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          p={"0 10px"}
          sx={{
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            margin: {
              xs: "0px",
              sm: "20px",
              lg: "0px",
            },
          }}
        >
          <Stack borderRadius={4} gap={3}>
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "22px",
                  md: "28px",
                  xl: "28px",
                },
                textAlign: {
                  xs: "center",
                },
              }}
              color={"#052973"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Begin Your Journey with{" "}
              <span style={{ color: "rgb(241, 91, 37)" }}>Saniiro</span> Today!
            </Typography>
            <Stack
              alignItems={"center"}
              gap={2}
              margin={"0 auto"}
              sx={{
                width: {
                  xs: "80%",
                  sm: "100%",
                  md: "70%",
                  lg: "100%",
                  xl: "100%",
                },
              }}
            >
              <Stack direction={"row"} gap={"10px"}>
                <Stack>
                  <Stack
                    style={{ position: "relative" }}
                    sx={{
                      width: {
                        xs: "220px",
                        sm: "268px",
                        smm: "400px",
                        md: "480px",
                        lg: "385px",
                        xl: "480px",
                      },
                      height: {
                        xs: "45px",
                        sm: "47px",
                        md: "67px",
                        lg: "57px",
                        xl: "67px",
                      },
                    }}
                  >
                    <input
                      style={{
                        width: "94%",
                        height: "100%",
                        border: "1px solid #AAAAAA",
                        color: "#AAAAAA",
                        paddingLeft: "5%",
                        fontSize: "20px",
                        borderRadius: "12px",
                      }}
                      type="text"
                      name="Name"
                      placeholder="Full Name"
                      value={formData.Name}
                      onChange={handleInputChange}
                    />
                    <PersonIcon
                      sx={{
                        position: "absolute",
                        top: "50%",
                        right: "8px",
                        transform: "translateY(-50%)",
                        color: "#AAAAAA",
                        fontSize: {
                          xl: "40px",
                          md: "35px",
                          lg: "38px",
                          sm: "30px",
                        },
                      }}
                    />
                  </Stack>
                  {errors.Name && (
                    <Typography color="error">{errors.Name}</Typography>
                  )}
                </Stack>
                <Stack>
                  <Stack
                    style={{ position: "relative" }}
                    sx={{
                      width: {
                        xs: "220px",
                        sm: "268px",
                        smm: "400px",
                        md: "480px",
                        lg: "385px",
                        xl: "480px",
                      },
                      height: {
                        xs: "45px",
                        sm: "47px",
                        md: "67px",
                        lg: "57px",
                        xl: "67px",
                      },
                    }}
                  >
                    <input
                      type="email"
                      name="Email"
                      placeholder="Work Email"
                      value={formData.Email}
                      onChange={handleInputChange}
                      style={{
                        width: "94%",
                        height: "100%",
                        border: "1px solid #AAAAAA",
                        color: "#AAAAAA",
                        paddingLeft: "5%",
                        fontSize: "20px",
                        borderRadius: "12px",
                      }}
                    />
                    <EmailIcon
                      sx={{
                        position: "absolute",
                        top: "50%",
                        right: "8px",
                        transform: "translateY(-50%)",
                        color: "#AAAAAA",
                        fontSize: {
                          xl: "40px",
                          md: "35px",
                          lg: "38px",
                          sm: "30px",
                        },
                      }}
                    />
                  </Stack>
                  {errors.Email && (
                    <Typography color="error">{errors.Email}</Typography>
                  )}
                </Stack>
              </Stack>
              <Stack direction={"row"} gap={"10px"}>
                <Stack>
                  <Stack
                    style={{ position: "relative" }}
                    sx={{
                      width: {
                        xs: "220px",
                        md: "480px",
                        sm: "268px",
                        smm: "400px",
                        lg: "385px",
                        xl: "480px",
                      },
                      height: {
                        xs: "45px",
                        sm: "47px",
                        md: "67px",
                        lg: "57px",
                        xl: "67px",
                      },
                    }}
                  >
                    <input
                      type="text"
                      name="UserName"
                      placeholder="User name"
                      value={formData.UserName}
                      onChange={handleInputChange}
                      style={{
                        width: "94%",
                        height: "100%",
                        border: "1px solid #AAAAAA",
                        paddingLeft: "5%",
                        color: "#AAAAAA",
                        fontSize: "20px",
                        borderRadius: "12px",
                      }}
                    />
                    <AccountCircleIcon
                      sx={{
                        position: "absolute",
                        top: "50%",
                        right: "8px",
                        transform: "translateY(-50%)",
                        color: "#AAAAAA",
                        fontSize: {
                          xl: "40px",
                          md: "35px",
                          lg: "38px",
                          sm: "30px",
                        },
                      }}
                    />
                  </Stack>
                  {errors.UserName && (
                    <Typography color="error">{errors.UserName}</Typography>
                  )}
                </Stack>
                <CitySelector
                  selectedCountry={selectedCountry}
                  handleCountryChange={handleCountryChange}
                  countries={countries}
                  selectedState={selectedState}
                  handleStateChange={handleStateChange}
                  states={states}
                  errors={errors}
                />
              </Stack>
              <Stack direction={"row"} gap={"10px"}>
                <Stack>
                  <Stack
                    style={{ position: "relative" }}
                    sx={{
                      width: {
                        xs: "220px",
                        md: "480px",
                        sm: "268px",
                        smm: "400px",
                        lg: "385px",
                        xl: "480px",
                      },
                      height: {
                        xs: "45px",
                        sm: "47px",
                        md: "67px",
                        lg: "57px",
                        xl: "67px",
                      },
                    }}
                  >
                    <input
                      type="text"
                      name="SalesExecutive"
                      placeholder="Sales Executive"
                      value={formData.SalesExecutive}
                      onChange={handleInputChange}
                      style={{
                        width: "94%",
                        height: "100%",
                        border: "1px solid #AAAAAA",
                        paddingLeft: "5%",
                        color: "#AAAAAA",
                        fontSize: "20px",
                        borderRadius: "12px",
                      }}
                    />
                    <AccountCircleIcon
                      sx={{
                        position: "absolute",
                        top: "50%",
                        right: "8px",
                        transform: "translateY(-50%)",
                        color: "#AAAAAA",
                        fontSize: {
                          xl: "40px",
                          md: "35px",
                          lg: "38px",
                          sm: "30px",
                        },
                      }}
                    />
                  </Stack>
                  {errors.SalesExecutive && (
                    <Typography color="error">
                      {errors.SalesExecutive}
                    </Typography>
                  )}
                </Stack>
                <Stack>
                  {selectedCountry === 123 && (
                    <Stack
                      style={{ position: "relative" }}
                      sx={{
                        width: {
                          xs: "220px",
                          sm: "268px",
                          smm: "400px",
                          md: "480px",
                          lg: "385px",
                          xl: "480px",
                        },
                        height: {
                          xs: "45px",
                          sm: "47px",
                          md: "67px",
                          lg: "57px",
                          xl: "67px",
                        },
                      }}
                    >
                      <input
                        type="tel"
                        className="input-new"
                        value={formData.PhoneNumber}
                        name="PhoneNumber"
                        placeholder="Phone Number"
                        onChange={handleInputChange}
                        maxLength={16}
                        style={{
                          width: "94%",
                          height: "100%",
                          border: "1px solid #AAAAAA",
                          color: "#AAAAAA",
                          paddingLeft: "5%",
                          fontSize: "20px",
                          borderRadius: "12px",
                          WebkitAppearance: "none",
                          MozAppearance: "textfield",
                        }}
                      />
                      <PhoneAndroidIcon
                        sx={{
                          position: "absolute",
                          top: "50%",
                          right: "16px",
                          transform: "translateY(-50%)",
                          color: "#AAAAAA",
                          fontSize: {
                            xl: "40px",
                            md: "35px",
                            lg: "38px",
                            sm: "30px",
                          },
                        }}
                      />
                    </Stack>
                  )}
                  {formData.PhoneNumber.length === 16 && (
                    <div style={{ color: "red" }}>
                      Maximum 16 characters allowed.
                    </div>
                  )}
                  {errors.PhoneNumber && (
                    <Typography color="error">{errors.PhoneNumber}</Typography>
                  )}
                </Stack>
              </Stack>
              <Stack
                gap={2}
                sx={{
                  alignItems: {
                    xs: "center",
                    lg: "left",
                  },
                }}
              >
                <Stack>
                  <Stack
                    direction={"row"}
                    gap={1}
                    sx={{ textAlign: { xs: "left", lg: "left" } }}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <Typography fontSize={"13px"} color={"#052973"}>
                      I agree to the Terms of Service and Privacy Policy.
                    </Typography>
                  </Stack>
                  {checkboxError && (
                    <Typography
                      color="error"
                      sx={{ fontSize: "14px", marginLeft: "20px" }}
                    >
                      {checkboxError}
                    </Typography>
                  )}
                </Stack>
                <Stack gap={"20px"} alignItems={"center"}>
                  <Button
                    type="button"
                    sx={{
                      borderRadius: "10px",
                      width: {
                        xs: "220px",
                        sm: "268px",
                        smm: "400px",
                        md: "480px",
                        lg: "385px",
                        xl: "400px",
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
                      bgcolor: "#F15B25",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#F15B25",
                        border: "1px solid #052973",
                        color: "white",
                      },
                    }}
                    onClick={handlePurchase}
                  >
                    Try It Free for 7 Days
                  </Button>
                </Stack>
                {modalVisible && (
                  <div className="modalBackground">
                    <Stack>
                      <div className="modalContainer">
                        <div className="titleCloseBtn">
                          <button onClick={() => setModalVisible(false)}>
                            X
                          </button>
                        </div>
                        <Stack
                          p={{ lg: "20px 40px 40px 40px", xs: "10px 20px" }}
                        >
                          <>
                            {modalMessage && (
                              <Typography fontSize={"30px"} color="green">
                                {modalMessage}
                              </Typography>
                            )}
                            {modalError && (
                              <Typography fontSize={"15px"} color="red">
                                {modalError}
                              </Typography>
                            )}
                          </>
                        </Stack>
                      </div>
                    </Stack>
                  </div>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {paymentData && (
        <>
          {paymentData.Priority === "RazorPay" ? (
            <PayLinkRazorpay paymentData={paymentData.Order} />
          ) : (
            <PayLink paymentData={paymentData} />
          )}
        </>
      )}
    </>
  );
};

export default PopupPricing;
