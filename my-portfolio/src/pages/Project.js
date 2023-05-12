import { useParams } from "react-router-dom";
import { me } from "./About";

const Project = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>프로젝트 {id}</h2>
      <p>{me.dongwook.pj2}</p>
    </div>
  );
};

export default Project;
