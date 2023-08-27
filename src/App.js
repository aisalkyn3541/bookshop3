import "./App.scss";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/HomePage/About";
import FilterBook from "./page/FilterBook";
import NewBooks from "./components/HomePage/NewBooks";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/books" element={<List />} />
          <Route path="/newbooks" element={<NewBooks />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
