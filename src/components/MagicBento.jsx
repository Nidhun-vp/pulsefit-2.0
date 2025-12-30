import React, { useRef, useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./MagicBento.css";

/* ===================== DATA ===================== */

const cardData = [
  { text: "CHEST - Day", route: "/chest" },
  { text: "SHOULDER - Day", route: "/shoulder" },
  { text: "BACK- Day", route: "/biceps" },
  { text: "Leg - Day", route: "/leg" },
  { text: "Triceps + Biceps", route: "/triceps" },
  { text: "Abs + Forams", route: "/absforarms" },
];

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_GLOW_COLOR = "132, 0, 255";

/* ===================== PARTICLE CARD ===================== */

const ParticleCard = ({
  children,
  onClick,
  className = "",
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const cardRef = useRef(null);
  const particles = useRef([]);

  const createParticle = (x, y) => {
    const el = document.createElement("div");
    el.className = "particle";
    el.style.cssText = `
      position:absolute;
      width:4px;
      height:4px;
      border-radius:50%;
      background:rgba(${glowColor},1);
      box-shadow:0 0 6px rgba(${glowColor},0.6);
      left:${x}px;
      top:${y}px;
      pointer-events:none;
    `;
    return el;
  };

  const spawnParticles = () => {
    const rect = cardRef.current.getBoundingClientRect();

    for (let i = 0; i < particleCount; i++) {
      const p = createParticle(
        Math.random() * rect.width,
        Math.random() * rect.height
      );
      cardRef.current.appendChild(p);
      particles.current.push(p);

      gsap.fromTo(
        p,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          yoyo: true,
          repeat: -1,
          x: () => (Math.random() - 0.5) * 80,
          y: () => (Math.random() - 0.5) * 80,
        }
      );
    }
  };

  const clearParticles = () => {
    particles.current.forEach(p => p.remove());
    particles.current = [];
  };

  useEffect(() => {
    const el = cardRef.current;

    const enter = () => spawnParticles();
    const leave = () => clearParticles();

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
      clearParticles();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`magic-bento-card ${className}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {children}
    </div>
  );
};

/* ===================== MAIN COMPONENT ===================== */

export default function MagicBento() {
  const navigate = useNavigate();

  return (
    <div className="card-grid bento-section">
      {cardData.map((card, index) => (
        <ParticleCard
          key={index}
          onClick={() => navigate(card.route)}
        >
          <div className="magic-bento-card__content">
            <h2 className="magic-bento-card__title">{card.text}</h2>
          </div>
        </ParticleCard>
      ))}
    </div>
  );
}
