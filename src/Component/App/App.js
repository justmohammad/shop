import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "../../Component/Header/Header";
import Blog from "../../Component/Blog/Blog";
import Footer from "../../Component/Footer/Footer";
import ContentShop from "../../Component/ContentShop/ContentShop";

const App = () => {

    return (
        <div className="App">
            <Header/>
            <ContentShop/>
            <Blog/>
            <Footer/>
        </div>
    );
}

export default App;
