// HistorialMovimientos.js
import React from 'react';
import { useDinero } from './DineroContext';
import styles from './HistorialMovimientos.module.css';

const HistorialMovimientos = () => {
    const { movimientos = [] } = useDinero();  // Asegúrate de que movimientos sea un array

    return (
        <div className={styles.historialContainer}>
            <h3>Historial de Movimientos:</h3>
            <ul>
                {movimientos.length > 0 ? (
                    movimientos.map((movimiento, index) => (
                        <li key={index}>
                            {movimiento.monto}$ a: {movimiento.usuario}
                        </li>
                    ))
                ) : (
                    <li>No hay movimientos recientes.</li>
                )}
            </ul>
        </div>
    );
};

export default HistorialMovimientos;
