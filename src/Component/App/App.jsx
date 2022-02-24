import React, {Suspense, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
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

    const [activeTheme, setActiveTheme] = useState(localStorage.getItem('theme'));

    return (
        <ThemeContext.Provider value={{
            theme: themeConfig[activeTheme],
            setActiveTheme
        }
        }>
            <Suspense fallback={null}>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/login'}>
                            <Login/>
                        </Route>
                        <Route path={'/signUp'}>
                            <SignUp/>
                        </Route>
                        <Layout>
                            <Route path={'/detailProduct/:id'}>
                                <DetailProduct/>
                            </Route>
                            <Route path={'/'} exact>
                                <PageShop/>
                            </Route>
                            {/*<Route>
                                <Page404/>
                            </Route>*/}
                        </Layout>
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </ThemeContext.Provider>
    );
}

export default App;
