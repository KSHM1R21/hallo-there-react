import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    console.log(params);

    // useEffect(() => {
    //     fetch(`/products/${params._id}`)
    //         .then((res) => res.json())
    //         .then((product) => {
    //             setProduct(product);
    //             console.log(product);
    //         });
    // }, []);

    return (
        <>
            <h3 className="section-heading container"></h3>
            <section className="container SingleProduct ">
                <div className="img-box">
                    <div className="img-wraper">
                        <img src="/img/t-shirt-1.jpg" alt="" />
                    </div>
                    <div className="img-wraper">
                        <img src="/img/single-page-img-5.jpg" alt="" />
                    </div>
                    <div className="img-wraper">
                        <img src="/img/single-page-img-3.jpg" alt="" />
                    </div>
                    <div className="img-wraper">
                        <img src="/img/single-page-img-4.jpg" alt="" />
                    </div>
                    <div className="img-wraper">
                        <img src="/img/single-page-img-2.jpg" alt="" />
                    </div>
                </div>

                <div className="product-data">
                    <div className="brand-name">Gymshark.</div>

                    <div className="product-name">
                        Round Neck T-Shirt,Black | Gymshark.
                    </div>

                    <div className="price">
                        <span className="main-price">₹1500/-</span>
                        <span className="off-price">₹3000/-</span>
                        <span className="discount">(65% OFF)</span>
                    </div>

                    <div className="taxation">inclusive of all taxes</div>

                    <div className="size-box">
                        <h4 className="size-heading">
                            SELECT SIZE{" "}
                            <i className="ri-arrow-right-s-line"></i>
                        </h4>

                        <div className="sizes">
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                            <span>XXL</span>
                        </div>
                    </div>

                    <div className="menu-buttons">
                        <button>
                            <i className="fas fa-cart-plus"></i> ADD TO CART
                        </button>
                        <button className="whishlist">
                            <i className="ri-heart-line"></i>WISHLIST
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProduct;
