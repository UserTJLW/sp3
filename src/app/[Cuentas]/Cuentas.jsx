// components/Cuentas.js
import React from 'react';
import { useDinero } from '../context/DineroContext'; // Ajusta la ruta si es necesario
import Cuenta from './Cuenta';
import styles from '../styles/Cuentas.module.css';


const Cuenta = ({ title, amount, currency }) => {
  return (
    <div className={styles.cuenta}>
      <h2>{title}</h2>
      <p className={styles.saldo}>{amount} {currency}</p>
    </div>
  );
};


const Cuentas = () => {
  const { dinero } = useDinero(); // Obtén el dinero del contexto

  return (
    <div className={styles.cuentasContainer}>
        <Cuenta title="Cuenta en Pesos" amount={dinero} currency="ARS" />
    </div>
  );
};

export default Cuentas;
