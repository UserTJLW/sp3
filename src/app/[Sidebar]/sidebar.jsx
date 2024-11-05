"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Styles from './sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonTop, setButtonTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [buttonOffsetY, setButtonOffsetY] = useState(0);
  const router = useRouter();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    router.push('/login');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setButtonTop(window.innerHeight / 2 - 20);

      const handleMouseMove = (e) => {
        if (isDragging) {
          setButtonTop(e.clientY - buttonOffsetY);
        }
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      const handleMouseDown = (e) => {
        setIsDragging(true);
        setButtonOffsetY(e.clientY - buttonTop);
      };

      const buttonElement = document.querySelector(`.${Styles.sidebarToggle}`);
      if (buttonElement) {
        buttonElement.addEventListener('mousedown', handleMouseDown);
      }

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        if (buttonElement) {
          buttonElement.removeEventListener('mousedown', handleMouseDown);
        }
      };
    }
  }, [isDragging, buttonTop, buttonOffsetY]);

  return (
    <div className={Styles.sidebarContainer}>
      <button
        className={`${Styles.sidebarToggle} ${isOpen ? Styles.open : ''}`}
        onClick={toggleSidebar}
        style={{ top: buttonTop }}
      >
        {isOpen ? '✕' : '☰'}
      </button>
      <div className={`${Styles.sidebar} ${isOpen ? Styles.open : ''}`}>
        <ul>
          <li><Link href="/inicio" className={Styles.link}>Inicio</Link></li>
          <li><Link href="/prestamos" className={Styles.link}>Préstamos</Link></li>
          <li><Link href="/transferencias" className={Styles.link}>Transferencias</Link></li>
          <li><Link href="/cuentas" className={Styles.link}>Cuentas</Link></li>
          <li><Link href="/tarjetas" className={Styles.link}>Tarjetas</Link></li>
          <li><Link href="/convertidor" className={Styles.link}>Conversor de moneda</Link></li>
          <li><Link href="/facturas" className={Styles.link}>Facturas</Link></li>
          <li><Link href="/helpcenter" className={Styles.link}>Centro de ayuda</Link></li>
          <li><button onClick={handleLogout} className={Styles.logoutButton}>Cerrar Sesión</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


