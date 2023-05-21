import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeadLayout = () => {
  const navigate = useNavigate();

  const comeBackhome = () => {
    navigate("/");
  };

  const about = () => {
    navigate("/about");
  };

  const contect = () => {
    navigate("/contect");
  };

  const projects = () => {
    navigate("/projects");
  };
  const Header = styled.header`
    background: none;
    display: flex;
  `;

  const HomeButton = styled.button`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: none;
    margin: 1rem;
    border: hidden;
  `;

  const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
  `;

  const OtherContent = styled.button`
    font-size: 1rem;
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
        <OtherContent onClick={about}>about</OtherContent>
        <OtherContent onClick={contect}>contect</OtherContent>
        <OtherContent onClick={projects}>projects</OtherContent>
      </Header>
      <main style={{ height: "90vh" }}>
        <Outlet />
      </main>

      <footer
        style={{
          background: "none",
          height: "8vh",
        }}
      ></footer>
    </div>
  );
};

export default HeadLayout;
