import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contect from "./pages/Contect";
import HeadLayout from "./HeadLayout";
import Project from "./pages/Project";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Routes>
      <Route element={<HeadLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
      </Route>
    </Routes>
  );
};

export default App;
