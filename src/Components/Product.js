import { Link } from "react-router-dom";

const Product = (props) => {
    console.log(props);
    const { product } = props;

    return (
        <>
            <Link to={`/T-Shirt-Section/${product._id}`}>
                <div className="card">
                    <div className="imgBox">
                        <img src={product.img} alt="" />

                        <div className="s-card-overlay">
                            <div className="top">
                                <div className="left">
                                    <span className="tag">
                                        <h5> {product.tag} </h5>
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
                                    <span className="offPrice">
                                        ₹{product.offPrice}/-
                                    </span>
                                    <span className="mainPrice">
                                        ₹{product.price}/-
                                    </span>
                                    <span className="discount">
                                        {" "}
                                        (50% OFF){" "}
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
