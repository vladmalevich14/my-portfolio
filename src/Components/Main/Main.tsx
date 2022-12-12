import React from 'react';
import styles from '../Main/Main.module.css'

export const Main = () => {
    return <div className={styles.mainBlock}>
        <div className={styles.container}>
        <div>
            <span>Hi there! </span>
           <h1>I am Vlad Malevich</h1>
           <span>Frontend developer</span>
        </div>
        <div className={styles.photo}><img src='' alt="My photo"/></div>
        </div>

    </div>
}