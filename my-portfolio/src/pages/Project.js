//import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import ProjectData from "../localdb/ProjectData.json";

const ProjectMain = styled.div`
  background: #236144;
  height: inherit;
`;
const Project = ({ id }) => {
  const pick = ProjectData.filter((item) => {
    if (id === item.id) {
    }
    return item;
  }).map((item) => {
    return (
      <ProjectMain key={item.id}>
        <h2>{item.id}</h2>
        <p></p>
      </ProjectMain>
    );
  });
  return <div>{pick}</div>;
};
export default Project;
