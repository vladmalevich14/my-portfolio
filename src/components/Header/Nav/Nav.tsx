import React from 'react';
import styles from './Nav.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";


export const Nav = () => {
    return <div className={styles.hamburger_menu}>
        <input id={styles.menu__toggle} type="checkbox"/>
        <label className={styles.menu__btn} htmlFor={styles.menu__toggle}>
            <span></span>
        </label>

        <ul className={styles.menu__box}>
            <li>
                <Link
                    className={styles.menu__item}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    Main
                </Link>
            </li>
            <li>
                <Link
                    className={styles.menu__item}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link
                    className={styles.menu__item}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    className={styles.menu__item}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    Contacts
                </Link>
            </li>
        </ul>
    </div>
};
