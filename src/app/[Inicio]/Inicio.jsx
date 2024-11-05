"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; 
import styles from './Inicio.module.css';

const LandPage = () => {
    const router = useRouter();
    const nombreUsuario = typeof window !== 'undefined' && localStorage.getItem('usuario')
        ? localStorage.getItem('usuario').split(': ')[1]
        : 'Usuario';

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('usuario');
            localStorage.removeItem('contrasenia');
            router.push('/login');
        }
    };

    return (
        <div className={styles.landpageContainer}>
            <h1>¡Hola, {nombreUsuario}!</h1>
            <p>Bienvenido a Time Bank.</p>
            <button className={styles.button} onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
};

export default LandPage;

