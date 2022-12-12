import React from 'react';
import styles from './Footer.module.css'

export const Footer = () => {
    return <div className={styles.mainBlock}>
        <div className={styles.footerContainer}>
        <span>Ⓒ 2023 All rights reserved</span>
        <div className={styles.links}>
            <a href="">LinkedIn</a>
            <a href="">Telegram</a>
            <a href="">Instagram</a>
        </div>
        </div>
        </div>

};
