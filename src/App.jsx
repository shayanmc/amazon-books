import { Fragment } from "react";
import Books from "./components/Books";
import { bookslist } from "./components/bookslist.js";

function App() {
  return (
    <Fragment>
      <h1>Amazon Books📖</h1>
      <section className="booklist">
        {bookslist.map((book) => {
          return <Books {...book} key={book.id} />;
        })}
      </section>
    </Fragment>
  );
}

export default App;
