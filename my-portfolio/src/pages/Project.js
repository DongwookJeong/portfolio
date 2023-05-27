//import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import ProjectData from "../localdb/ProjectData.json";
const ProjectMain = styled.div`
  background: #236144;
  height: inherit;
`;
const Project = () => {
  return (
    <ProjectMain key={ProjectData.data.id}>
      {ProjectData.data.map((data) => (
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      ))}
    </ProjectMain>
  );
};

export default Project;
