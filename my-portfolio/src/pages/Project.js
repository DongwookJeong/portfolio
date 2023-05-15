import { useParams } from "react-router-dom";
import { styled } from "styled-components";
const ProjectMain = styled.div`
  background: #236144;
  height: inherit;
`;
const Project = () => {
  const { id } = useParams();

  return (
    <ProjectMain>
      <h2>PROJECT {id}</h2>
      <p>설명</p>
    </ProjectMain>
  );
};

export default Project;
