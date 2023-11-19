import React from 'react';
import styles from './NetworkIcons.module.scss'
import linkedin from "../../../assets/icons/linkedin.svg";
import telegram from "../../../assets/icons/telegram.svg";
import gmail from "../../../assets/icons/gmail.svg";
import github from "../../../assets/icons/github.svg";


const NetworkIcons = () => {
    const linkedinIcon = {
        backgroundImage: `url(${linkedin})`
    }
    const telegramIcon = {
        backgroundImage: `url(${telegram})`
    }
    const gmailIcon = {
        backgroundImage: `url(${gmail})`
    }
    const githubIcon = {
        backgroundImage: `url(${github})`
    }
    return (
        <ul className={styles.iconsContainer}>
            <li><a href='https://www.linkedin.com/in/vladmalevich/' className={styles.iconLink} target={'_blank'}><div style={linkedinIcon}></div></a></li>
            <li><a href='https://t.me/vlad_malevich14' className={styles.iconLink} target={'_blank'}><div style={telegramIcon}></div></a></li>
            <li><a href='mailto:vladmalevich1431@gmail.com' className={styles.iconLink} target={'_blank'}><div style={gmailIcon}></div></a></li>
            <li><a href='https://github.com/vladmalevich14' className={styles.iconLink} target={'_blank'}><div style={githubIcon}></div></a></li>
        </ul>
    );
};

export default NetworkIcons;