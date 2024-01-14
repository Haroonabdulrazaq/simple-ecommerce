"use client";
import { Container, Typography } from "@mui/material";
import HeroSection from "./components/Hero/HeroSection";
import Featured from "./components/Featured/Index";
const Home = () => {
  return (
    <Container>
      <HeroSection />
      <Featured />
    </Container>
  );
};

export default Home;
