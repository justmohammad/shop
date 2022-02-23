import React, {useContext} from 'react';
import {Container, Dropdown} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import ThemeContext from "../../Contexts/ThemeContext";
import useStyles from "./StyleHeader";

const Header = () => {

    const themeValues = useContext(ThemeContext)
    const classes = useStyles(themeValues.theme)
    const {t, i18n} = useTranslation();
    const {pathname} = useLocation();

    let title = '';

    if (pathname === '/') title = t('Title Header 1');
    if (pathname.includes('detailProduct')) title = t('Title Header 2');

    const changeLanguageToFarsi = () => {
        i18n.changeLanguage('fa')
        localStorage.setItem('lang', 'fa')
    }
    const changeLanguageToEnglish = () => {
        i18n.changeLanguage('en')
        localStorage.setItem('lang', 'en')
    }

    return (
        <header className={classes.header}>
            <Container>
                <div>
                    <h6>{title}</h6>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                        {i18n.language === "fa" ? 'فارسی' : 'English'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => changeLanguageToFarsi()}>{t('Lang Fa')}</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeLanguageToEnglish()}>{t('Lang En')}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                        blue
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => themeValues.setActiveTheme('blue')}>blue</Dropdown.Item>
                        <Dropdown.Item onClick={() => themeValues.setActiveTheme('red')}>red</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </header>
    );
};

export default Header;