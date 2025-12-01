// ProjectPage.jsx
import React, { useState } from "react";
import "./Projectpage.css";

const projects = [
  {
    id: 1,
    title: "#N/A: n41ve avenue",
    desc: "Developed the exhibition website for the #N/A: n41ve avenue pavilion, part of The Wrong Biennale 7th, showcasing works from 16 contemporary artists in an interactive digital space.",
    repo: "https://github.com/luotcode/naive_avenue",
    live: "https://n41veavenue.com/",
    slide: "https://www.canva.com/design/DAG5aic5HN4/lt_3Vn4hRo-vppm3Q8eVpg/view?embed"
  },
  {
    id: 2,
    title: "Real-Time Rigging and Secondary Motion for Sketch-Based 3D Characters",
    desc: "Started as a personal playground, this project evolved into a research paper presented at ICCSA 2025 conference, focusing on real-time rigging and secondary motion in sketch-based 3D character modeling.",
    repo: "https://github.com/letmaplespillthetea/Sketch-to-Model",
    live: "https://link.springer.com/chapter/10.1007/978-3-031-97657-5_13",
    slide: "https://docs.google.com/presentation/d/e/2PACX-1vSz0Hee8ldo-L_qtUrbn8Z0RbBQxZ-5S3KJtseAz4If5-3e1G8r6kOvQvX8sWiiUBHUCcRmy9x7aKK4/pubembed?start=true&loop=false",
  },
  {
    id: 3,
    title: "Lilypad Band",
    desc: "Let’s practice water shaders and vertex-driven animation, so we can animate without drawing keyframes.",
    repo: "https://github.com/letmaplespillthetea/Lilypad-Band",
    live: "#",
    slide: "https://www.canva.com/design/DAG2Ixh_v0c/v0Pmr8fLxZe7NvEy_O-IQw/view?embed",
  },
  {
    id: 4,
    title: "ᓚᘏᗢ HomeCatHome (HomeSheepHome Parody)",
    desc: "An SDL2 C++ puzzle game with 2D retro artstyle. Project for 2023 UET Advanced Programming",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/5dd716189593205.65ae2ef189c18.png",
    repo: "https://github.com/letmaplespillthetea/HomeCatHome---SDL-Project-for-INT2215",
    live: "https://www.youtube.com/watch?v=6gIb3OcySU8",
    slide: "https://www.behance.net/embed/project/189593205?ilo0=1", 
  },
  {
    id: 5,
    title: "Lexicat Resource",
    desc: "A Java English learning application inspired by cats. A project for 2023 UET Object-Oriented Programming.",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/910a52188534929.65af45eec884b.png",
    repo: "https://github.com/letmaplespillthetea/LexiCatResource---JavaFX-Project-for-INT2204",
    live: "#",
    slide: "https://www.behance.net/embed/project/188534929?ilo0=1",
  },
];

export default function ProjectPage() {
  const [slideUrl, setSlideUrl] = useState(null);

  const openSlide = (url) => {
    if (!url) return;
    setSlideUrl(url);
    document.body.style.overflow = "hidden";
  };

  const closeSlide = () => {
    setSlideUrl(null);
    document.body.style.overflow = "";
  };

  return (
    <main className="projects-page">

      <section className="projects-grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <div className="project-media">
            {p.img ? (
                <img
                src={p.img}
                alt={p.title}
                className="project-thumb"
                onClick={() => p.slide && openSlide(p.slide)}
                />
            ) : (
                <iframe
                src={p.slide}
                title={p.title}
                className="project-iframe"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                allow="clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
                />
            )}
            </div>


            <div className="project-body">
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
              <div className="project-links">
                <a href={p.repo} target="_blank" rel="noopener noreferrer">
                  Repo
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  View work
                </a>
                {p.slide && (
                  <button
                    type="button"
                    className="slide-btn"
                    onClick={() => openSlide(p.slide)}
                    aria-label={`Open slideshow for ${p.title}`}
                  >
                    View slideshow
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {slideUrl && (
        <div
          className="slideshow-modal"
          role="dialog"
          aria-modal="true"
          onClick={closeSlide}
        >
          <div
            className="slideshow-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-slide"
              onClick={closeSlide}
              aria-label="Close slideshow"
              type="button"
            >
              ✕
            </button>
            <iframe
              className="slideshow-iframe"
              src={slideUrl}
              title="Slideshow"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
}
