import { useParams } from "react-router-dom";

export const me = {
  dongwook: {
    name: "정동욱",
    description: "간략 소개소개",
    detail: "자세한 소개소개",
    github: "https://github.com/DongwookJeong",
    email: "nolhoon211@gmail.com",
    1: "https://github.com/DongwookJeong",
    2: "https://github.com/DongwookJeong/portfolio/commit/cc6a6da839e3d6c3188b4024b8c59c25112dbe21",
    3: "https://github.com/DongwookJeong",
  },
};
export const About = () => {
  const params = useParams();
  const about = me[params.username];

  return (
    <div>
      <h1>about</h1>
      <div>
        <h2>{about.name}</h2>
        <p>{about.detail}</p>
        <ul>
          <li>{about.github}</li>
          <li>{about.email}</li>
        </ul>
      </div>
    </div>
  );
};
