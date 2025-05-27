import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';
import styles from './Nav.module.scss';
import '@/i18n.js';

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdown, setIsLangDropdown] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const toggleLang = () => {
    setIsLangDropdown(!isLangDropdown);
  };

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    setIsLangDropdown(false);
  };

  const menuItems = [
    { href: '/', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#benefits', label: t('nav.benefits') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/contact', label: t('nav.contact') },
    { href: '/auth/profile', label: t('nav.profile') }
  ];

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        DevPortal
      </Link>

      <ul className={styles.links}>
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <div className={styles.language} onClick={toggleLang}>
        <IoLanguage />
        <span>{currentLang}</span>
        <ul className={`${styles.dropdown} ${isLangDropdown ? styles.active : ''}`}>
          <li onClick={() => changeLang('en')}>English</li>
          <li onClick={() => changeLang('ru')}>Русский</li>
        </ul>
      </div>

      <button className={styles.burger} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={toggleMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.mobileLang}>
          <button onClick={() => { changeLang('en'); toggleMenu(); }}>EN</button>
          <button onClick={() => { changeLang('ru'); toggleMenu(); }}>RU</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;