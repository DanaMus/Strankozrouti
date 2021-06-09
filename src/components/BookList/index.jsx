import React, { useEffect, useState } from 'react';
import { db } from '../../db';
import { Link } from 'react-router-dom';
import './style.css';

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const uklid = db
      .collection('BookList')
      .orderBy('date', 'desc')
      .onSnapshot((snapshot) => {
        setBooks(
          snapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
      });
    return uklid;
  }, []);
  return (
    <div className="booklist__wrap">
    <h1>Přečtené knihy</h1>
    <div className="booklist__description">
    <img src="/assets/purple.svg"></img>
    <p>Tady najdeš přehled tvých přečtených knížek. Po rozkliknutí se ti zobrazí detail. Záznam si také můžeš vytisknout a odevzdat ve škole.</p>
    </div>
    <div className="booklist__container">
      {books.map((book) => (
        <div key={book.id} className="booklist">
          {/* <p key={book.id}> */}
          <Link className="book" to={`/prectene/${book.id}`}>
            {book.bookName}
          </Link>
          {/*  </p> */}
        </div>
      ))}
    </div>
    </div>
  );
};

export default BookList;
