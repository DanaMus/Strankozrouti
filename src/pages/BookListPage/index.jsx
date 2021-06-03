import React from 'react';
import { BookList } from '../../components/BookList';
import './style.css';

const BookListPage = () => {
  return (
    <>
    <div className='booklist_container'>
      <h1>Seznam přečtených knih</h1>
      <BookList />
    </div>
    </>
  );
};

export default BookListPage;
