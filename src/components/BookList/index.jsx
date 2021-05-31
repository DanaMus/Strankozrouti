import React, { useEffect, useState } from 'react';
import { db } from '../../db';

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
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.bookName}</li>
      ))}
    </ul>
  );
};

export default BookList;
