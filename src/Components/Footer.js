import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section id="footerWraper">
            <div id="footer" className="container">
                <div id="links">
                    <div className="link-box">
                        <h4>About Us</h4>
                        <Link to="#">Upcoming Products</Link>
                        <Link to="#">Careers</Link>
                        <Link to="#">Transparency Report</Link>
                    </div>

                    <div className="link-box">
                        <h4>HELP</h4>
                        <Link to="#">FAQ</Link>
                        <Link to="#">Delivery Information</Link>
                        <Link to="#">Returns Policy</Link>
                        <Link to="#">Make A Return</Link>
                        <Link to="#">Orders</Link>
                    </div>

                    <div className="link-box">
                        <h4>MY ACCOUNT</h4>
                        <Link to="/">Login</Link>
                        <Link href="#">Register</Link>
                    </div>
                </div>

                <div id="logo">
                    <h1>OXIGEN</h1>
                    <h5>STORE</h5>
                </div>
            </div>
        </section>
    );
};

export default Footer;
