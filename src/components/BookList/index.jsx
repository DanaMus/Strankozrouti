import React, { useEffect, useState } from 'react';
import { db } from '../../db';
import { Link } from 'react-router-dom';

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const uklid = db.collection('BookList').onSnapshot((snapshot) => {
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
    
    <div className="booklist__container">
      
      {books.map((book) => (
        <div key={book.id} className="booklist">
        <a key={book.id}>
          <Link  className="book" to={`/prectene/${book.id}`}>{book.bookName}</Link>
          </a>
        </div>
      ))}
      
      </div>
  );
};

export default BookList;
