import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import flesImg from "../../assets/files.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DescriptionIcon from "@mui/icons-material/Description";
import Link from "next/link";

import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
const fetchFAQs = async () => {
  try {
    const response = await axios.get("http://dev.saniiro.net/api/v1/faq");
    const faqs = response.data.Data.FrequentAskQuestions;
    const popularPosts = response.data.Data.PopularFaqs;
    const RecentFaqs = response.data.Data.RecentFaqs;
    return { faqs, popularPosts, RecentFaqs };
  } catch (error) {
    console.error("Failed to fetch FAQs:", error);
    return { faqs: [], popularPosts: [], RecentFaqs: [] };
  }
};

const categorizeFAQs = (faqs) => {
  const categories = {};
  faqs.forEach((faq) => {
    const category = faq.Category;
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(faq);
  });
  return categories;
};

const ActivityManagement = () => {
  const router = useRouter();
  const [faqsByCategory, setFaqsByCategory] = useState({});
  const [activities, setActivities] = useState([]);
  const [Popularposts, setPopularposts] = useState([]);
  const [Recenttags, setRecenttags] = useState([]);
  useEffect(() => {
    fetchFAQs().then(({ faqs, popularPosts, RecentFaqs }) => {
      const categorizedFAQs = categorizeFAQs(faqs);
      setFaqsByCategory(categorizedFAQs);
      setActivities(
        Object.keys(categorizedFAQs).map((category, index) => ({
          category,
          active: false,
          rotated: false,
        }))
      );
      setPopularposts(popularPosts);
      setRecenttags(RecentFaqs);
    });
  }, []);
  const handleClick = (index) => {
    const updatedActivities = [...activities];
    updatedActivities[index].active = !updatedActivities[index].active;
    updatedActivities[index].rotated = !updatedActivities[index].rotated;
    setActivities(updatedActivities);
  };
  const handleExploreMoreClick = (slug) => {
    router.push(`/Resources/faq/${slug}`);
    window.scrollTo(0, 0);
  };

  const handleRecentClick = (slug) => {
    router.push(`/Resources/faq/Recent/${slug}`);
    window.scroll(0, 0);
  };

  return (
    <Stack
      width={{ xs: "95%", xl: "1240px" }}
      gap={4}
      margin={"50px auto"}
      direction={{ xs: "column", lg: "row" }}
    >
      <Stack width={{ xs: "95%", lg: "60%" }} margin={"0 auto"}>
        {activities.map((activity, index) => (
          <Stack
            key={index}
            onClick={() => handleClick(index)}
            borderBottom={"1px solid gray"}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              gap={2}
              padding={"10px 0px"}
            >
              <Stack direction={"row"} alignItems={"center"} gap={2}>
                <Image
                  src={flesImg}
                  alt="Files image"
                  width={67}
                  height={67}
                  // width={{ xs: "50px", lg: "67px" }}
                  // height={{ xs: "50px", lg: "67px" }}
                />
                <Typography variant="h6">{activity.category}</Typography>
              </Stack>
              <ArrowBackIosIcon
                sx={{
                  transform: activity.rotated
                    ? "rotate(90deg)"
                    : "rotate(270deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Stack>
            {activity.active &&
              faqsByCategory[activity.category].map((faq, subIndex) => (
                <Stack
                  key={subIndex}
                  onClick={(e) => e.stopPropagation()}
                  padding={"10px 20px"}
                >
                  <Typography variant="subtitle1">Q. {faq.Question}</Typography>
                  <Typography
                    variant="body2"
                    dangerouslySetInnerHTML={{ __html: faq.Brief }}
                  />
                </Stack>
              ))}
          </Stack>
        ))}
      </Stack>
      <Stack
        width={{
          xs: "95%",
          lg: "40%",
        }}
        margin={"0 auto"}
        paddingLeft={{
          xs: "0",
          lg: "80px",
        }}
        borderLeft={{
          xs: "none",
          lg: "1px solid gray",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "25px",
            fontWeight: 700,
            lineHeight: "37px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Popular Posts
        </Typography>
        <Stack>
          {Popularposts.map((post, index) => (
            <Stack
              key={index}
              gap={1}
              marginTop="27px"
              onClick={() => handleExploreMoreClick(post.Slug)}
            >
              <Stack direction="row" gap={1}>
                <DescriptionIcon />
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  {post.Question.length > 50
                    ? `${post.Question.substring(0, 50)}...`
                    : post.Question}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Typography
          sx={{
            marginTop: "40px",
            fontFamily: "Work Sans",
            fontSize: "25px",
            fontWeight: 700,
            lineHeight: "37px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Recent Articles
        </Typography>
        <Stack>
          {Recenttags.map((post, index) => (
            <Stack
              key={index}
              gap={1}
              marginTop="27px"
              onClick={() => handleRecentClick(post.Slug)}
            >
              <Stack direction="row" gap={1}>
                <DescriptionIcon />
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  {post.Question.length > 50
                    ? `${post.Question.substring(0, 50)}...`
                    : post.Question}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ActivityManagement;
