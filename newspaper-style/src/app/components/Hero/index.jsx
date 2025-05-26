'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.scss';
import { gsap } from 'gsap';
import Image from 'next/image';
import AnimatedCode from '../AnimatedCode';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0, skewY: 7 },
      { y: 0, opacity: 1, skewY: 0 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1 },
        '-=0.4'
      );
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradientCircle} />
        <div className={styles.abstractShape} />
      </div>

      <div className={styles.content}>
        <h1 ref={titleRef} className={styles.title}>
          MiracleX — <span className={styles.highlight}>прокачка</span> программистов
        </h1>
        <p ref={subtitleRef} className={styles.subtitle}>
          Платформа с реальными задачами, глубоким мышлением и карьерным ростом.
        </p>
        <button ref={ctaRef} className={styles.cta}>
          Начать сейчас
          <span className={styles.ctaEffect} />
        </button>
      </div>

      <div className={styles.imageWrapper}>
        <AnimatedCode />
      </div>
    </section>
  );
}
