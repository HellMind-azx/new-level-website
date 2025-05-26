'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Animated.module.scss';

const codeLines = [
  'const user = createUser("developer");',
  'const level = upgradeSkills(user);',
  'buildPortfolio(level);',
  'joinCommunity(user);',
];

export default function AnimatedCode() {
  const linesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      linesRef.current,
      { opacity: 0, y: 40, z: -100, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        z: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className={styles.codeContainer}>
      <div className={styles.terminal}>
        {codeLines.map((line, i) => (
          <pre
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            className={styles.codeLine}
          >
            <code>{line}</code>
          </pre>
        ))}
        <div className={styles.cursor} />
      </div>
    </div>
  );
}
