import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriprionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Cambiar esto a spanish compelling product descriptions is crucial for attracting and
          converting customers in the e-commerce space. Here's a guide to help
          you create effective product descriptions:
        </p>
        <p>
          Focus on Benefits: Clearly communicate how the product solves a
          problem or fulfills a need. Emphasize the benefits rather than just
          listing features
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
