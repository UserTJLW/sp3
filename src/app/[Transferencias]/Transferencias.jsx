"use client";
import React, { useState } from 'react';
import { useDinero } from '../^[Cuentas]/DineroContext';
import styles from './Transferencias.module.css'; 
/*import DynamicComponent from '../Render/DynamicComponent';*/ 

const Transferencias = () => {
    const [usuario, setUsuario] = useState('');
    const [monto, setMonto] = useState('');
    const { handleActualizarDinero } = useDinero();

    const handleSubmit = (e) => {
        e.preventDefault();
        const montoNumero = Number(monto);
        if (isNaN(montoNumero) || montoNumero <= 0) {
            alert('Por favor, ingresa un monto válido.');
            return;
        }
        handleActualizarDinero(montoNumero, usuario);

        
        setUsuario('');
        setMonto('');
    };

    return (
        <div className={styles.TransferenciasContainer}> 
            <form onSubmit={handleSubmit}>
                <h1>Nueva transferencia:</h1>
                <div className={styles.inputGroup}> 
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Destinatario"
                        required
                    />
                </div>
                <input
                    type="number"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                    placeholder="Monto"
                    min="1"
                    required
                />
                <button type="submit">Transferir</button>
            </form>
            <DynamicComponent />
        </div>
    );
};

export default Transferencias;
