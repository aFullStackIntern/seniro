// import React from "react";
// import Nav from "../Navbar/Nav";
// import FaqBanner from "./parts/FaqBanner";
// import FeqBodyTop from "./parts/FeqBodytop";
// import FeqBodyContent from "./parts/FaqBodyContent";
// import Footer from "../utils/Footer";
// import { Stack } from "@mui/material";
// import { useParams } from "react-router-dom";
// const FaqActivities = () => {
//    const { ID } = useParams();
//   return (
//     <>
//       <Stack maxWidth={"1536px"} margin={"0 auto"}>
//         <Nav />
//         <FaqBanner />
//         <FeqBodyTop />
//         <FeqBodyContent />
//       </Stack>
//       <Footer />
//     </>
//   );
// };

// export default FaqActivities;

import React, { useEffect, useState } from "react";
import Nav from "../Navbar/Nav";
import FaqBanner from "./parts/FaqBanner";
import FeqBodyTop from "./parts/FeqBodytop";
import FeqBodyContent from "./parts/FaqBodyContent";
import Footer from "../utils/Footer";
import { Stack } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

const FaqActivities = () => {
  const params = useParams();
  const  slug  = params.slug; // Retrieve the slug from the URL
  const [faqData, setFaqData] = useState(null);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await axios.get(
          `http://dev.saniiro.net/api/v1/faq/${slug}`
        );
        setFaqData(response.data.Data);
      } catch (error) {
        console.error("Failed to fetch FAQ data:", error);
      }
    };

    fetchFaqData();
  }, [slug]);

  return (
    <>
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Nav />
        <FaqBanner />
        <FeqBodyTop />
        <FeqBodyContent faqData={faqData} />{" "}
        {/* Pass faqData to the content component */}
      </Stack>
      <Footer />
    </>
  );
};

export default FaqActivities;
