import { styled } from "styled-components";
import ProjectData from "../localdb/ProjectData";

const FlowerMain = styled.div`
  background: #236144;
  height: inherit;
`;
const Flower = () => {
  return (
    <FlowerMain>
      <div>
        <h2>{ProjectData.project1.name}</h2>
        <p>{ProjectData.project1.description}</p>
        <p>프로젝트 github: {ProjectData.project1.github}</p>
        <p>프로젝트 과정: {ProjectData.project1.notion}</p>
      </div>
    </FlowerMain>
  );
};

export default Flower;
