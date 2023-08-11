import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';

const CommonModal = (props) => {
    return (ReactDOM.createPortal(
        <div className={styles.modalContainer}>
            <div className={styles.modalContent + " animate__animated animate__backInUp"}>
                {props.children}
            </div>
        </div >, document.body)
    );
}

export default CommonModal;