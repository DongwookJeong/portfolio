import { Link } from "react-router-dom";
import { me } from "./About";
import React from "react";
import Mountain from "/Users/jactor/portfolio/portfolio/my-portfolio/src/img/mountain_apple.png";

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <div>
        <img alt="mountain_apple.png" src={Mountain} />
        <ul>
          <li>
            <Link to="/abouts/dongwook">about</Link>
            <p>{me.dongwook.description}</p>
          </li>
          <li>
            <Link to="/Contect">contect</Link>
          </li>
          <li>
            <Link to="/Projects">projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
