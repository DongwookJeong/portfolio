import Warehouse from "../localdb/Warehouse";
import styled from "styled-components";
/*
$main: #fcd201;
$sub: #3359ad;
$base: #8795a8;
add: #236144
*/

// about page background
const AboutMain = styled.div`
  background: #3359ad;
  text-align: center;
  height: inherit;
`;
// page title
const Head = styled.h1`
  margin: 0;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;
// name
const Name = styled.h2`
  font-size: 3rem;
`;
const Detail = styled.div`
  font-size: 1rem;
`;
const BirthAndResidence = styled.ul`
  margin: 0;
  padding: 0;
  height: 30vh;
  font-size: 2rem;
  list-style: none;
  justify-content: space-evenly;
`;

const Birth = styled.li`
  font-size: 2rem;
`;

const Residence = styled.li`
  font-size: 2rem;
`;

const About = () => {
  return (
    <AboutMain>
      <Head>about</Head>
      <div>
        <Name>{Warehouse.dongwook.name}</Name>
        <Detail>{Warehouse.dongwook.detail}</Detail>
        <BirthAndResidence>
          <Birth>생년월일: {Warehouse.dongwook.birth}</Birth>
          <Residence>거주지: {Warehouse.dongwook.residence}</Residence>
        </BirthAndResidence>
      </div>
    </AboutMain>
  );
};

export default About;
