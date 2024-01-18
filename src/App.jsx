import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import MotherComponent from "./component/MotherComponent";
import Menu from "./screens/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MotherComponent />}>
          <Route path="/" element={<Home />} />
          <Route path="/OurMenu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;