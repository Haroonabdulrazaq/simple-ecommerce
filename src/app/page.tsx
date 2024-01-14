"use client";
import { Container, Typography } from "@mui/material";
import HeroSection from "./components/Hero/HeroSection";
import Featured from "./components/Featured/Index";
import About from "./components/About/Index";

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <Featured />
      <About />
    </Container>
  );
};

export default Home;
