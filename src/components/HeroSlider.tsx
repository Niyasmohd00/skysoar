"use client";

import React, { useEffect, useState } from "react";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
    title: "Tropical Escape",
    subtitle: "7 nights · All inclusive",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=2",
    title: "Mountain Adventure",
    subtitle: "Hiking · Guided tours",
  },
  {
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=3",
    title: "City Lights",
    subtitle: "Culture · Nightlife",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=4",
    title: "Desert Safari",
    subtitle: "4x4 · Sunset views",
  },
  {
    image:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=5",
    title: "Island Hopping",
    subtitle: "Boat trips · Snorkeling",
  },
];

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero-slide ${i === idx ? "active" : ""}`}
          style={{ backgroundImage: `url(${s.image})` }}
        >
          <div className="hero-overlay" />
          <div className="hero-text">
            <h2>{s.title}</h2>
            <p>{s.subtitle}</p>
          </div>
        </div>
      ))}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === idx ? "dot-active" : ""}`}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
