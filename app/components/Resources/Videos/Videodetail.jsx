import React, { useState, useEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import Footer from "../../utils/Footer";
import Nav from "../../Navbar/Nav";
import { useParams, useRouter } from "next/navigation";

const VideoDetails = () => {
  const params = useParams();
  const Slug = params.slug;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetch(`http://dev.saniiro.net/api/v1/videos/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setVideo(data.Data);
      })
      .catch((error) => console.error("Error fetching video details:", error));
  }, [slug]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <Stack alignItems={"center"} p={10}>
        <Typography variant="h3" fontWeight={"bold"} gutterBottom>
          {video.Title}
        </Typography>
        <Box
          dangerouslySetInnerHTML={{ __html: video.Description }}
          mb={4}
          px={3}
        />
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${new URL(
            video.VideoLink
          ).searchParams.get("v")}`}
          title={video.Title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Stack>
      <Footer />
    </>
  );
};

export default VideoDetails;
