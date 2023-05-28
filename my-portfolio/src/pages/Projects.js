//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectData from "../localdb/ProjectData";
// ! 태그 스타일링 부분
/*
$main: #fcd201;
$sub: #3359ad;
$base: #8795a8;
*/
const ProjectsMain = styled.ul`
  background: #8795a8;
  height: inherit;
`;

const Projects = () => {
  return (
    <ProjectsMain>
      <li>
        <Link to="/Flower">{ProjectData.project1.name}</Link>
      </li>
      <li>
        <Link to="/Sisyphus">{ProjectData.project2.name}</Link>
      </li>
    </ProjectsMain>
  );
};

export default Projects;
