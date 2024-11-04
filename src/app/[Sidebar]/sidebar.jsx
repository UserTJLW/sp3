"use client"; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import styles from './sidebar.module.css'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonTop, setButtonTop] = useState(0); 
  const [isDragging, setIsDragging] = useState(false); 
  const [buttonOffsetY, setButtonOffsetY] = useState(0); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
   
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

    const buttonElement = document.querySelector(`.${styles.sidebarToggle}`);
    if (buttonElement) {
      buttonElement.addEventListener('mousedown', handleMouseDown);
    }

   
    setButtonTop(window.innerHeight / 2 - 20); 

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      if (buttonElement) {
        buttonElement.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, [isDragging, buttonTop, buttonOffsetY]);

  return (
    <div className={styles.sidebarContainer}>
      <button
        className={`${styles.sidebarToggle} ${isOpen ? styles.open : ''}`}
        onClick={toggleSidebar}
        style={{ top: buttonTop }}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li><Link href="/inicio">Inicio</Link></li>
          <li><Link href="/prestamos">Préstamos</Link></li>
          <li><Link href="/transferencias">Transferencias</Link></li>
          <li><Link href="/cuentas">Cuentas</Link></li>
          <li><Link href="/tarjetas">Tarjetas</Link></li>
          <li><Link href="/convertidor">Conversor de moneda</Link></li>
          <li><Link href="/helpcenter">Centro de ayuda</Link></li>
          <li><Link href="/">Cerrar Sesión</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


