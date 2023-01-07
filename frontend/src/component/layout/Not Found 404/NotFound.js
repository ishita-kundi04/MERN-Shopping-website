import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./notFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Gif from "../../../images/dribbble_1.gif";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />
      <Typography>Page Not Found </Typography>
      <img src={Gif} alt="404 Error" />
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
