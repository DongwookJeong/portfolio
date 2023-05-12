import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import Home from "./pages/Home";
import Contect from "./pages/Contect";
import HeadLayout from "./HeadLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<HeadLayout />}>
        <Route index element={<Home />} />
        <Route path="/abouts/:username" element={<About />} />
        <Route path="/contect" element={<Contect />} />
      </Route>
    </Routes>
  );
};

export default App;
