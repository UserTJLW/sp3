// components/LandPage.js
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Landpage.module.css';

const LandPage = () => {
    const router = useRouter();
    const nombreUsuario = typeof window !== 'undefined' ? localStorage.getItem('usuario')?.split(': ')[1] : '';

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
