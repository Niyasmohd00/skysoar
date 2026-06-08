"use client";

import React from "react";

const cities = [
  { img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=800&auto=format&fit=crop", name: "New York" },
  { img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=800&auto=format&fit=crop", name: "London" },
  { img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop", name: "Tokyo" },
  { img: "https://images.unsplash.com/photo-1503342217505-b0a15d27a0f2?q=80&w=800&auto=format&fit=crop", name: "Sydney" },
  { img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop", name: "Dubai" },
];

export default function TopCities() {
  return (
    <section className="section">
      <h3 className="section-title">Top Cities</h3>
      <div className="horizontal-scroll">
        {cities.map((c, i) => (
          <div className="card" key={i}>
            <div className="card-img" style={{ backgroundImage: `url(${c.img})` }} />
            <div className="card-name">{c.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
