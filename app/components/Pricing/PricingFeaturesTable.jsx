import React, { useState } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Stack,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const packages = [
  ["Sartiro Basic", "(*) up to 10,810.31 Rs / year."],
  ["Sartiro Lite", "(*) up to 108,103.13 Rs / year."],
  ["Sartiro Standard", "(*) up to 108,103.13 Rs / year."],
  ["Sartiro Professional", "(*) up to 108,103.13 Rs / year."],
  ["Sartiro Expert", "(*) up to 108,103.13 Rs / year."],
];

function Banner(props) {
  const features = props.features || [];
  const [openStates, setOpenStates] = useState(features.map(() => true));
  const [popoverState, setPopoverState] = useState({});

  const handleOpen = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  const isPopoverOpen = (linkId) => Boolean(popoverState[linkId]);

  const packageTotals = packages.map((_, packageIndex) => {
    let count = 0;
    let total = 0;
    features.forEach((feature) => {
      feature.items.forEach((item) => {
        total++;
        if (item.availability[packageIndex]) {
          count++;
        }
      });
    });
    return Math.floor((count / total) * 100);
  });

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
          <TableHead style={{ bgcolor: "#F7FCFF" }}>
            <TableRow>
              <TableCell style={{ padding: "10px" }}>Features</TableCell>
              {packages.map((pkg, i) => (
                <TableCell key={i} align="center">
                  {pkg[0]}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {features.map((feature, i) => (
              <React.Fragment key={i}>
                <TableRow
                  style={{ border: 0, cursor: "pointer" }}
                  onClick={() => handleOpen(i)}
                >
                  <TableCell
                    style={{ padding: "10px", fontWeight: "bold" }}
                    colSpan={packages.length + 1}
                  >
                    <Stack direction="row" alignItems="center">
                      <ArrowDropDownIcon
                        className="navlinkli-link-downarrow"
                        style={{
                          fontSize: 25,
                          transition: "all 0.3s ease-in",
                          color: isPopoverOpen(1) ? "#818181" : "#818181",
                          transform: isPopoverOpen(1)
                            ? "rotate(180deg)"
                            : "rotate(0)",
                        }}
                      />
                      <Typography>{feature.category}</Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
                {feature.items.map((item, j) => (
                  <TableRow
                    key={j}
                    style={{ display: openStates[i] ? "table-row" : "none" }}
                  >
                    <TableCell
                      style={{
                        paddingLeft: "50px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </TableCell>
                    {item.availability.map((available, k) => (
                      <TableCell key={k} align="center">
                        {available ? (
                          <Typography color={" #05d105"}>✓</Typography>
                        ) : (
                          <Typography color={" #ff0000"}>✘</Typography>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
          <TableFooter style={{ bgcolor: "#F7FCFF" }}>
            <TableRow>
              <TableCell style={{ padding: "10px", fontWeight: "bold" }}>
                Total
              </TableCell>
              {packageTotals.map((total, i) => (
                <TableCell key={i} align="center">
                  <Typography
                    style={{
                      padding: "5px",
                      fontFamily: "Work Sans",
                      fontSize: "17px",
                      fontWeight: "bold",
                      lineHeight: "19px",
                      textAlign: "center",
                    }}
                  >
                    {total} %
                    <Typography style={{ fontSize: "14px", paddingTop: "5px" }}>
                      {packages[i][0]}
                    </Typography>
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Work Sans",
                      fontSize: "9px",
                      fontWeight: "500",
                      lineHeight: "12px",
                      textAlign: "center",
                    }}
                  >
                    {packages[i][1]}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableFooter>
        </Table>
      </Stack>
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
                <TableRow
                  style={{ border: 0, cursor: "pointer" }}
                  onClick={() => handleOpen(i)}
                >
                  <TableCell
                    style={{ padding: "10px", fontWeight: "bold" }}
                    colSpan={packages.length + 1}
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
                        {feature.category}
                      </Typography>
                      <ArrowDropDownIcon
                        className="navlinkli-link-downarrow"
                        style={{
                          fontSize: 25,
                          transition: "all 0.3s ease-in",
                          color: isPopoverOpen(1) ? "#818181" : "#818181",
                          transform: isPopoverOpen(1)
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
                      {feature.items.map((item, j) => (
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
                              {item.name}
                            </Typography>
                          </td>

                          {item.availability.map((available, k) => (
                            <td key={k} align="center">
                              <Typography p={1.5}>
                                {available === true ? (
                                  <Typography color={" #05d105"}>✓</Typography>
                                ) : available === false ? (
                                  <Typography color={" #ff0000"}>✘</Typography>
                                ) : (
                                  available
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
          <div
            style={{
              overflowX: "auto",
              width: "90vw",
              margin: "0 auto",
            }}
          >
            <table>
              <tbody>
                <tr>
                  <td
                    style={{
                      position: "sticky",
                      left: 0,
                      backgroundColor: "#fff",
                      zIndex: 1,
                      padding: "25px",
                      fontWeight: "bold",
                    }}
                  >
                    <Typography p={2} fontWeight={"bold"}>
                      Total
                    </Typography>
                  </td>

                  {packageTotals.map((total, i) => (
                    <td key={i} align="center">
                      <Typography
                        p={1.5}
                        style={{
                          fontFamily: "Work Sans",
                          fontSize: "14px",
                          fontWeight: "bold",
                          lineHeight: "19px",
                          textAlign: "center",
                        }}
                      >
                        {total} %
                        <Typography
                          style={{ fontSize: "12px", paddingTop: "5px" }}
                        >
                          {packages[i][0]}
                        </Typography>
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Work Sans",
                          fontSize: "9px",
                          fontWeight: "500",
                          lineHeight: "12px",
                          textAlign: "center",
                        }}
                      >
                        {packages[i][1]}
                      </Typography>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Table>
      </Stack>
    </>
  );
}

export default Banner;
