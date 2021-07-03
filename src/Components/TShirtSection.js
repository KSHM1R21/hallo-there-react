import React, { useState, useEffect } from "react";
import Product from "./Product";

const TShirtSection = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/products")
            .then((response) => response.json())
            .then((products) => {
                setProducts(products);
            });
    }, []);
    // console.warn(data);

    return (
        <>
            <h3 class="section-heading container">Best Deals on: T-Shirt's</h3>

            <section id="t-shirt-section" class="container">
                <div id="heroCard">
                    <div class="heroImgBox">
                        <img
                            src="/img/T-Shirt_Hero-Img.jpg"
                            alt="letest-T-Shirt"
                        />

                        <div class="cardOverlay">
                            <h4>BEST SELLING</h4>
                        </div>
                    </div>

                    <div class="textContent">
                        <div class="upperPart">
                            <div class="b-title">Gymshark.</div>
                            <p>
                                Full Sleeve Round Neck T-Shirt,Black Lorem ipsum
                                dolor sit amet. | Gymshark
                            </p>
                        </div>

                        <div class="lowerPart">
                            <h4>
                                <span> ₹3000/- </span> ₹1500/-
                                <span class="b-discount"> (50% OFF) </span>
                            </h4>
                        </div>
                    </div>
                </div>

                <div id="small-cards">
                    {products.map((product) => (
                        <Product key={Product._id} product={product} />
                    ))}
                    <div class="dummyCard"></div>
                    <div class="dummyCard"></div>
                </div>
            </section>
        </>
    );
};

export default TShirtSection;
