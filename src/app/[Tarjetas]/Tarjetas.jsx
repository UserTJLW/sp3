"use client"; 
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './Tarjetas.module.css'; 

const Card = ({ tier, name, number, onCardClick }) => {
    return (
        <div className={`${styles.card} ${styles[tier]}`} onClick={onCardClick}>
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{name}</h2>
                <p className={styles.cardNumber}>{number}</p>
                <p className={styles.cardTier}>{tier.toUpperCase()}</p>
            </div>
        </div>
    );
};

const Tarjetas = () => {
    const nombreUsuario = localStorage.getItem('usuario')?.split(': ')[1] || 'Usuario';
    const [mensaje, setMensaje] = useState('');
    const router = useRouter();

    const handleCardClick = (tier) => {
        // Actualiza el mensaje mostrado
        setMensaje(`Has seleccionado la tarjeta: ${tier}`);
        
        
    };

    return (
        <div className={styles.App}>
            {mensaje && <p>{mensaje}</p>}
            <Card tier="classic" name={nombreUsuario} number="1234 5678 9012 3456" onCardClick={() => handleCardClick('classic')} />
            <Card tier="silver" name={nombreUsuario} number="1234 5678 6292 7140" onCardClick={() => handleCardClick('silver')} />
            <Card tier="gold" name={nombreUsuario} number="5678 9012 3456 1234" onCardClick={() => handleCardClick('gold')} />
            <Card tier="platinum" name={nombreUsuario} number="8765 4321 0987 6543" onCardClick={() => handleCardClick('platinum')} />
            <Card tier="black" name={nombreUsuario} number="1122 3344 5566 7788" onCardClick={() => handleCardClick('black')} />
        </div>
    );
};

export default Tarjetas;