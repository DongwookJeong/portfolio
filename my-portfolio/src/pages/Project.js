//import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import ProjectData from "../localdb/ProjectData.json";

const ProjectMain = styled.div`
  background: #236144;
  height: inherit;
`;
const Project = ({ id }) => {
  const pick = ProjectData.data
    .filter((item) => {
      if (id === item.id) {
      }
      return item;
    })
    .map((item) => {
      return (
        <ProjectMain key={item}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </ProjectMain>
      );
    });
  return <div>{pick}</div>;
};
export default Project;
