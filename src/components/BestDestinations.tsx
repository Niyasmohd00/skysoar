"use client";

import React from "react";

const places = [
  { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", name: "Bali" },
  { img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop", name: "Swiss Alps" },
  { img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop", name: "Paris" },
  { img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=800&auto=format&fit=crop", name: "Sahara" },
  { img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop", name: "Maldives" },
];

export default function BestDestinations() {
  return (
    <section className="section">
      <h3 className="section-title">Best Destinations</h3>
      <div className="horizontal-scroll">
        {places.map((p, i) => (
          <div className="card" key={i}>
            <div className="card-img" style={{ backgroundImage: `url(${p.img})` }} />
            <div className="card-name">{p.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
