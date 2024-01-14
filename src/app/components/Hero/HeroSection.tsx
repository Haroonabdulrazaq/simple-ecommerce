import React from "react";
import Image from "next/image";
import { Grid, Hidden } from "@mui/material";

const HeroSection = () => {
  return (
    <div>
      <Hidden mdUp>
        <Image
          src="/assets/Images/Hero-Image-1-mobile.svg"
          alt="Hero Image 1"
          width={263}
          height={859}
          layout="responsive"
        />
        <Image
          src="/assets/Images/Hero-Image-2-mobile.svg"
          alt="Hero Image 2"
          width={263}
          height={859}
          layout="responsive"
        />
        <Image
          src="/assets/Images/Hero-Image-3-mobile.svg"
          alt="Hero Image 3"
          width={263}
          height={859}
          layout="responsive"
        />
        <Image
          src="/assets/Images/Hero-Image-4-mobile.svg"
          alt="Hero Image 4"
          width={263}
          height={859}
          layout="responsive"
        />
      </Hidden>
      <Hidden mdDown>
        <Grid container spacing={1} style={{ marginTop: 50 }}>
          <Grid item xs={6}>
            <Image
              src="/assets/Images/Hero-Image-1-desktop.svg"
              alt="Furniture 1"
              width={452}
              height={616}
              layout="responsive"
              objectFit="fill"
            />
          </Grid>
          <Grid item xs={6} container spacing={2}>
            <Grid item xs={12}>
              <Image
                src="/assets/Images/Hero-Image-2-desktop.svg"
                alt="Furniture 2"
                width={362}
                height={296}
                layout="responsive"
                objectFit="fill"
              />
            </Grid>
            <Grid item xs={6}>
              <Image
                src="/assets/Images/Hero-Image-3-desktop.svg"
                alt="Furniture 3"
                width={181}
                height={196}
                layout="responsive"
                objectFit="fill"
              />
            </Grid>
            <Grid item xs={6}>
              <Image
                src="/assets/Images/Hero-Image-4-desktop.svg"
                alt="Furniture 4"
                width={181}
                height={196}
                layout="responsive"
                objectFit="fill"
              />
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

export default HeroSection;
