import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contect from "./pages/Contect";
import HeadLayout from "./HeadLayout";
import Projects from "./pages/Projects";
import Flower from "./pages/Flower";
import Sisyphus from "./pages/Sisyphus";

const App = () => {
  return (
    <Routes>
      <Route element={<HeadLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/flower" element={<Flower />} />
        <Route path="/sisyphus" element={<Sisyphus />} />
      </Route>
    </Routes>
  );
};

export default App;
