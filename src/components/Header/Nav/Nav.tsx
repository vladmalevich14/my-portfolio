import React from 'react';
import styles from './Nav.module.scss'
export const Nav = () => {
    return<div className={styles.hamburger_menu}>
        <input id={styles.menu__toggle} type="checkbox"/>
        <label className={styles.menu__btn} htmlFor={styles.menu__toggle}>
            <span></span>
        </label>

        <ul className= {styles.menu__box}>
            <li><a className={styles.menu__item} href="#main">Main</a></li>
            <li><a className={styles.menu__item} href="#skills">Skills</a></li>
            <li><a className={styles.menu__item} href="#projects">Projects</a></li>
            <li><a className={styles.menu__item} href="#contacts">Contacts</a></li>
        </ul>
    </div>
};
