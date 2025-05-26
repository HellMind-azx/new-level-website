'use client'

import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "./style.scss";

const projects = [
  {
    title: "AI-помощник",
    description: "Web-приложение с OpenAI API и генерацией кода.",
    image: "/images/project1.jpg",
    demo: "#",
    code: "#",
  },
  {
    title: "NFT Галерея",
    description: "Интерактивная галерея на Next.js + Web3.",
    image: "/images/project2.jpg",
    demo: "#",
    code: "#",
  },
  {
    title: "Платформа обучения",
    description: "Система трекинга прогресса и заданий.",
    image: "/images/project3.jpg",
    demo: "#",
    code: "#",
  },
];

export default function ProjectsSection() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects__background">
        <div className="circle" />
        <div className="lines" />
        <div className="dots" />
      </div>
      <h2 className="projects__title">Проекты MiracleX</h2>
      <div className="projects__grid">
        {projects.map((project, idx) => (
          <div
            className="project-card"
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
          >
            <div
              className="project-card__image"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="project-card__content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card__links">
                <a href={project.demo}>Смотреть</a>
                <a href={project.code}>Код</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
