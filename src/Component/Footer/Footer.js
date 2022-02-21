import React from 'react';
import {Container} from "react-bootstrap";
import SocialMedia from "../SocialMedia/SocialMedia";
import {useTranslation} from "react-i18next";
import './Footer.css';

const Footer = () => {

    const {t} = useTranslation()
    return (
        <footer className={"footer"}>
            <Container>
                <SocialMedia/>
                <p>{t('Footer Title')}</p>
            </Container>
        </footer>
    );
};

export default Footer;