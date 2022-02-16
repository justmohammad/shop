import React from 'react';
import {Container} from "react-bootstrap";
import SocialMedia from "../SocialMedia/SocialMedia";
import './Footer.css';

const Footer = () => {
    return (
        <footer className={"footer"}>
            <Container>
                <SocialMedia/>
                <p>Copyright © 2020  · WordPress · Log in</p>
            </Container>
        </footer>
    );
};

export default Footer;