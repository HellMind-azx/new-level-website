'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Nav.module.scss';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const menuItems = [
    { href: '/', label: 'Главная' },
    { href: '#about', label: 'О нас'  },
    { href: '#benefits', label: 'Преимущества'  },
    { href: '/projects', label: 'Проекты' },
    { href: '/contacts', label:  'Контакты'},
    { href: '/auth/login', label: 'Войти' },
  ];

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        MiracelX
      </Link>

      <ul className={styles.links}>
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <button 
        className={styles.burger} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;