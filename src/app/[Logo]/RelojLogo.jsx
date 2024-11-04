"use client";
import React, { useEffect, useState } from 'react';
import styles from './RelojLogo.module.css';

const RelojLogo = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  const seconds = date.getSeconds() * 6;
  const minutes = (date.getMinutes() + date.getSeconds() / 60) * 6;
  const hours = (date.getHours() % 12 + date.getMinutes() / 60) * 30;

  return (
    <div className={styles['reloj-logo']}>
      <div className={`${styles.hand} ${styles.hour}`} style={{ transform: `rotate(${hours}deg)` }} />
      <div className={`${styles.hand} ${styles.minute}`} style={{ transform: `rotate(${minutes}deg)` }} />
      <div className={`${styles.hand} ${styles.second}`} style={{ transform: `rotate(${seconds}deg)` }} />
      <div className={styles.center} />
      <div className={styles['clock-text']}>Time Bank</div>
    </div>
  );
};

export default RelojLogo;

