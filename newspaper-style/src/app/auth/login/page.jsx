'use client';

import '../auth.scss';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import '@/styles/neon-toast.scss';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      alert('Failed to sign in. Please check your credentials.');
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/');
    } catch (error) {
      alert('Failed to sign in with Google.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-title">Вход</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Пароль" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            Войти
          </button>
          <button 
            type="button"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle style={{ fontSize: '20px', marginRight: '10px' }} /> Войти с Google
          </button>
        </form>
        <p className="auth-link">Нет аккаунта? <Link href="/auth/register">Регистрация</Link></p>
      </div>
    </div>
  );
}