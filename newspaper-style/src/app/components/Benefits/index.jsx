'use client';

import React, { useRef, useEffect } from 'react';
import styles from './Benefits.module.scss';
import { Zap, Puzzle, Code, Star } from 'lucide-react';
import { gsap } from 'gsap';

const benefits = [
  {
    icon: <Zap size={44} color="#00f0ff" strokeWidth={1.7} />,
    title: "Молниеносный прогресс",
    desc: "Акцент на быструю и эффективную прокачку навыков.",
  },
  {
    icon: <Puzzle size={44} color="#00f0ff" strokeWidth={1.7} />,
    title: "Целостное обучение",
    desc: "Объединяем теорию, практику и развитие мышления.",
  },
  {
    icon: <Code size={44} color="#00f0ff" strokeWidth={1.7} />,
    title: "Практические проекты",
    desc: "Реальные задачи, которые сразу можно добавить в портфолио.",
  },
  {
    icon: <Star size={44} color="#00f0ff" strokeWidth={1.7} />,
    title: "Поддержка сообщества",
    desc: "Общение, менторство и мотивация на каждом этапе.",
  },
];

export default function Benefits() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, scale: 0.8, z: -100 },
      {
        opacity: 1,
        scale: 1,
        z: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <section id='benefits' className={styles.benefits} ref={containerRef}>
      <div className={styles.bgLight}></div>

      <h2 className={styles.heading}>
        <span className={styles.overlayText}>Преимущества</span>
        Почему <span className={styles.accent}>MiracleX</span> — твой выбор
      </h2>

      <div className={styles.cards}>
        {benefits.map(({ icon, title, desc }, idx) => (
          <div key={idx} className={styles.card} tabIndex={0}>
            <div className={styles.iconWrapper}>{icon}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
