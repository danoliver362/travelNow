import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Destinos from "./Destinos";
import Clima from "./Clima";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/clima" element={<Clima />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;