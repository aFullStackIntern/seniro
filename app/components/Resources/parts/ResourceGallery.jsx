import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import becomeApartner from "../../assets/icons/becomeApartner.png";
import career from "../../assets/icons/jobs.png";
import blogPageSS from "../../assets/icons/blogs.png";
import caseStudy from "../../assets/icons/caseStudy.png";
import testimonials from "../../assets/icons/testimonials.png";
import videos from "../../assets/icons/videos.png";
import faq from "../../assets/icons/faq.png";
import Link from "next/link";

const ResourceGallery = () => {
  return (
    <>
      <Box
        zIndex={111}
        sx={{
          width: {
            xs: "95%",
            xl: "1230px",
          },
          margin: "20px auto",
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: "100%",
          }}
        >
          <Stack direction={"row"} gap={2} position={"relative"}>
            <Stack
              sx={{
                width: "calc((100% - 20px) * 12 / 12)",
              }}
            >
              <Link
                href="/Resources/BecomeAPartner"
                onClick={() => window.scroll(0, 0)}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${becomeApartner.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#222",

                    transition: "all 1s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#999",
                      backgroundPosition: "center",
                      boxShadow: "0 0 4px #fff",
                      cursor: "pointer",
                    },
                    width: "100%",
                    height: {
                      xs: "150px",
                      md: "230px",
                    },
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                  alt="become a partner page"
                >
                  <Typography
                    position={"absolute"}
                    left={0}
                    right={0}
                    ml={"auto"}
                    mr={"auto"}
                    color={"red"}
                    width={"fit-content"}
                  ></Typography>
                </Box>
              </Link>
            </Stack>
            <Stack
              sx={{
                width: "calc((100% - 20px) * 9 / 12)",
              }}
            >
              <Link
                href="/Resources/Career"
                onClick={() => window.scroll(0, 0)}
              >
                <Box
                  border={"1px solid white"}
                  alt="become a partner page"
                  sx={{
                    backgroundImage: `url(${career.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#222",

                    transition: "all 1s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#999",
                      backgroundPosition: "center",
                      boxShadow: "0 0 4px #fff",
                      cursor: "pointer",
                    },
                    width: "100%", // span 9 out of 12
                    height: {
                      xs: "150px",
                      md: "230px",
                    },
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                ></Box>
              </Link>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <Stack
              sx={{
                width: "calc((100%) * 10/ 10)",
              }}
            >
              <Link href="/Resources/Blog" onClick={() => window.scroll(0, 0)}>
                <Box
                  border={"1px solid white"}
                  alt="become a partner page"
                  sx={{
                    backgroundImage: `url(${blogPageSS.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#222",

                    transition: "all 1s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#999",
                      backgroundPosition: "center",
                      boxShadow: "0 0 4px #fff",
                    },
                    width: "100%", // span 9 out of 12
                    height: {
                      xs: "150px",
                      md: "230px",
                    },
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                ></Box>
              </Link>
            </Stack>
          </Stack>

          <Stack direction={"row"} gap={2}>
            <Stack
              sx={{
                width: "calc((100% - 20px) * 4 / 10)",
              }}
            >
              <Link
                href="/Resources/CaseStudy"
                onClick={() => window.scroll(0, 0)}
              >
                <Stack
                  border={"1px solid white"}
                  alt="become a partner page"
                  sx={{
                    backgroundImage: `url(${caseStudy.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#222",

                    transition: "all 1s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#999",
                      backgroundPosition: "center",
                      boxShadow: "0 0 4px #fff",
                      cursor: "pointer",
                    },
                    width: "100%", // span 4 out of 12
                    height: {
                      xs: "150px",
                      md: "230px",
                    },

                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                ></Stack>
              </Link>
            </Stack>
            <Stack
              sx={{
                width: "calc((100% - 20px) * 6 / 10)",
              }}
            >
              <Link
                href="/Resources/Testimonials"
                onClick={() => window.scroll(0, 0)}
              >
                <Box
                  border={"1px solid white"}
                  alt="become a partner page"
                  sx={{
                    backgroundImage: `url(${testimonials.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#222",

                    transition: "all 1s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#999",
                      backgroundPosition: "center",
                      boxShadow: "0 0 4px #fff",
                    },
                    width: "100%", // span 4 out of 12
                    height: {
                      xs: "150px",
                      md: "230px",
                    },
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                ></Box>
              </Link>
            </Stack>
          </Stack>

          <Stack direction={"row"} gap={2}>
            <Stack
              sx={{
                width: "calc((100% - 20px) * 10 / 10)",
              }}
            >
              <Link
                href="/Resources/Videos"
                onClick={() => window.scroll(0, 0)}
              >
                <Box
                  border={"1px solid white"}
                  alt="become a partner page"
                  sx={{
                    backgroundImage: `url(${videos.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#222",
                    transition: "all 1s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#999",
                      backgroundPosition: "center",
                      boxShadow: "0 0 4px #fff",
                    },
                    width: "100%",
                    height: {
                      xs: "150px",
                      md: "230px",
                    },
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                ></Box>
              </Link>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <Stack
              sx={{
                width: "calc((100% - 20px) * 6 / 10)",
              }}
            >
              <Link href="/Resources/FaQ" onClick={() => window.scroll(0, 0)}>
                <Box
                  border={"1px solid white"}
                  alt="become a partner page"
                  sx={{
                    backgroundImage: `url(${faq.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#222",

                    transition: "all 1s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#999",
                      backgroundPosition: "center",
                      boxShadow: "0 0 4px #fff",
                    },
                    width: "100%",
                    height: {
                      xs: "150px",
                      md: "230px",
                    },
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                ></Box>
              </Link>
            </Stack>
            <Stack
              sx={{
                width: "calc((100% - 20px) * 4 / 10)",
              }}
            >
              <Link href="/Resources/FaQ" onClick={() => window.scroll(0, 0)}>
                <Box
                  border={"1px solid white"}
                  alt="become a partner page"
                  sx={{
                    backgroundImage: `url(${faq.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#222",

                    transition: "all 1s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#999",
                      backgroundPosition: "center",
                      boxShadow: "0 0 4px #fff",
                    },
                    width: "100%",
                    height: {
                      xs: "150px",
                      md: "230px",
                    },
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                ></Box>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default ResourceGallery;
