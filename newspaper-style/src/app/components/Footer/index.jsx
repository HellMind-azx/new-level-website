'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaDribbble, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      }
    );

    gsap.to('.footer__socials a', {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: 'linear',
    });

    gsap.fromTo(
      '.footer__icon-pulse',
      { scale: 1 },
      {
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'sine.inOut',
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      {/* SVG Grid Background */}
      <div className="footer__svg-grid">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0fffc1" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glow Orbs */}
      <div className="footer__glow glow1"></div>
      <div className="footer__glow glow2"></div>

      {/* Content */}
      <div className="footer__container">
        <div className="footer__column">
          <h3 className="footer__title">MiracleX</h3>
          <p className="footer__text">Платформа для роста программистов. Создано с любовью к технологиям.</p>
        </div>

        <div className="footer__column">
          <h4 className="footer__subtitle">Навигация</h4>
          <ul className="footer__links">
            <li><Link href="#about">О нас</Link></li>
            <li><Link href="/projects">Проекты</Link></li>
            <li><Link href="/contact">Контакты</Link></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__subtitle">Мы в сети</h4>
          <div className="footer__socials">
            <a href="https://github.com" className="footer__icon-pulse"><FaGithub /></a>
            <a href="https://linkedin.com" className="footer__icon-pulse"><FaLinkedin /></a>
            <a href="https://twitter.com" className="footer__icon-pulse"><FaXTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} MiracleX. Все права защищены.
      </div>
    </footer>
  );
}
