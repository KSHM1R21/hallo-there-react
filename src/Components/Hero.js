// import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero">
            <div id="overlay">
                <img src="/img/Hero-img.png" alt="Hero-img" />
                <div id="hero-text" className="container">
                    <h1>
                        ARE YOU <span>FAST</span> ENOUGH ?
                    </h1>
                    <h2>
                        50% <span>OFF!</span>
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Hero;
