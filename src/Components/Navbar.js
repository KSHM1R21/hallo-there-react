// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);
    return (
        <>
            <nav>
                <div className="container nav">
                    <div className="logo">
                        <Link to="/">OXIGEN</Link>
                    </div>

                    <div className="hamburger">
                        {active ? (
                            <i
                                className="ri-close-line close"
                                onClick={() => setActive(!active)}
                            ></i>
                        ) : (
                            <i
                                className="ri-menu-2-fill hamburger"
                                onClick={() => setActive(!active)}
                            ></i>
                        )}
                    </div>
                    <ul
                        id="menulist"
                        className={
                            active ? "nav-list active" : "nav-list unactive"
                        }
                    >
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/">
                                PRODUCT'S{" "}
                                <i className="fas fa-chevron-down"></i>
                            </Link>
                            <ul className="dropdown-list">
                                <li>
                                    <Link to="/About">New Arrival's</Link>
                                </li>
                                <li>
                                    <Link className="links" to="#letest-tshirt">
                                        Letest-T-Shirt's
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="links"
                                        to="#t-shirt-section"
                                    >
                                        T-Shirt's
                                    </Link>
                                </li>
                                <li>
                                    <Link className="links" to="#">
                                        Shoe's
                                    </Link>
                                </li>
                                <li>
                                    <Link className="links" to="#">
                                        Pant's
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/About">SERVICES</Link>
                        </li>
                        <li>
                            <Link to="#" id="cart">
                                <i className="fas fa-shopping-cart"> </i>
                                {/* {cart} */} 0
                            </Link>
                        </li>

                        <li>
                            <Link to="/Login" className="button">
                                LOING
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
