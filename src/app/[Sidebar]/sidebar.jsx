"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Styles from './sidebar.module.css';

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { name: 'Inicio', path: '/inicio' },
    { name: 'Préstamos', path: '/prestamos' },
    { name: 'Cuentas', path: '/cuentas' },
    { name: 'Tarjetas', path: '/tarjetas' },
    { name: 'Convertidor', path: '/convertidor' },
    { name: 'Centro de Ayuda', path: '/helpcenter' },
    { name: 'Facturas', path: '/facturas' },
  ];

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <nav className={Styles.sidebar}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path} onClick={() => navigateTo(item.path)}>
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;



