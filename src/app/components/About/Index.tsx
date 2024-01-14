import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Image from "next/image";

const galleryImages = [
  "about-us-image-1",
  "about-us-image-2",
  "about-us-image-3",
  "about-us-image-4",
  "about-us-image-5",
  "about-us-image-6",
  "about-us-image-7",
  "about-us-image-8",
  "about-us-image-9",
];

const Index = () => {
  return (
    <>
      <Grid
        container
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          marginY: 10,
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: "100%",
            minHeight: "50vh",
            padding: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 20,
              lineHeight: 1.7,
              color: "#252B42",
            }}
          >
            What they say about us
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Stack
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Avatar
                src="/assets/Images/circle-image.svg"
                alt="Profile"
                sx={{ width: 100, height: 100 }}
              />
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  {[...Array(4)].map((_, i) => (
                    <StarRateIcon
                      key={i}
                      sx={{ cursor: "pointer", color: "gold" }}
                    />
                  ))}
                  <StarBorderIcon sx={{ color: "gold" }} />
                </Stack>
                <Stack>
                  <Typography variant="body2">
                    Iate helps you see how many more days you need to work to
                    reach your financial goal.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="primary.main"
                    sx={{ marginTop: 5 }}
                  >
                    Regina Miles
                  </Typography>
                  <Typography variant="caption">Designer</Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid container spacing={2} xs={12} md={6}>
          {galleryImages.map((image: string) => (
            <Grid
              key={image}
              item
              xs={6}
              md={4}
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              <Image
                src={`/assets/Images/${image}.svg`}
                width={5}
                height={5}
                alt={`Grid-${image}`}
                layout="responsive"
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
