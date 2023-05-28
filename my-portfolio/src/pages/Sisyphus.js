import { styled } from "styled-components";
import ProjectData from "../localdb/ProjectData";

const SisyphusMain = styled.div`
  background: #236144;
  height: inherit;
`;
const Sisyphus = () => {
  return (
    <SisyphusMain>
      <div>
        <h2>{ProjectData.project2.name}</h2>
        <p>{ProjectData.project2.description}</p>
        <p>{ProjectData.project2.github}</p>
      </div>
    </SisyphusMain>
  );
};

export default Sisyphus;
