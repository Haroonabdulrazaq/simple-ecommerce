"use client";
import { Container, Typography } from "@mui/material";
import HeroSection from "./components/Hero/HeroSection";
import Featured from "./components/Featured/Index";
import About from "./components/About/Index";
import Footer from "./components/Footer/Index";
import { CallToAction } from "@mui/icons-material";

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <Featured />
      <About />
      <Footer />
    </Container>
  );
};

export default Home;
