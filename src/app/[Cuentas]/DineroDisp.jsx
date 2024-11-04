// DineroDisp.js
import React from 'react';
import Dinero from './dinero';
import Transferencias from '../Transferencias/Transferencias';
import Message from './Message';
import HistorialMovimientos from './HistorialMovimientos';
import styles from './DineroDisp.module.css';

const DineroDisp = () => {
    return (
        <div className={styles.dineroContainer}>
            <Dinero />
            <Transferencias />
            <Message />
            <HistorialMovimientos />
        </div>
    );
};

export default DineroDisp;
