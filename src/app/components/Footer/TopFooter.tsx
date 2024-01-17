import { Box, Button, Typography } from "@mui/material";
import React from "react";

const TopFooter: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60vh",
        backgroundImage: 'url("/assets/Images/cta-image.webp")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
        marginTop: 10,
      }}
    >
      <Box
        sx={{
          width: "inherit",
          height: "inherit",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "30vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" color="primary.main">
            Design Better Experience
          </Typography>
          <Typography
            variant="h4"
            sx={{
              paddingX: 10,
              textAlign: "center",
              fontWeight: "bold",
              color: "#252B42",
            }}
          >
            Problem trying to resolve the conflict between
          </Typography>
          <Typography
            variant="caption"
            sx={{ textAlign: "center", color: "#737373" }}
          >
            Problem trying to resolve the conflict between
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "secondary.main",
            }}
          >
            $16.48
          </Typography>
          <Button
            sx={{
              width: 200,
              backgroundColor: "primary.main",
              color: "white",
              border: "none",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            ORDER NOW
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TopFooter;
