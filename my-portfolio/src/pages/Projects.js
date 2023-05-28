//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/project/1">{ProjectData.project1.name}</NavLink>
      </li>
      <li>
        <NavLink to="/project/2">{ProjectData.project2.name}</NavLink>
      </li>
    </ProjectsMain>
  );
};

export default Projects;
