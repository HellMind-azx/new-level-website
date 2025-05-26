'use client';
import '@/styles/_globals.scss'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Orbitron } from 'next/font/google';
import { useAuth } from '@/hooks/useAuth';  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={'orbitron.className'}>
        <Nav />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}