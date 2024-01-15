import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

const BottomFooter: React.FC = () => {
  const LinkGrid = styled(Grid)(() => ({
    height: "20vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    fontFamily: "Montserrat, san-serif",
    color: "#737373",
    paddingLeft: 20,
  }));

  const SocilaButton = styled(IconButton)(() => ({
    color: "#23A6F0",
  }));

  return (
    <Box>
      <Paper
        elevation={1}
        sx={{
          height: "10vh",
          fontWeight: 500,
          backgroundColor: "#FAFAFA",
          marginBottom: 5,
          paddingX: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" color="#252B42">
          Bandage
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", color: "primary.main" }}
        >
          <SocilaButton>
            <FacebookIcon />
          </SocilaButton>
          <SocilaButton>
            <InstagramIcon />
          </SocilaButton>
          <SocilaButton>
            <TwitterIcon />
          </SocilaButton>
        </Box>
      </Paper>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LinkGrid xs={12} md={2}>
          <Typography variant="h6" color="#252B42">
            Company Info
          </Typography>
          <Link href="#">About Us</Link>
          <Link href="#">Career</Link>
          <Link href="#">We are hiring</Link>
          <Link href="#">Blog</Link>
        </LinkGrid>
        <LinkGrid xs={12} md={2}>
          <Typography variant="h6" color="#252B42">
            Legal
          </Typography>
          <Link href="#">About Us</Link>
          <Link href="#">Career</Link>
          <Link href="#">We are hiring</Link>
          <Link href="#">Blog</Link>
        </LinkGrid>
        <LinkGrid xs={12} md={2}>
          <Typography variant="h6" color="#252B42">
            Features
          </Typography>
          <Link href="#">Business Marketing</Link>
          <Link href="#">Analytics</Link>
          <Link href="#">Live Chat</Link>
          <Link href="#">Unlimited Support</Link>
        </LinkGrid>
        <LinkGrid xs={12} md={2}>
          <Typography variant="h6" color="#252B42">
            Resources
          </Typography>
          <Link href="#">iOS & Android</Link>
          <Link href="#">Watch a Demo</Link>
          <Link href="#">Customers</Link>
          <Link href="#">API</Link>
        </LinkGrid>
        <LinkGrid
          xs={12}
          md={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            backgroundColor: "background.paper",
          }}
        >
          <Typography
            variant="h6"
            color="#252B42"
            sx={{ fontWeight: "bold", marginBottom: 1 }}
          >
            Get In Touch
          </Typography>
          <Box sx={{ position: "relative" }}>
            <TextField
              fullWidth
              id="email-input"
              label="Your Email"
              variant="outlined"
              sx={{
                marginBottom: 2,
                width: "25ch",
              }}
            />
            <Button
              variant="contained"
              sx={{
                marginBottom: 2,
                backgroundColor: "primary.main",
                color: "#FFF",
                padding: 2,
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              Subscribe
            </Button>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontStyle: "italic" }}
          >
            Lorem ipsum dolor sit amet
          </Typography>
        </LinkGrid>
      </Grid>
      <Paper
        elevation={0}
        sx={{
          height: "3vh",
          fontWeight: 500,
          backgroundColor: "#FAFAFA",
          padding: 5,
        }}
      >
        <Typography>Made with love By Finland All right reserved</Typography>
      </Paper>
    </Box>
  );
};

export default BottomFooter;
