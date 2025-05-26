'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Mail, Send, MapPin } from 'lucide-react';
import styles from './Contact.module.scss';

export default function Contacts() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <section id="contacts" ref={sectionRef} className={styles.contacts}>
      <h2 className={styles.title}>Связаться с нами</h2>
      <p className={styles.subtitle}>
        Мы всегда открыты для партнёрств, сотрудничества и обратной связи.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <Mail size={28} color="#00f0ff" />
          <h3>Email</h3>
          <p>team@miraclex.dev</p>
        </div>

        <div className={styles.card}>
          <Send size={28} color="#00f0ff" />
          <h3>Telegram</h3>
          <p>@miraclex_support</p>
        </div>

        <div className={styles.card}>
          <MapPin size={28} color="#00f0ff" />
          <h3>Локация</h3>
          <p>Remote — Global Network</p>
        </div>
      </div>
    </section>
  );
}
