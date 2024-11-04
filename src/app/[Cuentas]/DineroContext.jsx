// DineroContext.js
import React, { createContext, useState, useContext } from 'react';

// Crea el contexto
const DineroContext = createContext();

// Crea un proveedor de contexto
export const DineroProvider = ({ children }) => {
    const [dinero, setDinero] = useState(10400);
    const [movimientos, setMovimientos] = useState([]);
    const [message, setMessage] = useState('');

    const handleActualizarDinero = (monto, usuario) => {
        if (monto > 0 && dinero >= monto) {
            setDinero(dinero - monto);
            setMovimientos(prevMovimientos => [{ usuario, monto }, ...prevMovimientos].slice(0, 5));
            setMessage(`Enviaste $${monto} a ${usuario}`);
        } else {
            setMessage('Fondos insuficientes !');
        }
    };

    const handleCloseMessage = () => {
        setMessage('');
    };

    return (
        <DineroContext.Provider value={{ dinero, movimientos, message, handleActualizarDinero, handleCloseMessage }}>
            {children}
        </DineroContext.Provider>
    );
};

// Custom hook para usar el contexto
export const useDinero = () => useContext(DineroContext);
