import "./App.scss";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Hero from "./components/HomePage/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroTwo from "./components/HomePage/HeroTwo";
import HeroT from "./components/HomePage/HeroT";
import Books from "./components/HomePage/Books";
import About from "./components/HomePage/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <HeroTwo/>
        <HeroT/>
        <Books/>
        <About/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
