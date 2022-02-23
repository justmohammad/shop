import React from 'react';
import {Container} from "react-bootstrap";
import SocialMedia from "../SocialMedia/SocialMedia";
import {useTranslation} from "react-i18next";
import useStyles from "./StyleFooter";

const Footer = () => {

    const classes = useStyles()
    const {t} = useTranslation()

    return (
        <footer className={classes.footer}>
            <Container>
                <SocialMedia/>
                <p>{t('Footer Title')}</p>
            </Container>
        </footer>
    );
};

export default Footer;