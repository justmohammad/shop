import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "../../Component/Header/Header";
import Blog from "../../Component/Blog/Blog";
import Footer from "../../Component/Footer/Footer";
import ContentShop from "../../Component/ContentShop/ContentShop";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Details from "../Details/Details";

const App = () => {

    return (
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
    );
}

export default App;
