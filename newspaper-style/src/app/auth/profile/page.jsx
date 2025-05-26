'use client';

import '../auth.scss';

export default function ProfilePage() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-title">Профиль</h2>
        <div className="auth-profile">
          <img src="/avatar-default.png" alt="avatar" />
          <p>Имя пользователя</p>
          <p>Email: example@example.com</p>
          <button>Выйти</button>
        </div>
      </div>
    </div>
  );
}
