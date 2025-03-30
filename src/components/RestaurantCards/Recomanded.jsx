import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./CSS/recommended.css";

const Recommended = () => {
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    return (
        <div className="recommended-container">
            <h1>Recommended(20)</h1>
            <div className="recommended-card">
                <div className="container-card">
                    <h2>Veggie Supreme</h2>
                    <div className="price-offer">
                        <p className="price">₹ 199</p>
                        <p className="offer">50% off</p>
                    </div>
                    <h4 className="rating">
                        <FaStar color="green" /> 3.8
                    </h4>
                    <p className={`description ${showFullContent ? "expanded" : "collapsed"}`}>
                        Serves 1 | A supreme combination of black olives, green capsicum, mushroom,
                        onion, spicy red paprika & juicy sweet corn with flavourful pan sauce and
                        100% mozzarella cheese. (PAN Per/Med-254 Kcal/100g | TnC-258 Kcal/100g |
                        Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals
                        containing Gluten (Wheat), Soya and Milk & Milk Products.
                    </p>
                    <button className="toggle-button" onClick={toggleContent}>
                        {showFullContent ? "Show Less" : "Show More"}
                    </button>
                </div>
                <div>
                    <img
                        className="image"
                        src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU="
                        alt="Veggie Supreme"
                    />
                </div>
            </div>
        </div>
    );
};

export default Recommended;