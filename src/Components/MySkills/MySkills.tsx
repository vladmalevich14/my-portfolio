import React from 'react';
import {Skill} from "./Skill/Skill";
import styles from './MySkills.module.css'
import {Title} from "../common/Title/Title";
import reactIcon from '../assets/icons/react.svg'
import reduxIcon from '../assets/icons/redux.svg'
import typeScriptIcon from '../assets/icons/typescript.svg'
import javaScriptIcon from '../assets/icons/javascript.svg'
import htmlIcon from '../assets/icons/html.svg'
import cssIcon from '../assets/icons/css.svg'
import apiIcon from '../assets/icons/api.svg'
import muiIcon from '../assets/icons/mui.svg'
import storybookIcon from '../assets/icons/storybook.svg'
import gitIcon from '../assets/icons/git.svg'

export type IconsType = {
    backgroundImage: string
}

export const MySkills = () => {

    const iconReact = {
        backgroundImage: `url(${reactIcon})`
    }
    const iconRedux = {
        backgroundImage: `url(${reduxIcon})`
    }
    const iconTypeScript = {
        backgroundImage: `url(${typeScriptIcon})`
    }
    const iconJavaScript = {
        backgroundImage: `url(${javaScriptIcon})`
    }
    const iconHtml = {
        backgroundImage: `url(${htmlIcon})`
    }
    const iconCss = {
        backgroundImage: `url(${cssIcon})`
    }
    const iconApi = {
        backgroundImage: `url(${apiIcon})`
    }
    const iconMui = {
        backgroundImage: `url(${muiIcon})`
    }
    const iconStorybook = {
        backgroundImage: `url(${storybookIcon})`
    }
    const iconGit = {
        backgroundImage: `url(${gitIcon})`
    }

    return <div className={styles.skillsBlock} >
        <div className={styles.skillsWrapper}>
            <Title title={'My skills'} description={'What I Do'}/>
            <div className={styles.skillContainer}>
                <Skill title={'React'} style={iconReact}/>
                <Skill title={'Redux'} style={iconRedux}/>
                <Skill title={'TypeScript'} style={iconTypeScript}/>
                <Skill title={'JavaScript'} style={iconJavaScript}/>
                <Skill title={'HTML'} style={iconHtml}/>
                <Skill title={'CSS'} style={iconCss}/>
                <Skill title={'REST API'} style={iconApi}/>
                <Skill title={'Material UI'} style={iconMui}/>
                <Skill title={'Storybook'} style={iconStorybook}/>
                <Skill title={'GIT'} style={iconGit}/>
            </div>
        </div>
    </div>
};