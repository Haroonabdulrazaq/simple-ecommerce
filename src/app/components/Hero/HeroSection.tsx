import React from "react";
import Image from "next/image";
import { Box, Button, Grid, Hidden, Typography } from "@mui/material";
import { Directions } from "@mui/icons-material";

const HeroSection = () => {
  return (
    <div id="HeroSection">
      <Hidden mdUp>
        <Image
          src="/assets/Images/Hero-Image-1-mobile.webp"
          alt="Hero Image 1"
          width={263}
          height={859}
          layout="responsive"
        />
        <Image
          src="/assets/Images/Hero-Image-2-mobile.webp"
          alt="Hero Image 2"
          width={263}
          height={859}
          layout="responsive"
        />
        <Image
          src="/assets/Images/Hero-Image-3-mobile.webp"
          alt="Hero Image 3"
          width={263}
          height={859}
          layout="responsive"
        />
        <Image
          src="/assets/Images/Hero-Image-4-mobile.webp"
          alt="Hero Image 4"
          width={263}
          height={859}
          layout="responsive"
        />
      </Hidden>
      <Hidden mdDown>
        <Grid container spacing={1} style={{ marginTop: 50 }}>
          <Grid item xs={6} sx={{ position: "relative" }}>
            <Image
              src="/assets/Images/Hero-Image-1-desktop.webp"
              alt="Furniture 1"
              width={452}
              height={616}
              style={{
                width: "100%",
                height: "30",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                width: "20",
                height: "5vh",
                position: "absolute",
                top: 30,
                left: 30,
              }}
            >
              <Typography variant="subtitle1" color={"#2DC071"}>
                5 Items
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: "#252B42", fontWeight: "bold" }}
              >
                FURNITURE
              </Typography>
              <Typography sx={{ color: "#252B42" }}>Read More</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} container spacing={2}>
            <Grid item xs={12} sx={{ position: "relative" }}>
              <Image
                src="/assets/Images/Hero-Image-2-desktop.webp"
                alt="Furniture 2"
                width={362}
                height={296}
                style={{
                  width: "100%",
                  height: "30vh",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  width: "20",
                  height: "5vh",
                  position: "absolute",
                  top: 40,
                  left: 40,
                }}
              >
                <Typography variant="subtitle1" color={"#2DC071"}>
                  5 Items
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "#252B42", fontWeight: "bold" }}
                >
                  FURNITURE
                </Typography>
                <Typography sx={{ color: "#252B42" }}>Read More</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ position: "relative" }}>
              <Image
                src="/assets/Images/Hero-Image-3-desktop.webp"
                alt="Furniture 3"
                width={181}
                height={196}
                style={{
                  width: "100%",
                  height: "32.5vh",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  width: "20",
                  height: "5vh",
                  position: "absolute",
                  top: 30,
                  left: 30,
                }}
              >
                <Typography variant="subtitle1" color={"#2DC071"}>
                  5 Items
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#252B42", fontWeight: "bold" }}
                >
                  FURNITURE
                </Typography>
                <Typography sx={{ color: "#252B42" }}>Read More</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ position: "relative" }}>
              <Image
                src="/assets/Images/Hero-Image-4-desktop.webp"
                alt="Furniture 4"
                width={181}
                height={196}
                style={{
                  width: "100%",
                  height: "32.5vh",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  width: "20",
                  height: "5vh",
                  position: "absolute",
                  top: 30,
                  left: 30,
                }}
              >
                <Typography variant="subtitle1" color={"#2DC071"}>
                  5 Items
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#252B42", fontWeight: "bold" }}
                >
                  FURNITURE
                </Typography>
                <Typography sx={{ color: "#252B42" }}>Read More</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

export default HeroSection;
