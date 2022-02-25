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
import {render} from "react-dom";

const App = () => {

    const isLogin = () => !!localStorage.getItem('Password');

    useStyles()
    const [activeTheme, setActiveTheme] = useState(localStorage.getItem('theme'));

    return (
        <ThemeContext.Provider value={{
            theme: themeConfig[activeTheme],
            setActiveTheme
        }
        }>
            <Suspense fallback={null}>
                <BrowserRouter>
                    <Route exact path={"/login"}>
                        <Login/>
                    </Route>
                    <Route path="/">
                        {!isLogin() ? <Redirect to={"/login"}/> : <Route render={() => {
                            return <Switch>
                                <Layout>
                                    <Route path={'/detailProduct/:id'}>
                                        <DetailProduct/>
                                    </Route>
                                    <Route path={'/'} exact>
                                        <PageShop/>
                                    </Route>
                                </Layout>
                            </Switch>
                        }}/>}
                    </Route>
                </BrowserRouter>
            </Suspense>
        </ThemeContext.Provider>
    );
}

export default App;


