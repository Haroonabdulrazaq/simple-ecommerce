"use client";
import { Box, Grid, Hidden, IconButton, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    secondary: {
      main: "#23856D",
    },
  },
  typography: {
    fontFamily: "Montserrat,  san-serif",
  },
});

const StyledTopHeader = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const SocialIconBox = styled(Box)(({ theme }) => ({
  "& svg": {
    marginLeft: theme.spacing(2),
  },
}));

const ContentBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Montserrat",
}));

const ActionButton = styled(IconButton)(() => ({
  color: "#FFFFFF",
}));

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <StyledTopHeader
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <ContentBox>
          <CallIcon /> (222) 555-0118
          <ContentBox style={{ margin: 20 }}>
            {" "}
            <EmailOutlinedIcon />
            michelle.rivera@example.com
          </ContentBox>
        </ContentBox>
        <Hidden mdDown>
          <Typography>Follow us and get a chance to win 80% off</Typography>
        </Hidden>
        <SocialIconBox>
          <ContentBox>
            Follow Us :{" "}
            <ActionButton>
              <InstagramIcon />
            </ActionButton>
            <ActionButton>
              <YouTubeIcon />
            </ActionButton>
            <ActionButton>
              <FacebookIcon />
            </ActionButton>
            <ActionButton>
              <TwitterIcon />
            </ActionButton>
          </ContentBox>
        </SocialIconBox>
      </StyledTopHeader>
    </ThemeProvider>
  );
}
