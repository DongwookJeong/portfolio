import { useParams } from "react-router-dom";
const Project = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>프로젝트 {id}</h2>
      <p></p>
    </div>
  );
};

export default Project;
