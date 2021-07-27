import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    const history = useHistory();

    // console.log(params);

    // OfferPrice Show and hide

    // const [active, setActive] = useState(false);

    // if (`${product.offPrice}` > 0) {
    //     setActive(true);
    // }

    useEffect(() => {
        fetch(`/api/products/${params._id}`)
            .then((res) => res.json())
            .then((product) => {
                setProduct(product);
                // console.log(product);
            });
    }, []);

    return (
        <div className="ezpz">
            <div className="container">
                {" "}
                <h3
                    className="back-button"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    <i className="ri-arrow-left-s-line"></i> Back
                </h3>
            </div>
            <section className="container SingleProduct ">
                <div className="img-box">
                    <div className="img-wraper">
                        <img src={product.image} alt="" />
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
                    <div className="brand-name">{product.brand}</div>

                    <div className="product-name">{product.name}</div>

                    <div className="price">
                        <span className="main-price">₹{product.price}-</span>
                        {/* {active ? (
                            <span className="off-price">
                                ₹{product.offPrice}/-
                            </span>
                        ) : (
                            <span className="off-price"></span>
                        )} */}
                        <span className="off-price">₹{product.offPrice}/-</span>

                        <span className="discount">{product.discount}</span>
                    </div>

                    <div className="taxation">inclusive of all taxes</div>

                    <div className="size-box">
                        <h4 className="size-heading">
                            SELECT SIZE
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
        </div>
    );
};

export default SingleProduct;
