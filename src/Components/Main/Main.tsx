import React from 'react';
import styles from '../Main/Main.module.css'
import myPhoto from '../assets/img/My-photo.png'
import SocialNetworks from "../common/SocialNetworks/SocialNetworks";

export const Main = () => {

    return <div className={styles.mainBlock} id='main'>
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div>
                    <span className={styles.welcome}>WELCOME TO MY WORLD</span>
                    <h1>Hi,
                        <br/>
                        I'm <span>Vlad Malevich,</span>
                        <br/>
                        web developer
                    </h1>
                    <span className={styles.welcome}>Frontend developer</span>
                </div>
                <div className={styles.networkWrapper}>
                    <SocialNetworks/>
                </div>
            </div>
            <div className={styles.imageContainer}><img src={myPhoto} alt="My photo" className={styles.photo}/></div>
        </div>

    </div>
}