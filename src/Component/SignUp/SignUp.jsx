import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import useStyles from "./StyleSignUp";

const SignUp = () => {

    const classes = useStyles();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorValidateEmail, setErrorValidateEmail] = useState(null);
    const [errorValidatePassword, setErrorValidatePassword] = useState(null);

    useEffect(() => {
        validateEmail()
        validatePassword()
    }, [email, password])

    const validateEmail = () => {
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email) {
            if (!email.match(emailPattern)) {
                setErrorValidateEmail('Email is not valid')
            } else {
                setErrorValidateEmail(null)
            }
        }
    }

    const validatePassword = () => {
        if (password) {
            if (!password.match(/[a-z]/g)) {
                setErrorValidatePassword('A lowercase letter');               // Validate lowercase letters
            } else if (!password.match(/[A-Z]/g)) {
                setErrorValidatePassword('A capital (uppercase) letter');     // Validate capital letters
            } else if (!password.match(/[0-9]/g)) {
                setErrorValidatePassword('A number');                         // Validate numbers
            } else if (password.length < 8) {
                setErrorValidatePassword('Minimum 8 characters');             // Validate length
            } else {
                setErrorValidatePassword(null)
            }
        }
    }

    const validationForm = () => {
        password ? validateEmail() : setErrorValidateEmail('Email is empty');
        email ? validatePassword() : setErrorValidatePassword('Password is empty');
        if (!errorValidateEmail && !errorValidatePassword) {
            axios.post('http://localhost:4000/users', {
                email: email,
                password: password
            }).then(response => response).catch(error => error)

                localStorage.setItem('Email', email);
                localStorage.setItem('Password', password);
                localStorage.setItem('theme', 'blue');
        }
    }

    return (
        <div className={classes.signUp}>
            <Form onSubmit={validationForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" className={errorValidateEmail && "is-invalid"}
                                  onChange={(event) => setEmail(event.target.value)}
                                  placeholder="Enter email"/>
                    {errorValidateEmail && <p className={"error"}>{errorValidateEmail}</p>}
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className={errorValidatePassword && "is-invalid"}
                                  onChange={event => setPassword(event.target.value)}
                                  placeholder="Password"/>
                    {errorValidatePassword && <p className={"error"}>{errorValidatePassword}</p>}
                </Form.Group>
                <Button className={"form-control"} variant="primary" type={"submit"} >
                    Submit
                </Button>
            </Form>
            <p className={classes.account}>Do you have an account? <Link to={"/login"}>Login</Link></p>
        </div>
    );
};

export default SignUp;
