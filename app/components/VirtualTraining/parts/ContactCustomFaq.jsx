import React, { useState } from "react";
import { Stack, Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ContactCustomFaq = ({ data }) => {
  const [expanded, setExpanded] = useState(0);

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Stack
      sx={{
        padding: {
          xs: "5px 4% ",
          md: " 10px 8%",
          lg: " 88px 16%",
        },
        margin: {
          xs: "7px",
          sm: "40px 10px",
          lg: "0px",
        },
      }}
    >
      {data.rows.map((row, index) => (
        <Stack
          key={index}
          sx={{
            borderRadius: "8px",
            marginBottom: "16px",
          }}
          border={"1px solid #E8E8E8"}
          p={"8px 16px"}
          boxShadow={"1px 0px 3px 2px #E8E8E8"}
          bgcolor={"white"}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            padding="11px 11px 11px 0"
            onClick={() => handleExpand(index)}
            sx={{ cursor: "pointer" }}
          >
            <Stack>
              <Typography
                fontSize={{ lg: "22px", md: "20px", sm: "16px", xs: "12px" }}
                fontWeight="bold"
              >
                {row.title}
              </Typography>
              {row.arrowIcon && (
                <Typography color="white">{row.arrowIcon}</Typography>
              )}
            </Stack>
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
          </Stack>
          <Collapse in={expanded === index}>
            <Stack>
              {typeof row.content === "string" ? (
                <Typography>{row.content}</Typography>
              ) : (
                <div>{row.content}</div>
              )}
            </Stack>
          </Collapse>
        </Stack>
      ))}
    </Stack>
  );
};

export default ContactCustomFaq;
