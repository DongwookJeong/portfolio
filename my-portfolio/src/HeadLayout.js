import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

// 각 페이지에서 고정적으로 들어가는 요소
const HeadLayout = () => {
  const navigate = useNavigate();

  const comeBackhome = () => {
    navigate("/"); // 홈으로
  };

  const about = () => {
    navigate("/about"); // about 페이지로
  };

  const contect = () => {
    navigate("/contect"); // contect 페이지로
  };

  const projects = () => {
    navigate("/projects"); // protects 페이지로
  };

  const Header = styled.header`
    // header
    width: 60vw;
    background: none;
    display: flex;
    align-items: center;
  `;

  const HomeButton = styled.button`
    // 홈 버튼
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: none;
    margin: 1rem;
    border: hidden;
  `;

  const Circle = styled.div`
    // 홈 버튼 내 작은 동그라미
    width: 10px;
    height: 10px;
    border-radius: 5px;
  `;

  const Menu = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 300px;
  `;
  const OtherContent = styled.button`
    // 다른 페이지, 기본
    background: ${(props) => props.color || "none"};
    font-size: 1rem;
    border: hidden;
    height: 3vh;
    border-radius: 15px;
    // 마우스 올라갈땐 노반색
    &:hover {
      background: #fcd201;
    }
  `;

  const Footer = styled.footer`
    background: none;
    height: 8vh;
  `;
  return (
    <div>
      <Header>
        <HomeButton onClick={comeBackhome}>
          <Circle
            style={{
              background: "#fcd201",
              marginBottom: "0.6rem",
            }}
          ></Circle>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Circle
              style={{
                background: "#8795A8",
                marginRight: "1rem",
              }}
            ></Circle>
            <Circle
              style={{
                background: "#236144",
                marginLeft: "1rem",
              }}
            ></Circle>
          </div>
          <Circle
            style={{
              background: "#3359AD",
              marginTop: "0.6rem",
            }}
          ></Circle>
        </HomeButton>
        <Menu>
          <OtherContent onClick={about}>about</OtherContent>
          <OtherContent onClick={contect}>contect</OtherContent>
          <OtherContent onClick={projects}>projects</OtherContent>
        </Menu>
      </Header>
      <main style={{ height: "90vh" }}>
        <Outlet />
      </main>

      <Footer></Footer>
    </div>
  );
};

export default HeadLayout;
