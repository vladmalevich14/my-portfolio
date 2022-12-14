import React from 'react';
import styles from '../Main/Main.module.css'

export const Main = () => {
    return <div className={styles.mainBlock}>
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <span>Hi there!</span>
                <h1>I am Vlad Malevich</h1>
                <span>Frontend developer</span>
            </div>
            <div><img src='https://n1s2.hsmedia.ru/97/ad/89/97ad896b7eda360be8a60e17cf3ca5e8/549x600_1_e8544d245cab330cf394c67b23496f58@900x983_0xac120003_17301859641650093743.jpg' alt="My photo" className={styles.photo}/></div>
        </div>

    </div>
}