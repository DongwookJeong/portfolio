import Warehouse from "../Warehouse";
import styled from "styled-components";

// contect page
const ContectMain = styled.div`
  background: #00000;
  text-align: center;
  height: inherit;
`;
// title
const Head = styled.h1`
  margin: 0;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;
const Contect = () => {
  return (
    <ContectMain>
      <Head>contect</Head>
      <p>{Warehouse.dongwook.github}</p>
      <p>{Warehouse.dongwook.email}</p>
    </ContectMain>
  );
};

export default Contect;
