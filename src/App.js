import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TShirtSection from "./Components/TShirtSection";
import SingleProduct from "./pages/SingleProduct";
import TShirtsPage from "./pages/TShirtsPage";
import Cart from "./pages/cart";
import { CartContext } from "./CartContext";
import { useEffect, useState } from "react";

const App = () => {
    const [cart, setCart] = useState({});
    // Fetch cart From Local Storage

    useEffect(() => {
        const cart = window.localStorage.getItem("cart");
        setCart(JSON.parse(cart));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart, setCart }}>
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
                        <Route path="/Cart" component={Cart}></Route>

                        <Route
                            path="/TShirtsPage"
                            component={TShirtsPage}
                        ></Route>
                    </Switch>
                </CartContext.Provider>
                <Footer />
            </Router>
        </>
    );
};

export default App;
