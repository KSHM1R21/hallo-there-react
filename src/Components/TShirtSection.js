import React, { useState, useEffect } from "react";
import Product from "./Product";

const TShirtSection = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/api/products")
            .then((response) => response.json())
            .then((products) => {
                setProducts(products);
            });
    }, []);

    return (
        <>
            <h3 className="section-heading container">
                Best Deals on: T-Shirt's
            </h3>

            <section id="t-shirt-section" className="container">
                <div id="heroCard">
                    <div className="heroImgBox">
                        <img
                            src="/img/T-Shirt_Hero-Img.jpg"
                            alt="letest-T-Shirt"
                        />

                        <div className="cardOverlay">
                            <h4>BEST SELLING</h4>
                        </div>
                    </div>

                    <div className="textContent">
                        <div className="upperPart">
                            <div className="b-title">Gymshark.</div>
                            <p>
                                Full Sleeve Round Neck T-Shirt,Black Lorem ipsum
                                dolor sit amet. | Gymshark
                            </p>
                        </div>

                        <div className="lowerPart">
                            <h4>
                                <span> ₹3000/- </span> ₹1500/-
                                <span className="b-discount"> (50% OFF) </span>
                            </h4>
                        </div>
                    </div>
                </div>

                <div id="small-cards">
                    {products.map((product) => (
                        <Product key={Product._id} product={product} />
                    ))}
                    <div className="dummyCard"></div>
                    <div className="dummyCard"></div>
                </div>
            </section>
        </>
    );
};

export default TShirtSection;
