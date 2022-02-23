import React, {useEffect, useRef, useState} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import useStyles from "./StyleLogin";

const Login = () => {

    const classes = useStyles()
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const rememberRef = useRef(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorValidateLogin, setErrorValidateLogin] = useState(null);

    useEffect(() => {
        window.onload = () => emailRef.current.focus()
        if (localStorage.getItem('Email') && localStorage.getItem('Password')) {
            emailRef.current.value = localStorage.getItem('Email');
            setEmail(localStorage.getItem('Email'));
            passwordRef.current.value = localStorage.getItem('Password');
            setPassword(localStorage.getItem('Password'));
            rememberRef.current.value = localStorage.getItem('remember');
        }
    }, [])

    const validationForm = () => {

        if (email && password) {
            axios.get('http://localhost:4000/users',).then(response => {
                response.data.map(value => {
                    if (email === value.email && password === value.password) {
                        /// Action Login
                        if (rememberRef.current.checked) {
                            localStorage.setItem('Email', emailRef.current.value);
                            localStorage.setItem('Password', passwordRef.current.value);
                            localStorage.setItem('remember', rememberRef.current.value);
                        } else {
                            localStorage.clear('Email');
                            localStorage.clear('Password');
                            localStorage.clear('remember');
                        }
                        setErrorValidateLogin(null)
                    } else {
                        setErrorValidateLogin('Wrong password or email')
                    }
                })
            }).catch(error => error);
        }
    }

    return (
        <div className={classes.login}>
            <Form>
                {errorValidateLogin && <Alert variant={"danger"} dismissible>Wrong password or email</Alert>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef}
                                  onChange={(event) => setEmail(event.target.value)}
                                  placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef}
                                  onChange={event => setPassword(event.target.value)}
                                  placeholder="Password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" ref={rememberRef}/>
                </Form.Group>
                <Button variant="primary" className={"form-control"} onClick={validationForm} type={"submit"}>
                    Submit
                </Button>
            </Form>
            <p className={classes.account}>Have you registered? <Link to={"/signUp"}>Sign Up</Link></p>
        </div>
    );
};

export default Login;
