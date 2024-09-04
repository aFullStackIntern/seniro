// import React, { useState } from "react";
// import { Stack, Typography, Collapse, IconButton, Button } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const ContactCustomFaq = ({ data }) => {
//   const [expanded, setExpanded] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const faqsPerPage = 10;

//   // Function to handle the expansion of an FAQ item
//   const handleExpand = (index) => {
//     setExpanded(expanded === index ? null : index);
//   };

//   // Calculate the index of the first and last FAQ on the current page
//   const indexOfLastFaq = currentPage * faqsPerPage;
//   const indexOfFirstFaq = indexOfLastFaq - faqsPerPage;
//   const currentFaqs = data.FrequentAskQuestions?.slice(
//     indexOfFirstFaq,
//     indexOfLastFaq
//   );

//   // Change page function
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Calculate page numbers
//   const pageNumbers = [];
//   for (
//     let i = 1;
//     i <= Math.ceil(data.FrequentAskQuestions?.length / faqsPerPage);
//     i++
//   ) {
//     pageNumbers.push(i);
//   }

//   return (
//     <Stack
//       sx={{
//         padding: {
//           xs: "5px 4% ",
//           md: " 10px 8%",
//           lg: " 20px 16%",
//         },
//         margin: {
//           xs: "7px",
//           sm: "15px",
//           lg: "0px",
//         },
//       }}
//     >
//       {currentFaqs?.map((row, index) => (
//         <Stack
//           key={index}
//           sx={{
//             borderRadius: "8px",
//             marginBottom: "16px",
//           }}
//           border={"1px solid #E8E8E8"}
//           p={"8px 16px"}
//           boxShadow={"1px 0px 3px 2px #E8E8E8"}
//         >
//           <Stack
//             direction="row"
//             justifyContent="space-between"
//             padding="11px 11px 11px 0"
//             onClick={() => handleExpand(index + indexOfFirstFaq)}
//             sx={{ cursor: "pointer" }}
//           >
//             <Stack>
//               <Typography
//                 fontSize={{ lg: "22px", md: "20px", sm: "16px", xs: "12px" }}
//                 fontWeight="bold"
//               >
//                 {row.Question}
//               </Typography>
//               {row.arrowIcon && (
//                 <Typography color="grey">{row.arrowIcon}</Typography>
//               )}
//             </Stack>
//             <IconButton>
//               <ExpandMoreIcon />
//             </IconButton>
//           </Stack>
//           <Collapse in={expanded === index + indexOfFirstFaq}>
//             <Stack>
//               <Typography
//                 dangerouslySetInnerHTML={{ __html: row.Description }}
//               />
//             </Stack>
//           </Collapse>
//         </Stack>
//       ))}
//       <Stack direction="row" spacing={2} justifyContent="center">
//         {pageNumbers.map((number) => (
//           <Button key={number} onClick={() => paginate(number)}>
//             {number}
//           </Button>
//         ))}
//       </Stack>
//     </Stack>
//   );
// };

// export default ContactCustomFaq;

import React, { useState } from "react";
import { Stack, Typography, Collapse, IconButton, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ContactCustomFaq = ({ data }) => {
  const [expanded, setExpanded] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const faqsPerPage = 10;

  // Function to handle the expansion of an FAQ item
  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  // Calculate the index of the first and last FAQ on the current page
  const indexOfLastFaq = currentPage * faqsPerPage;
  const indexOfFirstFaq = indexOfLastFaq - faqsPerPage;
  const currentFaqs = data.FrequentAskQuestions?.slice(
    indexOfFirstFaq,
    indexOfLastFaq
  );

  // Change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate page numbers
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(data.FrequentAskQuestions?.length / faqsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  // Render pagination numbers with ellipsis
  const renderPageNumbers = () => {
    const pageElements = [];
    const totalPages = pageNumbers.length;

    if (totalPages <= 5) {
      pageElements.push(...pageNumbers);
    } else {
      if (currentPage <= 3) {
        pageElements.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageElements.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageElements.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pageElements.map((number, index) => (
      <Button
        key={index}
        onClick={() => typeof number === "number" && paginate(number)}
        sx={{
          backgroundColor: number === currentPage ? "#1976d2" : "transparent",
          color: number === currentPage ? "#fff" : "#000",
          margin: "0 5px",
          "&:hover": {
            backgroundColor: "#1976d2",
            color: "white",
          },
        }}
      >
        {number}
      </Button>
    ));
  };

  return (
    <Stack
      sx={{
        padding: {
          xs: "5px 4% ",
          md: " 10px 8%",
          lg: " 20px 16%",
        },
        margin: {
          xs: "7px",
          sm: "15px",
          lg: "0px",
        },
      }}
    >
      {currentFaqs?.map((row, index) => (
        <Stack
          key={index}
          sx={{
            borderRadius: "8px",
            marginBottom: "16px",
          }}
          border={"1px solid #E8E8E8"}
          p={"8px 16px"}
          boxShadow={"1px 0px 3px 2px #E8E8E8"}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            padding="11px 11px 11px 0"
            onClick={() => handleExpand(index + indexOfFirstFaq)}
            sx={{ cursor: "pointer" }}
          >
            <Stack>
              <Typography
                fontSize={{ lg: "22px", md: "20px", sm: "16px", xs: "12px" }}
                fontWeight="bold"
              >
                {row.Question}
              </Typography>
              {row.arrowIcon && (
                <Typography color="grey">{row.arrowIcon}</Typography>
              )}
            </Stack>
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
          </Stack>
          <Collapse in={expanded === index + indexOfFirstFaq}>
            <Stack>
              <Typography
                dangerouslySetInnerHTML={{ __html: row.Description }}
              />
            </Stack>
          </Collapse>
        </Stack>
      ))}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <IconButton
          onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
          disabled={currentPage === 1}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        {renderPageNumbers()}
        <IconButton
          onClick={() =>
            paginate(
              currentPage < pageNumbers.length
                ? currentPage + 1
                : pageNumbers.length
            )
          }
          disabled={currentPage === pageNumbers.length}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ContactCustomFaq;
