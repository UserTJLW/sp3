// Message.js
import React from 'react';
import { useDinero } from './DineroContext';

import styles from './Message.module.css';
const Message = () => {
    const { message, handleCloseMessage } = useDinero();
    if (!message) return null;

    return (
        <div className={styles.message}>
            <p>{message}</p>
            <button onClick={handleCloseMessage}>X</button>
        </div>
    );
};

export default Message;
