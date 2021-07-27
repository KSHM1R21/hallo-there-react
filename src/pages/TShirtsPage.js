import React from "react";
import TShirtSection from "../Components/TShirtSection";
import { useHistory } from "react-router-dom";

const TShirtsPage = () => {
    const history = useHistory();

    return (
        <div className=" TShirtsPage ">
            <h3
                className="back-button container"
                onClick={() => {
                    history.goBack();
                }}
            >
                <i className="ri-arrow-left-s-line"></i> Back
            </h3>
            <TShirtSection />
        </div>
    );
};

export default TShirtsPage;
