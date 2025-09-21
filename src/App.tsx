import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/tachotech">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='contakt' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

