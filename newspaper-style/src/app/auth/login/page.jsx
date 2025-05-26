'use client';

import '../auth.scss';
import Link from 'next/link';
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import '@/styles/neon-toast.scss';

export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-title">Вход</h2>
        <form className="auth-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <button type="submit">Войти</button>
          <button type='submit'>
          <FaGoogle style={{fontSize: '20px', marginRight: '10px'}} /> Войти с Google
          </button>
        </form>
        <p className="auth-link">Нет аккаунта? <Link href="/auth/register">Регистрация</Link></p>
      </div>
    </div>
  );
}
