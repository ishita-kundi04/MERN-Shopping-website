import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
    // size: window.innerWidth < 1200 ? "small" : "medium",
    size: "small",
  };

  return (
    <>
      <Link className="productCard" to={`/product/${product._id}`}>
        <div className="imageInCard">
          <img src={product.images[0].url} alt={product.name} />
        </div>
        {/* <p>{product.name}</p> */}
        <div className="reviewAndStars">
          <div className="productName">{product.name}</div>

          <div>
            <Rating {...options} />

            <span className="productCardSpan"> ({product.numOfReviews})</span>
          </div>

          <div className="productPrice">
            {" "}
            <span className="rupeeSymbol">₹</span> {`${product.price}`}
          </div>
        </div>
        {/* <span>{`₹${product.price}`}</span> */}
      </Link>
    </>
  );
};

export default ProductCard;
