import React from 'react';
import styles from './Footer.module.css'
import SocialNetworks from "./SocialNetworks/SocialNetworks";

export const Footer = () => {
    return <div className={styles.mainBlock}>
        <div className={styles.footerContainer}>
        <span>Ⓒ 2023 All rights reserved</span>
        <SocialNetworks />
        </div>
        </div>

};
