import React from 'react';
import {Container} from "react-bootstrap";
import SocialMedia from "../SocialMedia/SocialMedia";
import './Footer.css';
import {useTranslation} from "react-i18next";

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