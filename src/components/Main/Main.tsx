import React from 'react';
import styles from './Main.module.scss'
import myPhoto from '../../assets/img/My-photo.png'
import NetworkIcons from "../common/NetworkIcons/NetworkIcons";
import {Slide} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';


export const Main = () => {

    return <div className={styles.mainBlock} id='main'>
        <div className={styles.container}>
            <Slide direction={"left"} triggerOnce>
                <div className={styles.infoContainer}>
                    <div className={styles.description}>
                        <span className={styles.welcome}>WELCOME TO MY PORTFOLIO</span>
                        <h1>Hi,
                            <br/>
                            I'm <span className={styles.nameColor}>Vlad Malevich,</span>
                            <br/>
                            web developer
                        </h1>
                        <span className={styles.welcome}>
                            <ReactTypingEffect text={['Frontend developer', '<coder/>']} typingDelay={0} speed={100} eraseSpeed={150} eraseDelay={200}/>
                        </span>
                    </div>
                    <div className={styles.networkWrapper}>
                        <NetworkIcons/>
                    </div>
                </div>
            </Slide>
        <Slide direction={"right"} triggerOnce>
            <div className={styles.imageContainer}><img src={myPhoto} alt="My photo" className={styles.photo}/></div>
        </Slide>
        </div>
    </div>
}