import { Link } from "react-router-dom";
import styled from "styled-components";

/*
$main: #fcd201;
$sub: #3359ad;
$base: #8795a8;
*/
const ProjectMain = styled.ul`
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
    <ProjectMain>
      <ListStyle>
        <Link style={LinkStyle} to="/projects/1">
          PROJECT 1
        </Link>
      </ListStyle>
      <ListStyle>
        <Link style={LinkStyle} to="/projects/2">
          PROJECT 2
        </Link>
      </ListStyle>
      <ListStyle>
        <Link style={LinkStyle} to="/projects/3">
          PROJECT 3
        </Link>
      </ListStyle>
    </ProjectMain>
  );
};

export default Projects;
