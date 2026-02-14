import { Fragment } from "react";
import Books from "./components/Books";
import { bookslist } from "./components/bookslist.js";
import './App.css'

function App() {
  return (
    <Fragment>
      <h1 className="title">Amazon Books📖</h1>
      <section className="booklist">
        {bookslist.map((book) => {
          return <Books {...book} key={book.id} />;
        })}
      </section>
    </Fragment>
  );
}

export default App;
