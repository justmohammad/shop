import React from 'react';
import {Container} from "react-bootstrap";
import './Header.css'

const Header = () => {
    return (
        <header className={"header"}>
            <Container>
                <div>
                    <h6>Check out my fresh new course on building and growing an online audience</h6>
                </div>
            </Container>
        </header>
    );
};

export default Header;