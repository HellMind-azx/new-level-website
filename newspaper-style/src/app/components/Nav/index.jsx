'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './Nav.module.scss';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { removeSessionCookie } from '@/utils/cookies';
import { auth } from '@/firebase/config';
import Link from 'next/link';
import i18n from '@/i18n';

export default function Nav() {
  const navRef = useRef(null);
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || 'ru');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
  
    return () => unsubscribe();
  }, []);
  
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const handleLangChange = (newLang) => {
    i18n.changeLanguage(newLang).then(() => {
      setCurrentLang(newLang);
      setDropdownOpen(false);
    });
  };

  return (
    <nav className={styles.nav} ref={navRef}>
      <div className={styles.logo}>MiracleX</div>

      {/* Desktop Links */}
      <ul className={styles.links}>
        <li><Link href="/">{t('nav.home')}</Link></li>
        <li><Link href="#about">{t('nav.about')}</Link></li>
        <li><Link href="#benefits">{t('nav.benefits')}</Link></li>
        <li><Link href="/projects">{t('nav.projects')}</Link></li>
        <li><Link href="/contacts">{t('nav.contacts')}</Link></li>
        <li><Link href="/auth/login">{t('nav.login')}</Link></li>
      </ul>

      {/* Language dropdown */}
      <div className={styles.language} onClick={() => setDropdownOpen(!dropdownOpen)}>
        <span>{currentLang.toUpperCase()}</span>
        <ChevronDown size={16} />
        {dropdownOpen && (
          <ul className={styles.dropdown}>
            {['ru', 'en', 'uz'].map((lng) => (
              <li key={lng} onClick={() => handleLangChange(lng)}>
                {lng.toUpperCase()}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Burger */}
      <button
        className={styles.burger}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        <ul>
          <li><Link href="/" onClick={() => setMobileOpen(false)}>{t('nav.home')}</Link></li>
          <li><Link href="#about" onClick={() => setMobileOpen(false)}>{t('nav.about')}</Link></li>
          <li><Link href="#benefits" onClick={() => setMobileOpen(false)}>{t('nav.benefits')}</Link></li>
          <li><Link href="/projects" onClick={() => setMobileOpen(false)}>{t('nav.projects')}</Link></li>
          <li><Link href="/contacts" onClick={() => setMobileOpen(false)}>{t('nav.contacts')}</Link></li>
          <li><Link href="/auht/login" onClick={() => setMobileOpen(false)}>{t('nav.login')}</Link></li>
        </ul>
        <div className={styles.mobileLang}>
          {['ru', 'en', 'uz'].map((lng) => (
            <button key={lng} onClick={() => handleLangChange(lng)}>
              {lng.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}