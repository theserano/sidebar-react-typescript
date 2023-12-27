import "./App.css";
import Menu from "./menu/Menu";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";



const list = ["About", "Portfolio", "Services", "Contact"];

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route  path="/Services" element={<Services />}/>
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <div className="App">
        <Menu list={list} />
      </div>
    </Router>
  );
}

export default App;


