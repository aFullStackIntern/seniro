// import { Stack } from "@mui/material";
// import React, { useState } from "react";

// const CitySelector = () => {
//   // Sample data for states and cities
//   const stateOptions = [
//     { id: 1, name: "India", cities: ["Rajasthan", "Gujrat", "Maharashta"] },
//     { id: 2, name: "Usa", cities: ["New york", "Alaska", "Maryland"] },
//     // Add more states and cities as needed
//   ];

//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [cityOptions, setCityOptions] = useState([]);

//   const handleStateChange = (e) => {
//     const newState = e.target.value;
//     setSelectedState(newState);

//     // Find the selected state in the options and update the city options
//     const selectedStateData = stateOptions.find(
//       (state) => state.name === newState
//     );
//     setCityOptions(selectedStateData ? selectedStateData.cities : []);
//     setSelectedCity(""); // Reset selected city when state changes
//   };

//   const handleCityChange = (e) => {
//     setSelectedCity(e.target.value);
//   };

//   return (
//     <Stack
//       direction={"row"}
//       gap={1}
//       style={{ position: "relative" }}
//       sx={{
//         width: {
//           xs: "220px",
//           sm: "300px",
//           md: "480px",
//           lg: "385px",
//           xl: "480px",
//         },
//         height: {
//           xs: "45px",
//           sm: "55px",
//           md: "67px",
//           lg: "57px",
//           xl: "67px",
//         },
//       }}
//     >
//       <select
//         id="state"
//         value={selectedState}
//         onChange={handleStateChange}
//         className="input-city"
//       >
//         <option value="">Select Country</option>
//         {stateOptions.map((state) => (
//           <option key={state.id} value={state.name}>
//             {state.name}
//           </option>
//         ))}
//       </select>

//       <select
//         id="city"
//         value={selectedCity}
//         onChange={handleCityChange}
//         disabled={!selectedState}
//         className="input-city"
//       >
//         <option value="">Select State</option>
//         {cityOptions.map((city, index) => (
//           <option key={index} value={city}>
//             {city}
//           </option>
//         ))}
//       </select>
//     </Stack>
//   );
// };

// export default CitySelector;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography } from "@mui/material";

const CitySelector = ({
  handleCountryChange,
  countries = [],
  selectedState,
  handleStateChange,
  selectedCountry,
  states = [],
  errors,
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
            sm: "270px",
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
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.Id} value={country.Id}>
              {country.Name}
            </option>
          ))}
        </select>
        {errors?.CountryId && (
          <Typography color="error">{errors?.CountryId}</Typography>
        )}

        <select
          id="state"
          value={selectedState}
          onChange={handleStateChange}
          disabled={!selectedCountry}
          className="input-city"
        >
          <option value="">Select State</option>
          {states?.map((state) => (
            <option key={state.Id} value={state.Name}>
              {state.Name}
            </option>
          ))}
        </select>
      </Stack>
      {errors?.StateId && (
        <Typography color="error">{errors?.StateId}</Typography>
      )}
    </>
  );
};

export default CitySelector;
