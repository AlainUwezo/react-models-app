import { FunctionComponent } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Gallery from "./Gallery";
import About from "./About";
import Casting from "./Casting";

const App: FunctionComponent = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/casting" element={<Casting />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
