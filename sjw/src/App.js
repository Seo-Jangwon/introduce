import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import WhatCanIDo from "./components/WhatCanIDo/WhatCanIDo";
import Wish from "./components/Wish/Wish";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/whatCanIDo" element={<WhatCanIDo />} />
            <Route path="/wish" element={<Wish />} />
          </Routes>
        </div>
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
