import Nav from "../Navbar/Nav";
import FaqBanner from "./parts/FaqBanner";
import FeqBodyTop from "./parts/FeqBodytop";
import FeqBodyContent from "./parts/FaqBodyContent";
import Footer from "../utils/Footer";
import { Stack } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

const FaqActivitiesC = () => {
  const params = useParams();
  const slug = params.slug;
  const [csData, setcsData] = useState(null);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await axios.get(
          `http://dev.saniiro.net/api/v1/case-study/${slug}`
        );
        setcsData(response.data.Data);
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
        <FeqBodyContent csData={csData} />
      </Stack>
      <Footer />
    </>
  );
};

export default FaqActivitiesC;
