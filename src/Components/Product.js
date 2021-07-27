import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";

const Product = (props) => {
    const [isAdding, setIsAdding] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const { product } = props;

    const addToCart = (event, product) => {
        event.preventDefault();
        let _cart = { ...cart }; // { items: {} }

        if (!_cart.items) {
            _cart.items = {};
        }
        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;
        } else {
            _cart.items[product._id] = 1;
        }
        if (!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000);

        // const cart = {
        //     items: {
        //         '60e1bec80822ea0c64d9337e': 2,
        //         '60e1beee0822ea0c64d93381': 3
        //     },
        //     totalItems: 5
        // }
    };

    // OfferPrice Show and hide
    let offPrice = false;
    if (`${product.offPrice}` > 0) {
        offPrice = true;
    }
    const [active] = useState(offPrice);

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
                                <div
                                    disabled={isAdding}
                                    className={`${
                                        isAdding ? " cart-clicked" : "cart"
                                    } 'cart'`}
                                    onClick={(e) => {
                                        addToCart(e, product);
                                    }}
                                >
                                    <i className="fas fa-cart-plus"></i>
                                    {isAdding ? "Added To Cart" : "Add To Cart"}
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
                                    <span className="mainPrice">
                                        ₹{product.price}/-
                                    </span>

                                    {active ? (
                                        <span className="offPrice">
                                            ₹{product.offPrice}/-
                                        </span>
                                    ) : (
                                        <span className="offPrice"></span>
                                    )}

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
