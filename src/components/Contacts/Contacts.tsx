import React from 'react';
import styles from './Contacts.module.scss'
import {Title} from "../common/Title/Title";
import {Slide} from "react-awesome-reveal";
import axios from "axios";
import {useFormik} from "formik";

export type ContactParamsType = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export const Contacts = () => {
    const formik = useFormik({
        validate: (values) => {
            const errors: Partial<ContactParamsType> = {};
            if (!values.email) {
                errors.email = "Email is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }

            if (!values.phone) {
                errors.phone = "Field phone is required";
            } else if (values.phone.length < 7) {
                errors.phone = "Must be 7 numbers or more";
            }

            if (!values.name) errors.name = "Field name is required";
            if (!values.message) errors.message = "Field message is required";

            return errors;
        },
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
        onSubmit: (values) => {
            axios.post('https://back-for-portfolio.vercel.app/sendMessage', {
                name: values.name,
                phone: values.phone,
                email: values.email,
                message: values.message,
            })
                .then((res) => {
                    alert('Message has been sent')
                })
                .catch((err: any)=>{
                    console.log(err)
                })
        },
    });

    return <div className={styles.mainBlock} id='contacts'>
        <Slide direction={'up'} triggerOnce>
            <Title title={'Contact With Me'} description={'Contact'}/>
        </Slide>
        <form action="src/components/common/Contacts/Contacts"
              className={styles.formContainer}
              onSubmit={formik.handleSubmit}
        >
            <div className={styles.inputStyle}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className={styles.formArea} {...formik.getFieldProps("name")}/>
                {formik.touched.name && formik.errors.name && <p className={styles.error}>{formik.errors.name}</p>}
            </div>
            <div className={styles.inputStyle}>
                <label htmlFor="phone">Phone number</label>
                <input type="text" id="phone" {...formik.getFieldProps("phone")}/>
                {formik.touched.phone && formik.errors.phone && <p className={styles.error}>{formik.errors.phone}</p>}
            </div>
            <div className={styles.inputStyle}>
                <label>Email</label>
                <input type="text" id="email" {...formik.getFieldProps("email")}/>
                {formik.touched.email && formik.errors.email && <p className={styles.error}>{formik.errors.email}</p>}
            </div>
            <div className={styles.submitStyle}>
                <label>Your message</label>
                <textarea  {...formik.getFieldProps("message")}></textarea>
                {formik.touched.message && formik.errors.message && <p className={styles.error}>{formik.errors.message}</p>}
                <input type="submit" value="SEND MESSAGE" className={styles.submit}/>
            </div>
        </form>
    </div>
};
