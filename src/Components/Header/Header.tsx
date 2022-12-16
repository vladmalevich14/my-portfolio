import React from 'react';
import styles from './Header.module.css'
import {Nav} from "./Nav/Nav";
import SocialNetworks from "./SocialNetworks/SocialNetworks";

export const Header = () => {
    return <div className={styles.header}>
        <Nav />
        <SocialNetworks />
    </div>
}