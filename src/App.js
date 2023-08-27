import "./App.scss";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/HomePage/About";
import FilterBook from "./page/FilterBook";
import NewBooks from "./components/HomePage/NewBooks";
import List from "./components/List";
import End from "./components/End/basked";
import BookDetails from "./page/DetailPage";
import Basket from "./components/Basket";

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
          <Route path="/book/details/:bookId" element={<BookDetails />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
