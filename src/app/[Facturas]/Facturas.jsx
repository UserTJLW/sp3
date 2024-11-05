"use client";
import { useEffect } from 'react';
import styles from '../[Cuentas]/cuentas.module.css';

export async function getStaticPaths() {
  const paths = Array.from({ length: 10 }, (_, index) => ({
    params: { id: (index + 1).toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const factura = {
    id: params.id,
    cliente: `Cliente ${params.id}`, 
    monto: (Math.random() * 1000).toFixed(2), 
  };

  return { props: { factura } };
}

const Factura = ({ factura }) => {
  if (!factura || !factura.id) {
    return <p>No hay facturas disponibles</p>;
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const historial = JSON.parse(localStorage.getItem('historialFacturas')) || [];
      historial.push(factura);
      localStorage.setItem('historialFacturas', JSON.stringify(historial));
    }
  }, [factura]);

  const handlePayment = () => {
    alert(`Payment initiated for Factura ${factura.id}`);
  };

  return (
    <div className={styles.cuentasContainer}>
      <h1 className={styles.facturaTitle}>Factura {factura.id}</h1>
      <p className={styles.clienteInfo}>Cliente: {factura.cliente}</p>
      <p className={styles.montoInfo}>Monto: ${factura.monto}</p>
      <button className={styles.payButton} onClick={handlePayment}>Pagar</button>
    </div>
  );
};

export default Factura;

