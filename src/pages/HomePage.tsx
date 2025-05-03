import React from 'react';
import { HeroParallax } from '../components/ui/hero-parallax';
import { RainbowButton } from '../components/ui/rainbow-button';
import { PortfolioCarousel } from '../components/ui/portfolio-carousel';

const products = [
  {
    title: "Project 1",
    link: "https://example.com/project1",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Project 2",
    link: "https://example.com/project2",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Project 3",
    link: "https://example.com/project3",
    thumbnail: "https://images.unsplash.com/photo-1552308995-2baac1ad5490?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Project 4",
    link: "https://example.com/project4",
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Project 5",
    link: "https://example.com/project5",
    thumbnail: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1920&q=80"
  }
];

const portfolioProjects = [
  {
    title: "Portfolio Project 1",
    description: "A beautiful web application showcasing modern design principles",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
    link: "https://example.com/portfolio1"
  },
  {
    title: "Portfolio Project 2",
    description: "An innovative platform built with cutting-edge technology",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
    link: "https://example.com/portfolio2"
  },
  {
    title: "Portfolio Project 3",
    description: "A responsive and user-friendly mobile application",
    image: "https://images.unsplash.com/photo-1555066932-d69dac093642?auto=format&fit=crop&w=1920&q=80",
    link: "https://example.com/portfolio3"
  }
];

function HomePage() {
  return (
    <main className="relative z-10">
      <HeroParallax products={products} />
      <section className="container mx-auto px-4 py-16">
        <PortfolioCarousel projects={portfolioProjects} />
      </section>
      <section className="container mx-auto px-4 py-16 text-center">
        <RainbowButton>Get Started</RainbowButton>
      </section>
    </main>
  );
}

export default HomePage;