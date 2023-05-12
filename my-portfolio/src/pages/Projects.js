import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <ul>
      <li>
        <Link to="/projects/1">프로젝트 1</Link>
      </li>
      <li>
        <Link to="/projects/2">프로젝트 2</Link>
      </li>
      <li>
        <Link to="/projects/3">프로젝트 3</Link>
      </li>
    </ul>
  );
};

export default Projects;
