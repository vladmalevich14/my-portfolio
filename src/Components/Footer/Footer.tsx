import React from 'react';
import styles from './Footer.module.css'
import SocialNetwork from './SocialNetworks/SocialNetwork';
import linkedin from '../assets/icons/linkedin.svg'
import telegram from '../assets/icons/telegram.svg'
import gmail from '../assets/icons/gmail.svg'
import github from '../assets/icons/github.svg'

export type IconType = {
    backgroundImage: string
}

export const Footer = () => {

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

    return <div className={styles.mainBlock}>
        <div className={styles.footerContainer}>
        <span>© 2023 All rights reserved</span>
            <ul className={styles.iconsContainer}>
        <SocialNetwork style={linkedinIcon}/>
        <SocialNetwork style={telegramIcon} />
        <SocialNetwork style={gmailIcon} />
        <SocialNetwork style={githubIcon} />
            </ul>
        </div>
        </div>

};
