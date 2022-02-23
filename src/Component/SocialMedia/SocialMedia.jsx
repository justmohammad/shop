import React from 'react';
import {useTranslation} from "react-i18next";
import useStyles from "./styleSocialMedia";

const SocialMedia = () => {

    const classes = useStyles()
    const {t} = useTranslation()
    return (
        <div className={classes.socialMedia}>
            <ul>
                <li><a href={""}>{t('SocialMedia Facebook')}</a></li>
                <li><a href={""}>{t('SocialMedia Twitter')}</a></li>
                <li><a href={""}>{t('SocialMedia Instagram')}</a></li>
                <li><a href={""}>{t('SocialMedia Linkedin')}</a></li>
                <li><a href={""}>{t('SocialMedia Dribble')}</a></li>
            </ul>
        </div>
    );
};

export default SocialMedia;