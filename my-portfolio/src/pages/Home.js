import { Link } from "react-router-dom";
import React from "react";
import proflie from "/Users/jactor/portfolio/portfolio/my-portfolio/src/img/IMG_0748.jpg";
import "/Users/jactor/portfolio/portfolio/my-portfolio/src/pages/Home.scss";
import Warehouse from "../Warehouse";
const Home = () => {
  return (
    <div className="Mother">
      <h1 className="Home">Jactor</h1>
      <div className="Whm">
        <img className="WhmPfc" alt="IMG_0748.jpg" src={proflie} />
        <ul className="WhmUl">
          <li className="WhmList">
            <Link className="WhmLink" to="/about">
              about
            </Link>
            <p className="WhmListP">{Warehouse.dongwook.description}</p>
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
      </div>
    </div>
  );
};

export default Home;
