import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import OurMenu from "./screens/OurMenu";
import History from "./screens/History";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurMenu" element={<OurMenu />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
