import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Books = () => {
  const [book, setBook] = useState([]);
  const getBooks = () => {
    axios(`https://www.googleapis.com/books/v1/volumes?q=javascript`).then(
      (res) => setBook(res.data.items)
    );
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div id="books">
      <div className="container">
        <div className="books">
          <div className="books__title">
            <h1>Books</h1>
            <Link to={"/books"}>View all</Link>
          </div>
          <div className="books__img">
            {book.map((el) => (
              <div className="books__img-block" key={el.id}>
                <Link to={`/book/details/${el.id}`}>
                  <img
                    src={el.volumeInfo.imageLinks?.thumbnail}
                    alt={el.volumeInfo.title}
                  />
                </Link>{" "}
                <p>{el.volumeInfo.title}</p>
                <span>{el.volumeInfo.authors}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
