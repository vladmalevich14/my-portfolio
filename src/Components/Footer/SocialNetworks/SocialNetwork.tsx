import React from 'react';
import styles from './SocialNetworks.module.css'
import {IconType} from "../Footer";

type IconsPropsType = {
    style: IconType
}

const SocialNetwork = (props: IconsPropsType) => {
    return (
           <li><a href='#' className={styles.iconLink}><div style={props.style}></div></a></li>
    );
};

export default SocialNetwork;