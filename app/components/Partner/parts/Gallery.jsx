import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import img1 from "./assets/image 156.png";
import img2 from "./assets/image 161.png";
import img3 from "./assets/image 162.png";
import Image from "next/image";

const Gallery = () => {
  return (
    <Box
      sx={{
        width: "90%", // Adjusted width for responsiveness
        margin: "20px auto",
      }}
    >
      <Grid container spacing={2} height={"100vh"}>
        <Grid item xs={12} sm={9} position={"relative"}>
          <Image
            src={img1}
            alt="img1"
            fill
            objectFit={"cover"}
            sizes={"100vw"}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={3} position={"relative"}>
          <Image
            src={img2}
            alt="img2"
            fill
            objectFit={"cover"}
            sizes={"100vw"}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={3} position={"relative"}>
          <Image
            src={img2}
            alt="img2"
            fill
            objectFit={"cover"}
            sizes={"100vw"}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={3} position={"relative"}>
          <Image
            src={img3}
            alt="img3"
            fill
            objectFit={"cover"}
            sizes={"100vw"}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={3} position={"relative"}>
          <Image
            src={img3}
            alt="img3"
            fill
            objectFit={"cover"}
            sizes={"100vw"}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={3} position={"relative"}>
          <Image
            src={img2}
            alt="img2"
            fill
            objectFit={"cover"}
            sizes={"100vw"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} position={"relative"}>
          <Image
            src={img2}
            alt="img2"
            fill
            objectFit={"cover"}
            sizes={"100vw"}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={3} position={"relative"}>
          <Image
            src={img3}
            alt="img3"
            fill
            objectFit={"cover"}
            sizes={"100vw"}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={3} position={"relative"}>
          <Image
            src={img2}
            alt="img2"
            fill
            objectFit={"cover"}
            sizes={"100vw"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Gallery;
