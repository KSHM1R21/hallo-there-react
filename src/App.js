import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TShirtSection from "./Components/TShirtSection";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />

                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route
                        path="/T-Shirt-Section"
                        component={TShirtSection}
                        exact
                    ></Route>

                    <Route
                        path="/T-Shirt-Section/:_id"
                        component={SingleProduct}
                    ></Route>

                    <Route path="/about" component={About}></Route>
                </Switch>

                <Footer />
            </Router>
        </>
    );
};

export default App;
