import React from 'react';
import { useDinero } from './DineroContext'; 
import styles from './cuentas.module.css';


const Cuenta = ({ title, amount, currency }) => {
  return (
    <div className={styles.cuenta}>
      <h2>{title}</h2>
      <p className={styles.saldo}>{amount} {currency}</p>
    </div>
  );
};


const Cuentas = () => {
  const { dinero } = useDinero(); 

  return (
    <div className={styles.cuentasContainer}>
        <Cuenta title="Cuenta en Pesos" amount={dinero} currency="ARS" />
    </div>
  );
};

export default Cuentas;
