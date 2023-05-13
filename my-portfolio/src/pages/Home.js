import { Link } from "react-router-dom";
import { me } from "./About";
import React from "react";
import Mountain from "/Users/jactor/portfolio/portfolio/my-portfolio/src/img/mountain_apple.png";
import "/Users/jactor/portfolio/portfolio/my-portfolio/src/pages/Home.scss";
const Home = () => {
  return (
    <div>
      <h1 className="Home">home</h1>
      <di className="Whm">
        <img className="WhmPfc" alt="mountain_apple.png" src={Mountain} />
        <ul className="WhmUl">
          <li className="WhmList">
            <Link className="WhmLink" to="/abouts/dongwook">
              about
            </Link>
            <p className="WhmListP">{me.dongwook.description}</p>
          </li>
          <li className="WhmList">
            <Link className="WhmLink" to="/Contect">
              contect
            </Link>
            <p className="WhmListP">깃허브 이미지?</p>
          </li>
          <li className="WhmList">
            <Link className="WhmLink" to="/Projects">
              projects
            </Link>
            <p className="WhmListP">프로젝트이미지</p>
          </li>
        </ul>
      </di>
    </div>
  );
};

export default Home;
