import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Nav from "../../Navbar/Nav";
import VideoCard1 from "./parts/VideoCard1";
import videoImg from "../../assets/Rectangle 4301.png";
import Footer from "../../utils/Footer";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const PlayVideo = () => {
  const params = useParams();
  const { slug } = params;
  console.log(params);
  console.log(slug);
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

  console.log("video", video);

  return (
    <>
      <Nav />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Stack width={"100%"} margin={"20px auto 50px"}>
          <Stack
            width={"90%"}
            margin={"30px auto"}
            direction={"column"}
            gap={4}
          >
            <Stack
              direction={{
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
              gap={2}
            >
              <Stack
                width={{
                  xs: "100%",
                  lg: "60%",
                  xl: "60%",
                }}
                gap={{
                  md: "30px",
                }}
                height={"100%"}
              >
                <iframe
                  border={"1px solid gray"}
                  width={{ lg: "500", md: "300" }}
                  height="400"
                  src={`https://www.youtube.com/embed/${new URL(
                    video.VideoResource.VideoLink
                  ).searchParams.get("v")}`}
                  title={video.Title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <Stack width={"100%"} gap={1}>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "28px",
                      fontWeight: 600,
                      lineHeight: "30px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    {video.VideoResource.Title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "27px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: video.VideoResource.ShortDescription,
                    }}
                  />
                </Stack>
              </Stack>
              <Stack
                justifyContent={"flex-start"}
                width={{
                  xs: "100%",
                  lg: "40%",
                  xl: "40%",
                }}
                height={{
                  xs: "100%",
                  lg: "400px",
                  xl: "400px",
                }}
                gap={3}
                sx={{ overflowY: "auto" }}
              >
                {video.RelatedVideoResource.map((relatedVideo) => (
                  <Link
                    key={relatedVideo.Id}
                    href={`/Resources/Videos/WatchMoreVideos/PlayVideo/${relatedVideo.Slug}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <VideoCard1
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      img={relatedVideo.Thumbnail}
                      title={relatedVideo.Title}
                      discription={relatedVideo.Description}
                    />
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Stack
              display={{
                xs: "none",
                lg: "flex",
              }}
              width={"60%"}
              gap={1}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "28px",
                  fontWeight: 600,
                  lineHeight: "30px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                {video.Title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "27px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
                dangerouslySetInnerHTML={{
                  __html: video.Description,
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default PlayVideo;
