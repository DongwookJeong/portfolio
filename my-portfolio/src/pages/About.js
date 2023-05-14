import Warehouse from "../Warehouse";

const About = () => {
  return (
    <div>
      <h1>about</h1>
      <div>
        <h2>{Warehouse.dongwook.name}</h2>
        <p>{Warehouse.dongwook.detail}</p>
        <ul>
          <li>{Warehouse.dongwook.birth}</li>
          <li>{Warehouse.dongwook.residence}</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
