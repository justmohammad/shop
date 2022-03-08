import React, {Suspense, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Layout from "../Layout/Layout";
import PageShop from "../PageShop/PageShop";
import Page404 from "../Page404/Page404";
import DetailProduct from "../DetailProduct/DetailProduct";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import ThemeContext from "../../Contexts/ThemeContext";
import themeConfig from '../../ThemeConfig/themeConfig';
import useStyles from "./StyleApp";

const App = () => {

    useStyles()
    const [activeTheme, setActiveTheme] = useState('blue');

    return (
        <ThemeContext.Provider value={{
            theme: themeConfig[activeTheme],
            setActiveTheme
        }
        }>
            <Suspense fallback={null}>
                <BrowserRouter>
                    <Switch>
                        <PublicRoute path="/login" component={Login}/>
                        <PublicRoute path="/Signup" component={SignUp}/>
                        <PrivateRoute path={"/"} render={() =>
                            <Layout>
                                <Switch>
                                    <Route exact path={"/"} component={PageShop}/>
                                    <Route exact path={"/detailProduct/:id"} component={DetailProduct}/>
                                    <Route component={Page404}/>
                                </Switch>
                            </Layout>
                        }/>
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </ThemeContext.Provider>
    );
}

const isLogin = () => !!localStorage.getItem('Password');

const PublicRoute = ({component, ...props}) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return <Redirect to={"/"}/>
        else {
            return React.createElement(component, props);
        }
    }}/>
};

const PrivateRoute = ({render, ...props}) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return render(props);
        else return <Redirect to={"/login"}/>
    }}/>
}

export default App;


