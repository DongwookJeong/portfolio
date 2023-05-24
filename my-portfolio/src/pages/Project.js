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
      {ProjectData.data.map((p) => (
        <div key={p.id}>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
        </div>
      ))}
    </ProjectMain>
  );
};
export default Project;
