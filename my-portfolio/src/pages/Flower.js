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
        <p>{ProjectData.project1.github}</p>
      </div>
    </FlowerMain>
  );
};

export default Flower;
