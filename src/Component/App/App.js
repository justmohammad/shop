import React, {Suspense} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "../Layout/Layout";
import PageShop from "../PageShop/PageShop";
import Page404 from "../Page404/Page404";
import DetailProduct from "../DetailProduct/DetailProduct";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import './App.css';

const App = () => {

    return (
        <div className="App">
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
                            <Route>
                                <Page404/>
                            </Route>
                        </Layout>
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    )
        ;
}

export default App;
