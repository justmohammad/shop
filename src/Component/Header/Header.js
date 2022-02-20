import React from 'react';
import {Container, Dropdown} from "react-bootstrap";
import './Header.css'
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Header = () => {

    const {t , i18n} = useTranslation()
    const {pathname} = useLocation();

    let title = '';

    if (pathname === '/') title = t('Title Header 1');
    if (pathname.includes('detailProduct')) title = t('Title Header 2');

    return (
        <header className={"header"}>
            <Container>
                <div>
                    <h6>{title}</h6>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                        {i18n.language === "fa" ? 'فارسی' : 'English'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => i18n.changeLanguage('fa')}>{t('Lang Fa')}</Dropdown.Item>
                        <Dropdown.Item onClick={() => i18n.changeLanguage('en')}>{t('Lang En')}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </header>
    );
};

export default Header;