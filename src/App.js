// App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import WhatCanIDo from "./components/WhatCanIDo/WhatCanIDo";
import Wish from "./components/Wish/Wish";

const basename = process.env.NODE_ENV === "production" ? "/introduce" : "";

function App() {
  return (
    <Router basename={basename}>
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
    </Router>
  );
}

export default App;
