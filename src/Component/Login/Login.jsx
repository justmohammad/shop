import React, {useState} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import useStyles from "./StyleLogin";
import {getUserApi} from "../../api/apiUser";

const Login = () => {

    const classes = useStyles();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorValidateLogin, setErrorValidateLogin] = useState(null);

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    const validationForm = () => {
        if (email && password) {
            getUserApi((isOk,data) => {
                if (isOk) {
                    data.map(value => {
                        if (email === value.email && password === value.password) {
                            localStorage.setItem('Email',email);
                            localStorage.setItem('Password',password);
                            localStorage.setItem('theme','blue');
                            setIsLoggedIn(true);
                            window.location.reload();
                            setErrorValidateLogin(null);
                        } else {
                            setErrorValidateLogin('Wrong password or email')
                        }
                    })
                }
            })
        }
    }

    return (
        <div className={classes.login}>
            <Form>
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
                <Button variant="primary" className={"form-control"} onClick={validationForm}>
                    Submit
                </Button>
            </Form>
            <p className={classes.account}>Have you registered? <Link to={"/signUp"}>Sign Up</Link></p>
        </div>
    );
};

export default Login;
