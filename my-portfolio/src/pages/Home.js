import { Link } from "react-router-dom";
import React from "react";
import proflie from "/Users/jactor/portfolio/portfolio/my-portfolio/src/img/IMG_0748.jpg";
import "/Users/jactor/portfolio/portfolio/my-portfolio/src/pages/Home.scss";
import phone from "/Users/jactor/portfolio/portfolio/my-portfolio/src/img/telephone_icon.png";
import github from "/Users/jactor/portfolio/portfolio/my-portfolio/src/img/github_icon.png";
import mail from "/Users/jactor/portfolio/portfolio/my-portfolio/src/img/mail_icon.png";

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
            <p className="WhmListP">
              다재다능한 프론트엔드 개발자 정동욱입니다.
            </p>
          </li>
          <li className="WhmList">
            <Link className="WhmLink" to="/Contect">
              contect
            </Link>
            <p className="WhmListP">
              <img
                className="WhmListPDiv"
                alt="github_icon.png"
                src={github}
              ></img>
              <img
                className="WhmListPDiv"
                alt="telephone_icon.png"
                src={phone}
              ></img>
              <img className="WhmListPDiv" alt="mail_icon.png" src={mail}></img>
            </p>
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
