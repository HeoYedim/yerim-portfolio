import React, { useState, useEffect } from "react";
import "./Cover.css";

const Cover = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      const p = Math.min(Math.max(scrollY / vh, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const move = progress * 700;
  const isMobile = window.innerWidth <= 768;
  const move = progress * (isMobile ? 300 : 700);
  const fade = 1 - progress * 1.2;

  return (
    <section className="coverLayer">
      <h1
        className="name"
        style={{ transform: `translateX(${-move}px)`, opacity: fade }}
      >
        HEO YERIM
      </h1>
      <h2
        className="subtitle"
        style={{ transform: `translateX(${move}px)`, opacity: fade }}
      >
        &lt;FrontEnd Developer /&gt;
      </h2>
      <h3
        className="portfolio"
        style={{ transform: `translateX(${-move}px)`, opacity: fade }}
      >
        portfolio
      </h3>

      <span
        className="scrollHint"
        style={{
          opacity: progress < 0.9 ? 1 - progress * 2 : 0,
          pointerEvents: "none",
          display: progress >= 0.9 ? "none" : "block",
        }}
      >
        ↓ Scroll
      </span>
    </section>
  );
};

export default Cover;
