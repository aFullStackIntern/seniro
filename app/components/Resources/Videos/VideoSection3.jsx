// import { Stack, Typography } from "@mui/material";
// import React from "react";
// import VideoThumbnail from "../../assets/videoThumbnail.png";
// import Button from "../../utils/Button";
// import EastIcon from "@mui/icons-material/East";
// import Link from 'next/link';

// const VideoSection3 = () => {
//   const handleClick = () => {
//     window.scrollTo({ top: 0 });
//   };
//   const lists = [
//     {
//       id: "1",
//       src: VideoThumbnail,
//       qty: "5 Videos",
//       title: "Automation",
//       time: "30 Mins",
//     },
//     {
//       id: "2",
//       src: VideoThumbnail,
//       qty: "5 Videos",
//       title: "Automation",
//       time: "30 Mins",
//     },
//     {
//       id: "3",
//       src: VideoThumbnail,
//       qty: "5 Videos",
//       title: "Automation",
//       time: "30 Mins",
//     },
//     {
//       id: "4",
//       src: VideoThumbnail,
//       qty: "5 Videos",
//       title: "Automation",
//       time: "30 Mins",
//     },
//     {
//       id: "5",
//       src: VideoThumbnail,
//       qty: "5 Videos",
//       title: "Automation",
//       time: "30 Mins",
//     },
//     {
//       id: "6",
//       src: VideoThumbnail,
//       qty: "5 Videos",
//       title: "Automation",
//       time: "30 Mins",
//     },
//     {
//       id: "7",
//       src: VideoThumbnail,
//       qty: "5 Videos",
//       title: "Automation",
//       time: "30 Mins",
//     },
//     {
//       id: "8",
//       src: VideoThumbnail,
//       qty: "5 Videos",
//       title: "Automation",
//       time: "30 Mins",
//     },
//     {
//       id: "9",
//       src: VideoThumbnail,
//       qty: "5 Videos",
//       title: "Automation",
//       time: "30 Mins",
//     },
//   ];
//   return (
//     <Stack alignItems={"Center"} pt={10}>
//       <Stack
//         width={{
//           lg: "88%",
//           md: "80%",
//           sm: "90%",
//           xs: "95%",
//         }}
//         gap={{
//           lg: 4,
//           md: 3,
//           sm: 2,
//           xs: 1,
//         }}
//       >
//         <Stack alignItems={"center"} gap={1}>
//           <Typography
//             fontSize={{
//               lg: "35px",
//               md: "30px",
//               sm: "25px",
//               xs: "20px",
//             }}
//             fontWeight={"bold"}
//           >
//             How to videos
//           </Typography>
//           <Typography
//             width={{
//               lg: "60%",
//               md: "80%",
//               sm: "90%",
//               xs: "95%",
//             }}
//             textAlign={"Center"}
//             fontSize={{
//               lg: "20px",
//               md: "18px",
//               sm: "16px",
//               xs: "14px",
//             }}
//           >
//             Watch these videos to learn the significance of different features
//             and how to configure them.
//           </Typography>
//         </Stack>
//         <Stack
//           sx={{
//             content: "''",
//             height: "1px",
//             width: "100%",
//             bgcolor: "lightgrey",
//           }}
//         ></Stack>
//         <Stack
//           direction={"row"}
//           gap={{
//             lg: 4,
//             md: 3,
//             xs: 2,
//           }}
//           flexWrap={"wrap"}
//           justifyContent={"center"}
//         >
//           {lists.map((d) => (
//             <Stack
//               width={{
//                 lg: "30%",
//                 md: "45%",
//                 sm: "95%",
//                 xs: "95%",
//               }}
//               gap={2}
//             >
//               <Stack position={"relative"}>
//                 <img src={d.src} alt="" />
//                 <Button
//                   sx={{
//                     position: "absolute",
//                     top: 10,
//                     left: 10,
//                     borderRadius: 1,
//                     border: "1px solid white",
//                     bgcolor: "black",
//                     color: "white",
//                     fontSize: {
//                       lg: "14px",
//                       md: "12px",
//                       sm: "10px",
//                       xs: "8px",
//                     },
//                     fontWeight: "bold",
//                     p: "3px 10px",
//                     "&:hover": {
//                       backgroundColor: "black",
//                       color: "white",
//                       textDecoration: "underline",
//                     },
//                   }}
//                 >
//                   {d.qty}
//                 </Button>
//                 <Button
//                   sx={{
//                     position: "absolute",
//                     bottom: 10,
//                     right: 10,
//                     borderRadius: 1,
//                     border: "1px solid white",
//                     bgcolor: "black",
//                     color: "white",
//                     fontSize: {
//                       lg: "14px",
//                       md: "12px",
//                       sm: "10px",
//                       xs: "8px",
//                     },
//                     fontWeight: "bold",
//                     p: "3px 10px",
//                     "&:hover": {
//                       backgroundColor: "black",
//                       color: "white",
//                       textDecoration: "underline",
//                     },
//                   }}
//                 >
//                   {d.time}
//                 </Button>
//               </Stack>
//               <Stack
//                 direction={"row"}
//                 alignItems={"center"}
//                 justifyContent={"space-between"}
//               >
//                 <Typography
//                   fontSize={{
//                     lg: "20px",
//                     md: "18px",
//                     sm: "16px",
//                     xs: "14px",
//                   }}
//                   fontWeight={"bold"}
//                   pl={1}
//                 >
//                   {d.title}
//                 </Typography>
//                 <Button
//                   endIcon={<EastIcon />}
//                   sx={{
//                     border: "1px solid #F15B25",
//                     bgcolor: "transparent",
//                     color: "#F15B25",
//                     fontSize: {
//                       lg: "16px",
//                       md: "14px",
//                       sm: "12px",
//                       xs: "10px",
//                     },
//                     fontWeight: "bold",
//                     p: {
//                       lg: "3px 10px",
//                       md: "3px 10px",
//                       sm: "3px 10px",
//                       xs: "3px 10px",
//                     },
//                     "&:hover": {
//                       backgroundColor: "transparent",
//                       color: "#F15B25",
//                       textDecoration: "underline",
//                     },
//                   }}
//                 >
//                   Explore More
//                 </Button>
//               </Stack>
//             </Stack>
//           ))}
//         </Stack>
//         <Stack alignItems={"Center"} p={10}>
//           <Link  href
// ={"/Resources/Videos/WatchMoreVideos"}>
//             {" "}
//             <Button
//               onClick={handleClick}
//               endIcon={<EastIcon />}
//               sx={{
//                 width: {
//                   lg: "270px",
//                   md: "250px",
//                   sm: "230px",
//                   xs: "200px",
//                 },
//                 border: "1px solid #F15B25",
//                 bgcolor: "transparent",
//                 color: "#F15B25",
//                 fontSize: {
//                   lg: "18px",
//                   md: "16px",
//                   sm: "14px",
//                   xs: "12px",
//                 },
//                 fontWeight: "bold",
//                 p: {
//                   lg: "15px 25px",
//                   md: "12px 22px",
//                   sm: "10px 20px",
//                   xs: "8px 18px",
//                 },
//                 "&:hover": {
//                   backgroundColor: "transparent",
//                   color: "#F15B25",
//                   textDecoration: "underline",
//                 },
//               }}
//             >
//               Watch All videos
//             </Button>
//           </Link>
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };

// export default VideoSection3;

"use client";

import React, { useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import VideoThumbnail from "../../assets/videoThumbnail.png";
import Button from "../../utils/Button";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useData } from "../../context/Authcontext";

const VideoSection3 = () => {
  // const [videos, setVideos] = useState([]);
  const { videos } = useData();
  const router = useRouter();

  // useEffect(() => {
  //   fetch("http://dev.saniiro.net/api/v1/videos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setVideos(data.Data.VideoResources);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  const handleExploreMoreClick = (slug) => {
    router.push(`/Resources/videos/${slug}`);
  };

  return (
    <Stack alignItems={"Center"} pt={10}>
      <Stack
        width={{
          lg: "88%",
          md: "80%",
          sm: "90%",
          xs: "95%",
        }}
        gap={{
          lg: 4,
          md: 3,
          sm: 2,
          xs: 1,
        }}
      >
        <Stack alignItems={"center"} gap={1}>
          <Typography
            fontSize={{
              lg: "35px",
              md: "30px",
              sm: "25px",
              xs: "20px",
            }}
            fontWeight={"bold"}
          >
            How to videos
          </Typography>
          <Typography
            width={{
              lg: "60%",
              md: "80%",
              sm: "90%",
              xs: "95%",
            }}
            textAlign={"Center"}
            fontSize={{
              lg: "20px",
              md: "18px",
              sm: "16px",
              xs: "14px",
            }}
          >
            Watch these videos to learn the significance of different features
            and how to configure them.
          </Typography>
        </Stack>
        <Stack
          sx={{
            content: "''",
            height: "1px",
            width: "100%",
            bgcolor: "lightgrey",
          }}
        ></Stack>
        <Stack
          pb={"75px"}
          direction={"row"}
          gap={{
            lg: "81px",
            md: 3,
            xs: 2,
          }}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {videos.map((video) => (
            <Stack
              boxShadow={"1px 2px 6px 4px lightgray"}
              key={video.Id}
              width={{
                lg: "43%",
                md: "100%",
                sm: "95%",
                xs: "95%",
              }}
              padding={"10px"}
            >
              {/* <Stack position={"relative"}>
                <img src={VideoThumbnail} alt="" />
                <Button
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    borderRadius: 1,
                    border: "1px solid white",
                    bgcolor: "black",
                    color: "white",
                    fontSize: {
                      lg: "14px",
                      md: "12px",
                      sm: "10px",
                      xs: "8px",
                    },
                    fontWeight: "bold",
                    p: "3px 10px",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {video.VideoCount} Videos
                </Button>
                <Button
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    borderRadius: 1,
                    border: "1px solid white",
                    bgcolor: "black",
                    color: "white",
                    fontSize: {
                      lg: "14px",
                      md: "12px",
                      sm: "10px",
                      xs: "8px",
                    },
                    fontWeight: "bold",
                    p: "3px 10px",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                      textDecoration: "underline",
                    },
                  }}
                >
                  30 Mins
                </Button>
              </Stack> */}
              <iframe
                width={{ lg: "500", md: "300" }}
                height="315"
                src={`https://www.youtube.com/embed/${new URL(
                  video.VideoLink
                ).searchParams.get("v")}`}
                title={video.Title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <Stack
                padding={"13px"}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography
                  width={"65%"}
                  fontSize={{
                    lg: "20px",
                    md: "18px",
                    sm: "16px",
                    xs: "14px",
                  }}
                  fontWeight={"bold"}
                  pl={1}
                >
                  {video.Title}
                </Typography>
                <Button
                  endIcon={<EastIcon />}
                  onClick={() => handleExploreMoreClick(video.Slug)}
                  sx={{
                    border: "1px solid #F15B25",
                    bgcolor: "transparent",
                    color: "#F15B25",
                    fontSize: {
                      lg: "16px",
                      md: "14px",
                      sm: "12px",
                      xs: "10px",
                    },
                    fontWeight: "bold",
                    p: {
                      lg: "3px 10px",
                      md: "3px 10px",
                      sm: "3px 10px",
                      xs: "3px 10px",
                    },
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#F15B25",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Explore More
                </Button>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack alignItems={"Center"} p={10}>
          <Link href="/Resources/Videos/WatchMoreVideos">
            <Button
              // onClick={handleClick}
              endIcon={<EastIcon />}
              sx={{
                width: {
                  lg: "270px",
                  md: "250px",
                  sm: "230px",
                  xs: "200px",
                },
                border: "1px solid #F15B25",
                bgcolor: "transparent",
                color: "#F15B25",
                fontSize: {
                  lg: "18px",
                  md: "16px",
                  sm: "14px",
                  xs: "12px",
                },
                fontWeight: "bold",
                p: {
                  lg: "15px 25px",
                  md: "12px 22px",
                  sm: "10px 20px",
                  xs: "8px 18px",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#F15B25",
                  textDecoration: "underline",
                },
              }}
            >
              Watch All videos
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VideoSection3;
