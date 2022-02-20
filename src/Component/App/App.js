import React,{Suspense} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
<<<<<<< HEAD
import Header from "../../Component/Header/Header";
import Blog from "../../Component/Blog/Blog";
import Footer from "../../Component/Footer/Footer";
import ContentShop from "../../Component/ContentShop/ContentShop";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Details from "../Details/Details";
=======
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "../Layout/Layout";
import PageShop from "../PageShop/PageShop";
import Page404 from "../Page404/Page404";
import DetailProduct from "../DetailProduct/DetailProduct";
>>>>>>> front-end

const App = () => {

    return (
<<<<<<< HEAD
        <BrowserRouter>
            <Switch>
                <Route path={"/details"}>
                    <Details/>
                </Route>
                <Route path={"/"} exact>
                    <div className="App">
                        <Header/>
                        <ContentShop/>
                        <Blog/>
                        <Footer/>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
=======

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
>>>>>>> front-end
    );
}

export default App;
