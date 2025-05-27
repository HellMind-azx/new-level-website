'use client';

import '../auth.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/auth/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/auth/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  if (!user) return null;
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-title">Профиль</h2>
        <div className="auth-profile">
          <img src="img/futuristic" alt="" />
          <p>{user.name}</p>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Выйти</button>
        </div>
      </div>
    </div>
  );
}
