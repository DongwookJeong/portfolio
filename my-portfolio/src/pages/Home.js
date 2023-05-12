import { Link } from "react-router-dom";
import { me } from "./About";
const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <ul>
        <li>
          <Link to="/abouts/dongwook">about</Link>
          <p>{me.dongwook.description}</p>
        </li>
        <li>
          <Link to="/Contect">contect</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
