import { Link } from "react-router-dom";
import { useState } from "react";

const Product = (props) => {
    // console.log(props);
    const { product } = props;
    let offPrice = false;
    if (`${product.offPrice}` > 0) {
        offPrice = true;
    }
    const [active, setActive] = useState(offPrice);

    return (
        <>
            <Link to={`/T-Shirt-Section/${product._id}`}>
                <div className="card">
                    <div className="imgBox">
                        <img src={product.image} alt="" />

                        <div className="s-card-overlay">
                            <div className="top">
                                <div className="left">
                                    <span className="tag">
                                        <h5
                                            className={
                                                ("old", `${product.tag}`)
                                            }
                                        >
                                            {product.tag}
                                        </h5>
                                    </span>
                                </div>

                                <div className="fav">
                                    <i className="ri-heart-fill"></i>
                                </div>
                            </div>

                            <div className="bottom">
                                <div className="cart">
                                    <i className="fas fa-cart-plus"></i>
                                    Add To Cart
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-text-content">
                        <div className="upperContent">
                            <div className="brand">{product.brand}</div>
                            <p>{product.name}</p>
                        </div>

                        <div className="lower-content">
                            <div className="price">
                                <h4>
                                    {active ? (
                                        <span className="offPrice">
                                            ₹{product.offPrice}/-
                                        </span>
                                    ) : (
                                        <span className="offPrice"></span>
                                    )}
                                    <span className="mainPrice">
                                        ₹{product.price}/-
                                    </span>
                                    <span className="discount">
                                        {product.discount}
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Product;
