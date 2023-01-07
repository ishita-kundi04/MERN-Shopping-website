import React, { useEffect } from "react";
import "./Home.css";
import BannerPhoto from "../../banner photos/Always IN style center.png";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

import { getProducts } from "../../Actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors } from "../../Actions/productActions";

const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const productDetails = useSelector((state) => state.products);
  // console.log(productDetails);
  const { loading, error, products, productsCount } = productDetails;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProducts());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Shoppy" />
          <div className="banner">
            <img src={BannerPhoto} />
          </div>

          <div className="homeHeading">Featured Products</div>
          <div className="chooseHeading">Choose As You Want</div>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
