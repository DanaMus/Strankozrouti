import React from 'react';
import { BookList } from '../../components/BookList';
import './style.css';

const BookListPage = () => {
  return (
    <>
      <h1>Seznam přečtených knih</h1>
      <BookList />
    </>
  );
};

export default BookListPage;
