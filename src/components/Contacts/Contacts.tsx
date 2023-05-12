import React from 'react';
import styles from './Contacts.module.scss'
import {Title} from "../common/Title/Title";
import {Slide} from "react-awesome-reveal";

export const Contacts = () => {
    return <div className={styles.mainBlock} id='contacts'>
        <Slide direction={'up'} triggerOnce>
        <Title title={'Contact With Me'} description={'Contact'}/>
        </Slide>
        <form action="src/components/common/Contacts/Contacts" className={styles.formContainer}>
            <div className={styles.inputStyle}>
                <label htmlFor="name">Name</label>
                <input type="text" name="Name" id="name" className={styles.formArea}/>
            </div>
            <div className={styles.inputStyle}>
                <label htmlFor="phone">Phone number</label>
                <input type="text" name="Phone" id="phone"/>
            </div>
            <div className={styles.inputStyle}>
                <label>Email</label>
                <input type="text" name="Email" id="email"/>
            </div>
            <div className={styles.submitStyle}>
                <label>Your message</label>
                <textarea></textarea>
                <input type="submit" value="SEND MESSAGE" className={styles.submit}/>
            </div>
        </form>
    </div>
};
