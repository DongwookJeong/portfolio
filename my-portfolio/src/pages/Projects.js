//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectData from "../localdb/ProjectData.json";
/*
$main: #fcd201;
$sub: #3359ad;
$base: #8795a8;
*/
const ProjectsMain = styled.ul`
  background: #8795a8;
  height: inherit;
`;

const ListStyle = styled.li`
  list-style: none;
`;

const LinkStyle = {
  textDecoration: "none",
};
const Projects = () => {
  return (
    <ProjectsMain>
      {ProjectData.data.map((id) => (
        <ListStyle key={id}>
          <Link style={LinkStyle} to="/project">
            {id.title}
          </Link>
        </ListStyle>
      ))}
    </ProjectsMain>
  );
};

export default Projects;
