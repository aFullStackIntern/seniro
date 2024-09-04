// import React, { useState } from "react";
// import {
//   Typography,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   TableFooter,
//   Stack,
// } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const packages = [
//   ["Sartiro Basic", "(*) up to 10,810.31 Rs / year."],
//   ["Sartiro Lite", "(*) up to 108,103.13 Rs / year."],
//   ["Sartiro Standard", "(*) up to 108,103.13 Rs / year."],
//   ["Sartiro Professional", "(*) up to 108,103.13 Rs / year."],
//   ["Sartiro Expert", "(*) up to 108,103.13 Rs / year."],
// ];

// function FeatureTable(props) {
//   const features = props.features || [];
//   const [openStates, setOpenStates] = useState(features.map(() => true));
//   const [popoverState, setPopoverState] = useState({});

//   const handleOpen = (index) => {
//     const newOpenStates = [...openStates];
//     newOpenStates[index] = !newOpenStates[index];
//     setOpenStates(newOpenStates);
//   };

//   const isPopoverOpen = (linkId) => Boolean(popoverState[linkId]);

//   const packageTotals = packages.map((_, packageIndex) => {
//     let count = 0;
//     let total = 0;
//     features.forEach((feature) => {
//       feature.items.forEach((item) => {
//         total++;
//         if (item.availability[packageIndex]) {
//           count++;
//         }
//       });
//     });
//     return Math.floor((count / total) * 100);
//   });

//   return (
//     <>
//       <Stack
//         display={{
//           xs: "none",
//           lg: "block",
//         }}
//         style={{
//           width: "100%",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           margin: "10px 0",
//         }}
//       >
//         <Table
//           style={{ width: "90%", margin: "0 auto", borderCollapse: "collapse" }}
//         >
//           <TableHead style={{ bgcolor: "#F7FCFF" }}>
//             <TableRow>
//               <TableCell style={{ padding: "10px" }}>Features</TableCell>
//               {packages.map((pkg, i) => (
//                 <TableCell key={i} align="center">
//                   {pkg[0]}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {features.map((feature, i) => (
//               <React.Fragment key={i}>
//                 <TableRow
//                   style={{ border: 0, cursor: "pointer" }}
//                   onClick={() => handleOpen(i)}
//                 >
//                   <TableCell
//                     style={{ padding: "10px", fontWeight: "bold" }}
//                     colSpan={packages.length + 1}
//                   >
//                     <Stack direction="row" alignItems="center">
//                       <ArrowDropDownIcon
//                         className="navlinkli-link-downarrow"
//                         style={{
//                           fontSize: 25,
//                           transition: "all 0.3s ease-in",
//                           color: isPopoverOpen(1) ? "#818181" : "#818181",
//                           transform: isPopoverOpen(1)
//                             ? "rotate(180deg)"
//                             : "rotate(0)",
//                         }}
//                       />
//                       <Typography>{feature.category}</Typography>
//                     </Stack>
//                   </TableCell>
//                 </TableRow>
//                 {feature.items.map((item, j) => (
//                   <TableRow
//                     key={j}
//                     style={{ display: openStates[i] ? "table-row" : "none" }}
//                   >
//                     <TableCell
//                       style={{
//                         paddingLeft: "50px",
//                         paddingTop: "5px",
//                         paddingBottom: "5px",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       {item.name}
//                     </TableCell>
//                     {item.availability.map((available, k) => (
//                       <TableCell key={k} align="center">
//                         {available ? (
//                           <Typography color={" #05d105"}>✓</Typography>
//                         ) : (
//                           <Typography color={" #ff0000"}>✘</Typography>
//                         )}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))}
//               </React.Fragment>
//             ))}
//           </TableBody>
//           <TableFooter style={{ bgcolor: "#F7FCFF" }}>
//             <TableRow>
//               <TableCell style={{ padding: "10px", fontWeight: "bold" }}>
//                 Total
//               </TableCell>
//               {packageTotals.map((total, i) => (
//                 <TableCell key={i} align="center">
//                   <Typography
//                     style={{
//                       padding: "5px",
//                       fontFamily: "Work Sans",
//                       fontSize: "17px",
//                       fontWeight: "bold",
//                       lineHeight: "19px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {total} %
//                     <Typography style={{ fontSize: "14px", paddingTop: "5px" }}>
//                       {packages[i][0]}
//                     </Typography>
//                   </Typography>
//                   <Typography
//                     style={{
//                       fontFamily: "Work Sans",
//                       fontSize: "9px",
//                       fontWeight: "500",
//                       lineHeight: "12px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {packages[i][1]}
//                   </Typography>
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableFooter>
//         </Table>
//       </Stack>
//       <Stack
//         display={{
//           xs: "flex",
//           lg: "none",
//         }}
//         style={{
//           width: "100%",

//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           margin: "10px 0",
//         }}
//       >
//         <Table
//           style={{
//             width: "90%",
//             margin: "0 auto",
//             borderCollapse: "collapse",
//           }}
//         >
//           <TableBody>
//             {features.map((feature, i) => (
//               <React.Fragment key={i}>
//                 <TableRow
//                   style={{ border: 0, cursor: "pointer" }}
//                   onClick={() => handleOpen(i)}
//                 >
//                   <TableCell
//                     style={{ padding: "10px", fontWeight: "bold" }}
//                     colSpan={packages.length + 1}
//                   >
//                     <Stack
//                       direction="row"
//                       alignItems="center"
//                       width={"90vw"}
//                       justifyContent={"space-between"}
//                       border={"1px solid lightgray"}
//                       p={" 8px 5px"}
//                     >
//                       <Typography fontWeight={"bold"}>
//                         {feature.category}
//                       </Typography>
//                       <ArrowDropDownIcon
//                         className="navlinkli-link-downarrow"
//                         style={{
//                           fontSize: 25,
//                           transition: "all 0.3s ease-in",
//                           color: isPopoverOpen(1) ? "#818181" : "#818181",
//                           transform: isPopoverOpen(1)
//                             ? "rotate(180deg)"
//                             : "rotate(0)",
//                         }}
//                       />
//                     </Stack>
//                   </TableCell>
//                 </TableRow>
//                 <div
//                   style={{
//                     overflowX: "auto",
//                     width: "90vw",
//                     margin: "0 auto",
//                   }}
//                 >
//                   <table>
//                     <tbody>
//                       {feature.items.map((item, j) => (
//                         <tr
//                           key={j}
//                           style={{
//                             display: openStates[i] ? "table-row" : "none",
//                           }}
//                         >
//                           <td
//                             style={{
//                               position: "sticky",
//                               left: 0,
//                               backgroundColor: "#fff",
//                               zIndex: 1,
//                               paddingLeft: "20px",
//                               paddingTop: "5px",
//                               paddingBottom: "5px",
//                               fontWeight: "bold",
//                             }}
//                           >
//                             <Typography p={2} fontWeight={"bold"}>
//                               {item.name}
//                             </Typography>
//                           </td>

//                           {item.availability.map((available, k) => (
//                             <td key={k} align="center">
//                               <Typography p={1.5}>
//                                 {available === true ? (
//                                   <Typography color={" #05d105"}>✓</Typography>
//                                 ) : available === false ? (
//                                   <Typography color={" #ff0000"}>✘</Typography>
//                                 ) : (
//                                   available
//                                 )}
//                               </Typography>
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </React.Fragment>
//             ))}
//           </TableBody>
//           <div
//             style={{
//               overflowX: "auto",
//               width: "90vw",
//               margin: "0 auto",
//             }}
//           >
//             <table>
//               <tbody>
//                 <tr>
//                   <td
//                     style={{
//                       position: "sticky",
//                       left: 0,
//                       backgroundColor: "#fff",
//                       zIndex: 1,
//                       padding: "25px",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     <Typography p={2} fontWeight={"bold"}>
//                       Total
//                     </Typography>
//                   </td>

//                   {packageTotals.map((total, i) => (
//                     <td key={i} align="center">
//                       <Typography
//                         p={1.5}
//                         style={{
//                           fontFamily: "Work Sans",
//                           fontSize: "14px",
//                           fontWeight: "bold",
//                           lineHeight: "19px",
//                           textAlign: "center",
//                         }}
//                       >
//                         {total} %
//                         <Typography
//                           style={{ fontSize: "12px", paddingTop: "5px" }}
//                         >
//                           {packages[i][0]}
//                         </Typography>
//                       </Typography>
//                       <Typography
//                         style={{
//                           fontFamily: "Work Sans",
//                           fontSize: "9px",
//                           fontWeight: "500",
//                           lineHeight: "12px",
//                           textAlign: "center",
//                         }}
//                       >
//                         {packages[i][1]}
//                       </Typography>
//                     </td>
//                   ))}
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </Table>
//       </Stack>
//     </>
//   );
// }

// export default FeatureTable;





// import React, { useState } from "react";
// import {
//   Typography,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Stack,
// } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// function FeatureTable(props) {
//   const features = props.features || [];
//   const [openStates, setOpenStates] = useState(features.map(() => true));

//   const handleOpen = (index) => {
//     const newOpenStates = [...openStates];
//     newOpenStates[index] = !newOpenStates[index];
//     setOpenStates(newOpenStates);
//   };
//   const renderQtyRateTable = (values) => {
//     return (
//       <table style={{ borderCollapse: "collapse", width: "100%", border:"1px solid #CCCCCC" }}>
//         <thead>
//           <tr style={{ backgroundColor: "#b8ffb8" }}>
//             <th style={{ padding: "5px", textAlign: "center" }}>Qty</th>
//             <th style={{ padding: "5px", textAlign: "center" }}>Rate</th>
//           </tr>
//         </thead>
//         <tbody>
//           {values.map((val, index) => (
//             <tr key={index}>
//               <td style={{ padding: "5px", textAlign: "center" }}>{val.Qty}</td>
//               <td style={{ padding: "5px", textAlign: "center" }}>
//                 ₹{val.Rate}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <>
//       <Stack
//         display={{
//           xs: "none",
//           lg: "block",
//         }}
//         style={{
//           width: "100%",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           margin: "10px 0",
//         }}
//       >
//         <Table
//           style={{ width: "90%", margin: "0 auto", borderCollapse: "collapse" }}
//         >
//           <TableHead style={{ bgcolor: "#F7FCFF" }}>
//             <TableRow>
//               <TableCell style={{ padding: "10px" }}>Features</TableCell>
//               {features[0]?.Data[0]?.CompareCheckbox.map((pkg, i) => (
//                 <TableCell key={i} align="center">
//                   {pkg.Name.trim()}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {features.map((feature, i) => (
//               <React.Fragment key={i}>
//                 <TableRow
//                   style={{ border: 0, cursor: "pointer" }}
//                   onClick={() => handleOpen(i)}
//                 >
//                   <TableCell
//                     style={{ padding: "10px", fontWeight: "bold" }}
//                     colSpan={features[0]?.Data[0]?.CompareCheckbox.length + 1}
//                   >
//                     <Stack direction="row" alignItems="center">
//                       <ArrowDropDownIcon
//                         className="navlinkli-link-downarrow"
//                         style={{
//                           fontSize: 25,
//                           transition: "all 0.3s ease-in",
//                           color: openStates[i] ? "#818181" : "#818181",
//                           transform: openStates[i]
//                             ? "rotate(180deg)"
//                             : "rotate(0)",
//                         }}
//                       />
//                       <Typography>{feature.heading}</Typography>
//                     </Stack>
//                   </TableCell>
//                 </TableRow>
//                 {feature.Data.map((item, j) => (
//                   <TableRow
//                     key={j}
//                     style={{ display: openStates[i] ? "table-row" : "none" }}
//                   >
//                     <TableCell
//                       style={{
//                         paddingLeft: "50px",
//                         paddingTop: "5px",
//                         paddingBottom: "5px",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       {item.field1}
//                     </TableCell>
//                     {item.CompareCheckbox.map((available, k) => (
//                       <TableCell key={k} align="center">
//                         {available.Value === "true" ? (
//                           <Typography color={" #05d105"}>✓</Typography>
//                         ) : available.Value === "false" ? (
//                           <Typography color={" #ff0000"}>✘</Typography>
//                         ) : Array.isArray(available.Value) ? (
//                           renderQtyRateTable(available.Value)
//                         ) : (
//                           available.Value
//                         )}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))}
//               </React.Fragment>
//             ))}
//           </TableBody>
//         </Table>
//       </Stack>
//       <Stack
//         display={{
//           xs: "flex",
//           lg: "none",
//         }}
//         style={{
//           width: "100%",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           margin: "10px 0",
//         }}
//       >
//         <Table
//           style={{
//             width: "90%",
//             margin: "0 auto",
//             borderCollapse: "collapse",
//           }}
//         >
//           <TableBody>
//             {features.map((feature, i) => (
//               <React.Fragment key={i}>
//                 <TableRow
//                   style={{ border: 0, cursor: "pointer" }}
//                   onClick={() => handleOpen(i)}
//                 >
//                   <TableCell
//                     style={{ padding: "10px", fontWeight: "bold" }}
//                     colSpan={features[0]?.Data[0]?.CompareCheckbox.length + 1}
//                   >
//                     <Stack
//                       direction="row"
//                       alignItems="center"
//                       width={"90vw"}
//                       justifyContent={"space-between"}
//                       border={"1px solid lightgray"}
//                       p={" 8px 5px"}
//                     >
//                       <Typography fontWeight={"bold"}>
//                         {feature.heading}
//                       </Typography>
//                       <ArrowDropDownIcon
//                         className="navlinkli-link-downarrow"
//                         style={{
//                           fontSize: 25,
//                           transition: "all 0.3s ease-in",
//                           color: openStates[i] ? "#818181" : "#818181",
//                           transform: openStates[i]
//                             ? "rotate(180deg)"
//                             : "rotate(0)",
//                         }}
//                       />
//                     </Stack>
//                   </TableCell>
//                 </TableRow>
//                 <div
//                   style={{
//                     overflowX: "auto",
//                     width: "90vw",
//                     margin: "0 auto",
//                   }}
//                 >
//                   <table>
//                     <tbody>
//                       {feature.Data.map((item, j) => (
//                         <tr
//                           key={j}
//                           style={{
//                             display: openStates[i] ? "table-row" : "none",
//                           }}
//                         >
//                           <td
//                             style={{
//                               position: "sticky",
//                               left: 0,
//                               backgroundColor: "#fff",
//                               zIndex: 1,
//                               paddingLeft: "20px",
//                               paddingTop: "5px",
//                               paddingBottom: "5px",
//                               fontWeight: "bold",
//                             }}
//                           >
//                             <Typography p={2} fontWeight={"bold"}>
//                               {item.field1}
//                             </Typography>
//                           </td>
//                           {item.CompareCheckbox.map((available, k) => (
//                             <td key={k} align="center">
//                               <Typography p={1.5}>
//                                 {available.Value === "true" ? (
//                                   <Typography color={" #05d105"}>✓</Typography>
//                                 ) : available.Value === "false" ? (
//                                   <Typography color={" #ff0000"}>✘</Typography>
//                                 ) : Array.isArray(available.Value) ? (
//                                   available.Value.map((val, index) => (
//                                     <div key={index}>
//                                       Qty: {val.Qty}, Rate: {val.Rate}
//                                     </div>
//                                   ))
//                                 ) : (
//                                   available.Value
//                                 )}
//                               </Typography>
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </React.Fragment>
//             ))}
//           </TableBody>
//         </Table>
//       </Stack>
//     </>
//   );
// }

// export default FeatureTable;




import React, { useState } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Stack,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const renderQtyRateTable = (values) => (
  <table
    style={{
      width: "100%",
      border: "1px solid #e0e0e0",
      borderRadius: "5px",
      overflow: "hidden",
    }}
  >
    <thead>
      <tr style={{ backgroundColor: "#DFFFD6" }}>
        <th>Qty</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody>
      {values.map((value, index) => (
        <tr key={index}>
          <td>{value.Qty}</td>
          <td>₹{value.Rate}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const FeatureTable = (props) => {
  const features = props.features || [];
  const [openStates, setOpenStates] = useState(features.map(() => false));

  const handleOpen = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <>
      <Stack
        display={{
          xs: "none",
          lg: "block",
        }}
        style={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        <Table
          style={{ width: "90%", margin: "0 auto", borderCollapse: "collapse" }}
        >
          <TableHead style={{ backgroundColor: "#F7FCFF" }}>
            <TableRow>
              <TableCell style={{ padding: "10px" }}>Features</TableCell>
              <TableCell align="center">Saniiro Basic</TableCell>
              <TableCell align="center">Saniiro Lite</TableCell>
              <TableCell align="center">Saniiro Standard</TableCell>
              <TableCell align="center">Saniiro Professional</TableCell>
              <TableCell align="center">Saniiro Expert</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {features.map((feature, i) => (
              <React.Fragment key={i}>
                {feature.Data[0].field1 ? (
                  <>
                    <TableRow
                      style={{ border: 0, cursor: "pointer" }}
                      onClick={() => handleOpen(i)}
                    >
                      <TableCell
                        style={{ padding: "10px", fontWeight: "bold" }}
                        colSpan={6}
                      >
                        <Stack direction="row" alignItems="center">
                          <ArrowDropDownIcon
                            className="navlinkli-link-downarrow"
                            style={{
                              fontSize: 25,
                              transition: "all 0.3s ease-in",
                              color: "#818181",
                              transform: openStates[i]
                                ? "rotate(180deg)"
                                : "rotate(0)",
                            }}
                          />
                          <Typography fontSize={"0.875rem"} fontWeight={"bold"}>
                            {feature.heading}
                          </Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>
                    {feature.Data.map((item, j) => (
                      <TableRow
                        key={j}
                        style={{
                          display: openStates[i] ? "table-row" : "none",
                        }}
                      >
                        <TableCell
                          style={{
                            paddingLeft: "50px",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            fontWeight: "bold",
                          }}
                        >
                          {item.field1}
                        </TableCell>
                        {item.CompareCheckbox.map((available, k) => (
                          <TableCell key={k} align="center">
                            {available.Value === "true" ? (
                              <Typography color={"#05d105"}>✓</Typography>
                            ) : available.Value === "false" ? (
                              <Typography color={"#ff0000"}>✘</Typography>
                            ) : Array.isArray(available.Value) ? (
                              renderQtyRateTable(available.Value)
                            ) : (
                              available.Value
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </>
                ) : (
                  <TableRow key={i}>
                    <TableCell
                      style={{
                        padding: "10px 10px 10px 38px",
                        fontWeight: "bold",
                        backgroundColor: "#E3F2FD",
                      }}
                    >
                      {feature.heading}
                    </TableCell>
                    {feature.Data[0].CompareCheckbox.map((available, k) => (
                      <TableCell key={k} align="center">
                        {available.Value === "true" ? (
                          <Typography color={"#05d105"}>✓</Typography>
                        ) : available.Value === "false" ? (
                          <Typography color={"#ff0000"}>✘</Typography>
                        ) : Array.isArray(available.Value) ? (
                          renderQtyRateTable(available.Value)
                        ) : (
                          available.Value
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Stack>
      {/* <Stack
        display={{
          xs: "flex",
          lg: "none",
        }}
        style={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        <Table
          style={{
            width: "90%",
            margin: "0 auto",
            borderCollapse: "collapse",
          }}
        >
          <TableBody>
            {features.map((feature, i) => (
              <React.Fragment key={i}>
                <TableRow
                  style={{ border: 0, cursor: "pointer" }}
                  onClick={() => handleOpen(i)}
                >
                  <TableCell
                    style={{ padding: "10px", fontWeight: "bold" }}
                    colSpan={features[0]?.Data[0]?.CompareCheckbox.length + 1}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      width={"90vw"}
                      justifyContent={"space-between"}
                      border={"1px solid lightgray"}
                      p={" 8px 5px"}
                    >
                      <Typography fontWeight={"bold"}>
                        {feature.heading}
                      </Typography>
                      <ArrowDropDownIcon
                        className="navlinkli-link-downarrow"
                        style={{
                          fontSize: 25,
                          transition: "all 0.3s ease-in",
                          color: openStates[i] ? "#818181" : "#818181",
                          transform: openStates[i]
                            ? "rotate(180deg)"
                            : "rotate(0)",
                        }}
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
                <div
                  style={{
                    overflowX: "auto",
                    width: "90vw",
                    margin: "0 auto",
                  }}
                >
                  <table>
                    <tbody>
                      {feature.Data.map((item, j) => (
                        <tr
                          key={j}
                          style={{
                            display: openStates[i] ? "table-row" : "none",
                          }}
                        >
                          <td
                            style={{
                              position: "sticky",
                              left: 0,
                              backgroundColor: "#fff",
                              zIndex: 1,
                              paddingLeft: "20px",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              fontWeight: "bold",
                            }}
                          >
                            <Typography p={2} fontWeight={"bold"}>
                              {item.field1}
                            </Typography>
                          </td>
                          {item.CompareCheckbox.map((available, k) => (
                            <td key={k} align="center">
                              <Typography p={1.5}>
                                {available.Value === "true" ? (
                                  <Typography color={" #05d105"}>✓</Typography>
                                ) : available.Value === "false" ? (
                                  <Typography color={" #ff0000"}>✘</Typography>
                                ) : Array.isArray(available.Value) ? (
                                  available.Value.map((val, index) => (
                                    <div key={index}>
                                      Qty: {val.Qty}, Rate: {val.Rate}
                                    </div>
                                  ))
                                ) : (
                                  available.Value
                                )}
                              </Typography>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Stack> */}
      <Stack
        display={{
          xs: "flex",
          lg: "none",
        }}
        style={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        <Table
          style={{
            width: "90%",
            margin: "0 auto",
            borderCollapse: "collapse",
          }}
        >
          <TableBody>
            {features.map((feature, i) => (
              <React.Fragment key={i}>
                {feature.Data.length > 1 ? (
                  <>
                    <TableRow
                      style={{ border: 0, cursor: "pointer" }}
                      onClick={() => handleOpen(i)}
                    >
                      <TableCell
                        style={{ padding: "10px", fontWeight: "bold" }}
                        colSpan={feature.Data[0].CompareCheckbox.length + 1}
                      >
                        <Stack
                          direction="row"
                          alignItems="center"
                          width={"90vw"}
                          justifyContent={"space-between"}
                          border={"1px solid lightgray"}
                          p={"8px 5px"}
                        >
                          <Typography fontWeight={"bold"}>
                            {feature.heading}
                          </Typography>
                          <ArrowDropDownIcon
                            className="navlinkli-link-downarrow"
                            style={{
                              fontSize: 25,
                              transition: "all 0.3s ease-in",
                              color: openStates[i] ? "#818181" : "#818181",
                              transform: openStates[i]
                                ? "rotate(180deg)"
                                : "rotate(0)",
                            }}
                          />
                        </Stack>
                      </TableCell>
                    </TableRow>
                    {feature.Data.map((item, j) => (
                      <TableRow
                        key={j}
                        style={{
                          display: openStates[i] ? "table-row" : "none",
                        }}
                      >
                        <TableCell
                          style={{
                            paddingLeft: "20px",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            fontWeight: "bold",
                            position: "sticky",
                            left: 0,
                            backgroundColor: "#fff",
                            zIndex: 1,
                          }}
                        >
                          <Typography p={2} fontWeight={"bold"}>
                            {item.field1}
                          </Typography>
                        </TableCell>
                        <div
                          style={{
                            overflowX: "auto",
                            width: "90vw",
                            margin: "0 auto",
                          }}
                        >
                          {item.CompareCheckbox.map((available, k) => (
                            <TableCell key={k} align="center">
                              <Typography p={1.5}>
                                {available.Value === "true" ? (
                                  <Typography color={"#05d105"}>✓</Typography>
                                ) : available.Value === "false" ? (
                                  <Typography color={"#ff0000"}>✘</Typography>
                                ) : Array.isArray(available.Value) ? (
                                  renderQtyRateTable(available.Value)
                                ) : (
                                  available.Value
                                )}
                              </Typography>
                            </TableCell>
                          ))}
                        </div>
                      </TableRow>
                    ))}
                  </>
                ) : (
                  <TableRow key={i}>
                    <TableCell
                      style={{
                        padding: "10px",
                        fontWeight: "bold",
                        backgroundColor: "#E3F2FD",
                      }}
                    >
                      {feature.heading}
                    </TableCell>
                    {feature.Data[0].CompareCheckbox.map((available, k) => (
                      <TableCell key={k} align="center">
                        {available.Value === "true" ? (
                          <Typography color={"#05d105"}>✓</Typography>
                        ) : available.Value === "false" ? (
                          <Typography color={"#ff0000"}>✘</Typography>
                        ) : Array.isArray(available.Value) ? (
                          renderQtyRateTable(available.Value)
                        ) : (
                          available.Value
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Stack>
    </>
  );
};

export default FeatureTable;
