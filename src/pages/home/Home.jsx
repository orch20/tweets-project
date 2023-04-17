import React from "react";
import { Link } from "react-router-dom";
import css from "./Home.module.scss";

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.background}></div>
      <h1 className={css.title}>Welcome to the Tweets App</h1>
      <p className={css.text}>Find and share tweets with the world!</p>
      <Link to="/tweets">
        <button className={css.button}>Get Started</button>
      </Link>
    </div>
  );
};

export default HomePage;
