// import React, { useState } from "react";
// import { Box, Stack, Typography } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import BannerImg from "./assets/Group 62842.png";
// import SearchIcon from "@mui/icons-material/Search";
// import InputAdornment from "@mui/material/InputAdornment";

// const CareerBanner = () => {
//   const [department, setDepartment] = useState("");
//   const [countries, setCountries] = useState("");

//   const handleChangeDepartment = (event) => {
//     setDepartment(event.target.value);
//   };

//   const handleChangeCountries = (event) => {
//     setCountries(event.target.value);
//   };

//   return (
//     <>

//       <Stack position="relative" height="100%">
//         <Box
//           component="img"
//           sx={{
//             width: "100%",
//             maxWidth: "100%",
//             height: "auto",
//           }}
//           alt="Banner Image"
//           src={BannerImg}
//         />
//         <Stack
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             margin: "auto",
//             width: {
//               xs: "60%",
//               sm: "60%",
//               md: "60%",
//               lg: "60%",
//             },
//             height: {
//               xs: "70%",
//             },
//             textAlign: "center",
//             backgroundColor: "white",
//             justifyContent: "center",
//           }}
//         >
//           <Content
//             department={department}
//             countries={countries}
//             handleChangeDepartment={handleChangeDepartment}
//             handleChangeCountries={handleChangeCountries}
//           />
//         </Stack>
//       </Stack>

//       <Stack
//         display={{
//           xs: "block",
//           lg: "none",
//         }}
//         mt={5}
//         width={"90%"}
//         margin={"15px auto"}
//       >
//         <Typography
//           sx={{
//             width: "100%",
//             fontFamily: "Work Sans",
//             fontSize: {
//               xs: "16px",
//               smm: "20px",
//               md: "32px",
//               lg: "37px",
//               xl: "50px",
//               xxl: "60px",
//             },
//             fontWeight: 600,
//             letterSpacing: "0em",
//             textAlign: "center",
//             color: "#052973",
//           }}
//         >
//           Search Jobs
//         </Typography>

//         <Box
//           display="flex"
//           gap={2}
//           sx={{
//             minWidth: {
//               md: "400px",
//               lg: "540px",
//             },
//             textAlign: "left",
//           }}
//         >
//           <FormSelect
//             id="department-select"
//             label="All Department"
//             value={department}
//             onChange={handleChangeDepartment}
//           >
//             <MenuItem value={10}>Department 1</MenuItem>
//             <MenuItem value={20}>Department 2</MenuItem>
//             <MenuItem value={30}>Department 3</MenuItem>
//           </FormSelect>
//           <FormSelect
//             id="countries-select"
//             label="All Countries"
//             value={countries}
//             onChange={handleChangeCountries}
//           >
//             <MenuItem value={10}>Country 1</MenuItem>
//             <MenuItem value={20}>Country 2</MenuItem>
//             <MenuItem value={30}>Country 3</MenuItem>
//           </FormSelect>
//         </Box>
//       </Stack>
//     </>
//   );
// };

// const Content = ({
//   department,
//   countries,
//   handleChangeDepartment,
//   handleChangeCountries,
// }) => {
//   return (
//     <>
//       <Stack
//         p={2}
//         direction="column"
//         alignItems="center"
//         justifyContent="space-evenly"
//         gap={{
//           xs: 0,
//           lg: 0,
//         }}
//       >
//         <Typography
//           sx={{
//             width: "100%",
//             fontFamily: "Work Sans",
//             fontSize: {
//               xs: "8px",
//               sm: "14px",
//               smm: "20px",
//               md: "32px",
//               lg: "37px",
//               xl: "50px",
//             },
//             fontWeight: 600,
//             letterSpacing: "0em",
//             textAlign: "center",
//             color: "#4DB267",
//             textTransform: "uppercase",
//           }}
//         >
//           Want to have an impact
//         </Typography>
//         <Typography
//           sx={{
//             width: "100%",
//             fontFamily: "Work Sans",
//             fontSize: {
//               xs: "8px",
//               sm: "14px",
//               smm: "20px",
//               md: "32px",
//               lg: "37px",
//               xl: "50px",
//             },
//             fontWeight: 600,
//             letterSpacing: "0em",
//             textAlign: "center",
//             color: "#052973",
//           }}
//         >
//           while having fun?
//         </Typography>
//         <Typography
//           sx={{
//             width: "100%",
//             fontFamily: "Work Sans",
//             fontSize: {
//               xs: "6px",
//               sm: "10px",
//               smm: "12px",
//               md: "14px",
//             },
//             fontWeight: 400,
//             letterSpacing: "0em",
//             textAlign: "center",
//           }}
//         >
//           Master in Business Administration, Civil Engineering, or Computer
//           Sciences.
//         </Typography>
//         <Stack
//           margin={"0 auto"}
//           display={{
//             xs: "none",
//             lg: "flex",
//           }}
//         >

//           <Box
//             display="flex"
//             gap={2}
//             sx={{
//               minWidth: {
//                 md: "400px",
//                 lg: "540px",
//               },
//               textAlign: "left",
//             }}
//           >
//             <FormSelect
//               id="department-select"
//               label="All Department"
//               value={department}
//               onChange={handleChangeDepartment}
//             >
//               <MenuItem value={10}>Department 1</MenuItem>
//               <MenuItem value={20}>Department 2</MenuItem>
//               <MenuItem value={30}>Department 3</MenuItem>
//             </FormSelect>
//             <FormSelect
//               id="countries-select"
//               label="All Countries"
//               value={countries}
//               onChange={handleChangeCountries}
//             >
//               <MenuItem value={10}>Country 1</MenuItem>
//               <MenuItem value={20}>Country 2</MenuItem>
//               <MenuItem value={30}>Country 3</MenuItem>
//             </FormSelect>
//           </Box>
//         </Stack>
//       </Stack>
//     </>
//   );
// };

// const FormSelect = ({ id, label, value, onChange, children }) => {
//   return (
//     <FormControl sx={{ backgroundColor: "#F5F5F5" }} fullWidth>
//       <InputLabel id={`${id}-label`}>{label}</InputLabel>
//       <Select
//         labelId={`${id}-label`}
//         id={id}
//         value={value}
//         label={label}
//         onChange={onChange}
//       >
//         {children}
//       </Select>
//     </FormControl>
//   );
// };

// export default CareerBanner;

// import React, { useState, useEffect } from "react";
// import { Box, Stack, Typography } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import BannerImg from "./assets/Group 62842.png";
// import SearchIcon from "@mui/icons-material/Search";
// import InputAdornment from "@mui/material/InputAdornment";
// import axios from "axios";

// const CareerBanner = () => {
//   const [department, setDepartment] = useState("");
//   const [countries, setCountries] = useState("");
//   const [departmentsData, setDepartmentsData] = useState([]);
//   const [countriesData, setCountriesData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://dev.saniiro.net/api/v1/career/departments-and-countries"
//         );
//         const data = response.data.Data;
//         setDepartmentsData(data.AllDepartment);
//         setCountriesData(data.Countries);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleChangeDepartment = (event) => {
//     setDepartment(event.target.value);
//   };

//   const handleChangeCountries = (event) => {
//     setCountries(event.target.value);
//   };

//   return (
//     <>
//       <Stack position="relative" height="100%">
//         <Box
//           component="img"
//           sx={{
//             width: "100%",
//             maxWidth: "100%",
//             height: "auto",
//           }}
//           alt="Banner Image"
//           src={BannerImg}
//         />
//         <Stack
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             margin: "auto",
//             width: {
//               xs: "60%",
//               sm: "60%",
//               md: "60%",
//               lg: "60%",
//             },
//             height: {
//               xs: "70%",
//             },
//             textAlign: "center",
//             backgroundColor: "white",
//             justifyContent: "center",
//           }}
//         >
//           <Content
//             department={department}
//             countries={countries}
//             handleChangeDepartment={handleChangeDepartment}
//             handleChangeCountries={handleChangeCountries}
//             departmentsData={departmentsData}
//             countriesData={countriesData}
//           />
//         </Stack>
//       </Stack>

//       <Stack
//         display={{
//           xs: "block",
//           lg: "none",
//         }}
//         mt={5}
//         width={"90%"}
//         margin={"15px auto"}
//       >
//         <Typography
//           sx={{
//             width: "100%",
//             fontFamily: "Work Sans",
//             fontSize: {
//               xs: "16px",
//               smm: "20px",
//               md: "32px",
//               lg: "37px",
//               xl: "50px",
//               xxl: "60px",
//             },
//             fontWeight: 600,
//             letterSpacing: "0em",
//             textAlign: "center",
//             color: "#052973",
//           }}
//         >
//           Search Jobs
//         </Typography>

//         <Box
//           display="flex"
//           gap={2}
//           sx={{
//             minWidth: {
//               md: "400px",
//               lg: "540px",
//             },
//             textAlign: "left",
//           }}
//         >
//           <FormSelect
//             id="department-select"
//             label="All Department"
//             value={department}
//             onChange={handleChangeDepartment}
//             data={departmentsData}
//           />
//           <FormSelect
//             id="countries-select"
//             label="All Countries"
//             value={countries}
//             onChange={handleChangeCountries}
//             data={countriesData}
//           />
//         </Box>
//       </Stack>
//     </>
//   );
// };

// const Content = ({
//   department,
//   countries,
//   handleChangeDepartment,
//   handleChangeCountries,
//   departmentsData,
//   countriesData,
// }) => {
//   return (
//     <>
//       <Stack
//         p={2}
//         direction="column"
//         alignItems="center"
//         justifyContent="space-evenly"
//         gap={{
//           xs: 0,
//           lg: 0,
//         }}
//       >
//         <Typography
//           sx={{
//             width: "100%",
//             fontFamily: "Work Sans",
//             fontSize: {
//               xs: "8px",
//               sm: "14px",
//               smm: "20px",
//               md: "32px",
//               lg: "37px",
//               xl: "50px",
//             },
//             fontWeight: 600,
//             letterSpacing: "0em",
//             textAlign: "center",
//             color: "#4DB267",
//             textTransform: "uppercase",
//           }}
//         >
//           Want to have an impact
//         </Typography>
//         <Typography
//           sx={{
//             width: "100%",
//             fontFamily: "Work Sans",
//             fontSize: {
//               xs: "8px",
//               sm: "14px",
//               smm: "20px",
//               md: "32px",
//               lg: "37px",
//               xl: "50px",
//             },
//             fontWeight: 600,
//             letterSpacing: "0em",
//             textAlign: "center",
//             color: "#052973",
//           }}
//         >
//           while having fun?
//         </Typography>
//         <Typography
//           sx={{
//             width: "100%",
//             fontFamily: "Work Sans",
//             fontSize: {
//               xs: "6px",
//               sm: "10px",
//               smm: "12px",
//               md: "14px",
//             },
//             fontWeight: 400,
//             letterSpacing: "0em",
//             textAlign: "center",
//           }}
//         >
//           Master in Business Administration, Civil Engineering, or Computer
//           Sciences.
//         </Typography>
//         <Stack
//           margin={"0 auto"}
//           display={{
//             xs: "none",
//             lg: "flex",
//           }}
//         >
//           <Box
//             display="flex"
//             gap={2}
//             sx={{
//               minWidth: {
//                 md: "400px",
//                 lg: "540px",
//               },
//               textAlign: "left",
//             }}
//           >
//             <FormSelect
//               id="department-select"
//               label="All Department"
//               value={department}
//               onChange={handleChangeDepartment}
//               data={departmentsData}
//             />
//             <FormSelect
//               id="countries-select"
//               label="All Countries"
//               value={countries}
//               onChange={handleChangeCountries}
//               data={countriesData}
//             />
//           </Box>
//         </Stack>
//       </Stack>
//     </>
//   );
// };

// const FormSelect = ({ id, label, value, onChange, data }) => {
//   return (
//     <FormControl sx={{ backgroundColor: "#F5F5F5" }} fullWidth>
//       <InputLabel id={`${id}-label`}>{label}</InputLabel>
//       <Select
//         labelId={`${id}-label`}
//         id={id}
//         value={value}
//         label={label}
//         onChange={onChange}
//       >
//         {data.map((item) => (
//           <MenuItem key={item.Id} value={item.Id}>
//             {item.Name}
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

// export default CareerBanner;

import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BannerImg from "./assets/Group 62842.png";
import axios from "axios";
import Image from "next/image";

const CareerBanner = ({ onDepartmentChange, handleACountryChange }) => {
  const [department, setDepartment] = useState("");
  const [countries, setCountries] = useState("");
  const [departmentsData, setDepartmentsData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://dev.saniiro.net/api/v1/career/departments-and-countries"
        );
        const data = response.data.Data;
        setDepartmentsData(data.AllDepartment);
        setCountriesData(data.Countries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChangeDepartment = (event) => {
    const selectedDepartmentName = event.target.value; // This is the ID now

    const filteredDepartment = departmentsData.filter(
      (el) => el.Name === selectedDepartmentName
    );

    setDepartment(selectedDepartmentName); // Set department state to ID
    onDepartmentChange(filteredDepartment[0].Id); // Pass the department ID to the parent component
  };

  const handleChangeCountries = (event) => {
    const selectedCountryName = event.target.value; // This is the name
    console.log(selectedCountryName);
    if (selectedCountryName !== "Select a country") {
      setCountries(selectedCountryName); // Set countries state to the name
      handleACountryChange(selectedCountryName); // Pass the country name to the parent component
    } else {
      setCountries(selectedCountryName); // Set countries state to the name
      handleACountryChange(""); // Pass the country name to the parent component
    }
  };

  return (
    <>
      <Stack position="relative" height="100%">
        <Stack width={"90vw"} height={"100vh"}>
          <Image
            fill
            objectFit="contain"
            sizes="100vw"
            sx={{
              width: "100%",
              maxWidth: "100%",
              height: "auto",
            }}
            alt="Banner Image"
            src={BannerImg}
          />
        </Stack>
        <Stack
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            width: {
              xs: "60%",
              sm: "60%",
              md: "60%",
              lg: "60%",
            },
            height: {
              xs: "70%",
            },
            textAlign: "center",
            backgroundColor: "white",
            justifyContent: "center",
          }}
        >
          <Content
            department={department}
            countries={countries}
            handleChangeDepartment={handleChangeDepartment}
            handleChangeCountries={handleChangeCountries}
            departmentsData={departmentsData}
            countriesData={countriesData}
          />
        </Stack>
      </Stack>

      <Stack
        display={{
          xs: "block",
          lg: "none",
        }}
        mt={5}
        width={"90%"}
        margin={"15px auto"}
      >
        <Typography
          sx={{
            width: "100%",
            fontFamily: "Work Sans",
            fontSize: {
              xs: "16px",
              smm: "20px",
              md: "32px",
              lg: "37px",
              xl: "50px",
              xxl: "60px",
            },
            fontWeight: 600,
            letterSpacing: "0em",
            textAlign: "center",
            color: "#052973",
          }}
        >
          Search Jobs
        </Typography>

        <Box
          display="flex"
          gap={2}
          sx={{
            minWidth: {
              md: "400px",
              lg: "540px",
            },
            textAlign: "left",
          }}
        >
          <FormSelect
            id="department-select"
            label="All Department"
            value={department}
            onChange={handleChangeDepartment}
            data={departmentsData}
          />
          <FormSelect
            id="countries-select"
            label="All Countries"
            value={countries}
            onChange={handleChangeCountries}
            data={countriesData}
          />
        </Box>
      </Stack>
    </>
  );
};

const Content = ({
  department,
  countries,
  handleChangeDepartment,
  handleChangeCountries,
  departmentsData,
  countriesData,
}) => {
  return (
    <>
      <Stack
        p={2}
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        gap={{
          xs: 0,
          lg: 0,
        }}
      >
        <Typography
          sx={{
            width: "100%",
            fontFamily: "Work Sans",
            fontSize: {
              xs: "8px",
              sm: "14px",
              smm: "20px",
              md: "32px",
              lg: "37px",
              xl: "50px",
            },
            fontWeight: 600,
            letterSpacing: "0em",
            textAlign: "center",
            color: "#4DB267",
            textTransform: "uppercase",
          }}
        >
          Want to have an impact
        </Typography>
        <Typography
          sx={{
            width: "100%",
            fontFamily: "Work Sans",
            fontSize: {
              xs: "8px",
              sm: "14px",
              smm: "20px",
              md: "32px",
              lg: "37px",
              xl: "50px",
            },
            fontWeight: 600,
            letterSpacing: "0em",
            textAlign: "center",
            color: "#052973",
          }}
        >
          while having fun?
        </Typography>
        <Typography
          sx={{
            width: "100%",
            fontFamily: "Work Sans",
            fontSize: {
              xs: "6px",
              sm: "10px",
              smm: "12px",
              md: "14px",
            },
            fontWeight: 400,
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          Master in Business Administration, Civil Engineering, or Computer
          Sciences.
        </Typography>
        <Stack
          margin={"0 auto"}
          display={{
            xs: "none",
            lg: "flex",
          }}
        >
          <Box
            display="flex"
            gap={2}
            sx={{
              minWidth: {
                md: "400px",
                lg: "540px",
              },
              textAlign: "left",
            }}
          >
            <FormSelect
              id="department-select"
              label="All Department"
              value={department}
              onChange={handleChangeDepartment}
              data={departmentsData} // Should contain objects with .Id and .Name
            />
            <FormSelect
              id="countries-select"
              label="All Countries"
              value={countries}
              onChange={handleChangeCountries}
              data={countriesData} // Should contain objects with .Id and .Name
            />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

const FormSelect = ({ id, label, value, onChange, data }) => {
  return (
    <FormControl sx={{ backgroundColor: "#F5F5F5" }} fullWidth>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        {data.map((item) => (
          <MenuItem key={item.Id} value={item.Name}>
            {/* Use item.Name here */}
            {item.Name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CareerBanner;
