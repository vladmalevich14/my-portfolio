import React from 'react';
import styles from './Footer.module.scss'
import NetworkIcons from '../common/NetworkIcons/NetworkIcons';

export const Footer = () => {
    return <div className={styles.mainBlock}>

        <div className={styles.footerContainer}>
            <span>© 2023 All rights reserved</span>
            <NetworkIcons/>
        </div>
    </div>

};
