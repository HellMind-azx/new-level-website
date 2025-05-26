'use client';

import React, { useEffect, useRef } from 'react';
import styles from './About.module.scss';
import { Rocket, Brain, Users, Briefcase } from 'lucide-react';
import { gsap } from 'gsap';

const cards = [
  {
    icon: <Rocket size={48} strokeWidth={1.5} color="#00f0ff" />,
    title: "Рост Х3 быстрее",
    text: "Обучение через реальные проекты и задачи рынка.",
  },
  {
    icon: <Brain size={48} strokeWidth={1.5} color="#00f0ff" />,
    title: "Глубокое мышление",
    text: "Упор на архитектуру, алгоритмы и продуктовое мышление.",
  },
  {
    icon: <Users size={48} strokeWidth={1.5} color="#00f0ff" />,
    title: "Сильное сообщество",
    text: "Ты не один — развитие вместе с ментором и другими.",
  },
  {
    icon: <Briefcase size={48} strokeWidth={1.5} color="#00f0ff" />,
    title: "Сильное портфолио",
    text: "Создаёшь работу, которую не стыдно показать работодателю.",
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section id='about' className={styles.about} ref={containerRef}>
      <div className={styles.bgShapes}>
        <div className={styles.circle} />
        <div className={styles.triangle} />
      </div>

      <h2 className={styles.title}>
        Почему <span className={styles.accent}>MiracleX</span>?
      </h2>

      <p className={styles.description}>
        Мы создаём уникальную платформу, где глубокие знания и практика сочетаются с поддержкой сильного сообщества.
      </p>

      <div className={styles.cards}>
        {cards.map(({ icon, title, text }, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.iconWrapper}>{icon}</div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardText}>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
