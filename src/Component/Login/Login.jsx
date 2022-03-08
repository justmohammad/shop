import React, {useEffect, useState} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import useStyles from "./StyleLogin";

const Login = () => {

    const classes = useStyles()
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorValidateLogin, setErrorValidateLogin] = useState(null);

    const validationForm = () => {
        if (email && password) {
            axios.get('http://localhost:4000/users',).then(response => {
                response.data.map(value => {
                    if (email === value.email && password === value.password) {
                        /// Action Login
                        localStorage.setItem('Email',email);
                        localStorage.setItem('Password',password);
                        localStorage.setItem('theme','blue');
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
            <Form onSubmit={validationForm}>
                {errorValidateLogin && <Alert variant={"danger"} dismissible>Wrong password or email</Alert>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                                  onChange={(event) => setEmail(event.target.value)}
                                  placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  onChange={event => setPassword(event.target.value)}
                                  placeholder="Password"/>
                </Form.Group>
                <Button variant="primary" className={"form-control"} type={"submit"}>
                    Submit
                </Button>
            </Form>
            <p className={classes.account}>Have you registered? <Link to={"/signUp"}>Sign Up</Link></p>
        </div>
    );
};

export default Login;
