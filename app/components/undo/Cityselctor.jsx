// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Stack, Typography } from "@mui/material";

// const CitySelector = ({
//   handleCountryChange,
//   countries,
//   selectedState,
//   handleStateChange,
//   selectedCountry,
//   states,
//   errors,
//   otpSent
// }) => {
//   return (
//     <Stack
//       direction={"row"}
//       gap={1}
//       style={{ position: "relative" }}
//       sx={{
//         width: {
//           xs: "220px",
//           sm: "268px",
//           smm: "400px",
//           md: "480px",
//           lg: "385px",
//           xl: "480px",
//         },
//         height: {
//           xs: "45px",
//           sm: "47px",
//           md: "67px",
//           lg: "57px",
//           xl: "67px",
//         },
//       }}
//     >
//       <select
//         id="country"
//         value={selectedCountry}
//         onChange={handleCountryChange}
//         className="input-city"
//         disabled={otpSent}
//         style={{ borderRadius: "12px", color: otpSent ? "#DDDDDD" : "#AAAAAA" }}
//       >
//         <option value="">Select Country</option>
//         {countries.map((country) => (
//           <option key={country.Id} value={country.Id}>
//             {country.Name}
//           </option>
//         ))}
//       </select>
//       {errors.CountryId && (
//         <Typography color="error">{errors.CountryId}</Typography>
//       )}

//       <select
//         id="state"
//         value={selectedState}
//         onChange={handleStateChange}
//         disabled={otpSent}
//         className="input-city"
//         style={{ borderRadius: "12px" }}
//       >
//         <option value="">Select State</option>
//         {states.map((state) => (
//           <option key={state.Id} value={state.Name}>
//             {state.Name}
//           </option>
//         ))}
//       </select>
//       {errors.StateId && (
//         <Typography color="error">{errors.StateId}</Typography>
//       )}
//     </Stack>
//   );
// };

// export default CitySelector;


import React from "react";
import { Stack, Typography } from "@mui/material";

const CitySelector = ({
  handleCountryChange,
  countries,
  selectedState,
  handleStateChange,
  selectedCountry,
  states,
  errors,
  otpSent
}) => {
  return (
    <>
    <Stack
      direction={"row"}
      gap={1}
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
      <select
        id="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="input-city"
        disabled={otpSent}
        style={{ borderRadius: "12px", color: otpSent ? "#DDDDDD" : "#AAAAAA" }}
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.Id} value={country.Id}>
            {country.Name}
          </option>
        ))}
      </select>
      {errors.CountryId && (
        <Typography color="error">{errors.CountryId}</Typography>
      )}

      <select
        id="state"
        value={selectedState}
        onChange={handleStateChange}
        disabled={otpSent}
        className="input-city"
        style={{ borderRadius: "12px" }}
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state.Id} value={state.Name}>
            {state.Name}
          </option>
        ))}
      </select>
      
    </Stack>
    {errors.StateId && (
        <Typography color="error">{errors.StateId}</Typography>
      )}
      </>
  );
};

export default CitySelector;
