//import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import ProjectData from "../localdb/ProjectData.json";

const ProjectMain = styled.div`
  background: #236144;
  height: inherit;
`;

const Project = () => {
  //const { id } = useParams();

  return (
    <ProjectMain>
      {ProjectData.data.map((id) => (
        <div>
          <h2>{id.title}</h2>
          <p>{id.description}</p>
        </div>
      ))}
    </ProjectMain>
  );
};
export default Project;
