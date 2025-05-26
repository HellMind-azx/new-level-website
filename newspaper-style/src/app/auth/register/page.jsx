'use client';

import '../auth.scss';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, storage } from "@/firebase/config"
import '@/styles/neon-toast.scss';

export default function RegisterPage() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-title">Регистрация</h2>
        <form className="auth-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <input type="password" placeholder="Повторите пароль" />
          <button type="submit">Зарегистрироваться</button>
        </form>
        <p className="auth-link">Уже есть аккаунт? <a href="/auth/login">Войти</a></p>
      </div>
    </div>
  );
}
