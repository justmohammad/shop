import React from 'react';
import './SocialMedia.css'
import {useTranslation} from "react-i18next";

const SocialMedia = () => {

    const {t} = useTranslation()
    return (
        <div className="social-media">
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