import React,{Suspense} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "../Layout/Layout";
import PageShop from "../PageShop/PageShop";
import Page404 from "../Page404/Page404";
import DetailProduct from "../DetailProduct/DetailProduct";

const App = () => {

    return (

        <div className="App">
            <Suspense fallback={null}>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route path={'/detailProduct/:id'}>
                                <DetailProduct/>
                            </Route>
                            <Route path={'/'} exact>
                                <PageShop/>
                            </Route>
                            <Route>
                                <Page404/>
                            </Route>
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
