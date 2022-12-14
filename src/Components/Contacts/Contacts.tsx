import React from 'react';
import styles from './Contacts.module.css'

export const Contacts = () => {
    return <div className={styles.mainBlock}>
        <form action="src/Components/Contacts/Contacts" className={styles.formContainer}>
            <legend><h3>Contacts</h3></legend>
            <div className={styles.inputStyle}>
                <label htmlFor="name">Name</label>
                <input type="text" name="Name" id="name"/>
            </div>
            <div className={styles.inputStyle}>
                <label>Email</label>
                <input type="text" name="Email" id="email"/>
            </div>
            <div className={styles.inputStyle}>
                <textarea placeholder={'type your message'} cols={60} rows={5}></textarea>
                <input type="submit" value="Send Request" className={styles.submit}/>
            </div>
        </form>
    </div>
};
