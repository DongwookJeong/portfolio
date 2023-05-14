import { Outlet, useNavigate } from "react-router-dom";
const HeadLayout = () => {
  const navigate = useNavigate();

  const comeBackhome = () => {
    navigate("/");
  };

  const sameStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
  };

  return (
    <div>
      <header
        style={{
          background: "linear-gradient(#3359AD,#fcd201 90%)",
          display: "flex",
        }}
      >
        <button
          onClick={comeBackhome}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            background: "none",
            border: "hidden",
            margin: "1rem",
          }}
        >
          <div
            style={{
              background: "#fcd201",
              ...sameStyle,
              marginBottom: "0.6rem",
            }}
          ></div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                background: "#8795A8",
                ...sameStyle,
                marginRight: "1rem",
              }}
            ></div>
            <div
              style={{
                background: "#8795A8",
                ...sameStyle,
                marginLeft: "1rem",
              }}
            ></div>
          </div>
          <div
            style={{
              background: "#3359AD",
              ...sameStyle,
              marginTop: "0.6rem",
            }}
          ></div>
        </button>
      </header>
      <main style={{ height: "90vh" }}>
        <Outlet />
      </main>

      <footer
        style={{
          background: "linear-gradient(#fcd201 , #8795A8 50%)",
          height: "8vh",
        }}
      ></footer>
    </div>
  );
};

export default HeadLayout;
