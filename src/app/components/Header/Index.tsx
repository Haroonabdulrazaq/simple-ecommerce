"use client";
import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import { Grid, Hidden } from "@mui/material";
import MobileHeader from "./MobileHeader";

const Index = () => {
  return (
    <Grid>
      <Hidden smDown>
        <TopHeader />
        <BottomHeader />
      </Hidden>
      <Hidden mdUp>
        <MobileHeader />
      </Hidden>
    </Grid>
  );
};

export default Index;
