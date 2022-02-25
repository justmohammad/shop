import React, {useCallback, useContext} from 'react';
import {Button, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
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

    const changeLanguageToFarsi = useCallback(() => {
        i18n.changeLanguage('fa')
        localStorage.setItem('lang', 'fa')
    },[])

    const changeLanguageToEnglish = useCallback(() => {
        i18n.changeLanguage('en')
        localStorage.setItem('lang', 'en')
    },[])

    const changeThemeToBlue = useCallback(() => {
        themeValues.setActiveTheme('blue')
        localStorage.setItem('theme', 'blue')
    },[])

    const changeThemeToRed = useCallback(() => {
        themeValues.setActiveTheme('red')
        localStorage.setItem('theme', 'red')
    },[])

    return (
        <Navbar bg="light" expand="lg" className={classes.header} fixed={"top"}>
            <Container fluid>
                <Navbar.Brand href="#">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className={classes.navColorWhit}
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Dropdown>
                        <Dropdown.Toggle className={classes.dropdown} variant="info" id="dropdown-basic">
                            {i18n.language === "fa" ? 'فارسی' : 'English'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => changeLanguageToFarsi()}>{t('Lang Fa')}</Dropdown.Item>
                            <Dropdown.Item onClick={() => changeLanguageToEnglish()}>{t('Lang En')}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle className={classes.dropdown} variant="info" id="dropdown-basic">
                            {localStorage.getItem('theme')}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={changeThemeToBlue}>blue</Dropdown.Item>
                            <Dropdown.Item onClick={changeThemeToRed}>red</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;