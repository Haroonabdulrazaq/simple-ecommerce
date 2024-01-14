import React from "react";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Box, Grid, Paper, Typography } from "@mui/material";

const FeaturedProducts = () => {
  return (
    <Box
      sx={{
        backgropundColor: "#F0F0F0",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingY: 10,
      }}
    >
      <Box sx={{ paddingY: 5 }}>
        <Typography variant="overline" display="block" gutterBottom>
          Featured Products
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#252B42" }}
          gutterBottom
        >
          THE BEST SERVICES
        </Typography>
        <Typography variant="caption" gutterBottom>
          Problems trying to resolve the conflict between
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid xs={12} md={4}>
          <Paper elevation={0} style={{ padding: 16, textAlign: "center" }}>
            <MenuBookIcon sx={{ fontSize: 52, color: "primary.main" }} />
            <Typography variant="h6" component="h3" style={{ marginTop: 8 }}>
              Easy Wins
            </Typography>
            <Typography variant="body1">
              Get your best looking smile now!
            </Typography>
          </Paper>
        </Grid>
        <Grid xs={12} md={4}>
          <Paper elevation={0} style={{ padding: 16, textAlign: "center" }}>
            <LocalLibraryIcon sx={{ fontSize: 52, color: "primary.main" }} />
            <Typography variant="h6" component="h3" style={{ marginTop: 8 }}>
              Concrete
            </Typography>
            <Typography variant="body1">
              Defalcate is most focused in helping you discover your most
              beautiful smile.
            </Typography>
          </Paper>
        </Grid>
        <Grid xs={12} md={4}>
          <Paper elevation={0} style={{ padding: 16, textAlign: "center" }}>
            <ShowChartIcon sx={{ fontSize: 52, color: "primary.main" }} />
            <Typography variant="h6" component="h3" style={{ marginTop: 8 }}>
              Hack Growth
            </Typography>
            <Typography variant="body1">
              Overcome any hurdle or any other problem.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default FeaturedProducts;
