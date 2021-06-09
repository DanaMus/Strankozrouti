import React from 'react';
import { BookList } from '../../components/BookList';
import './style.css';

const BookListPage = () => {
  return (
    <>
    <div className="booklist__wrap">
    <h1>Přečtené knihy</h1>
    <div className="booklist__description">
    <img src="/assets/violet.svg"></img>
    <p>Tady najdeš přehled tvých přečtených knížek. Po rozkliknutí se ti zobrazí detail. Záznam si také můžeš vytisknout a odevzdat ve škole.</p>
      <BookList />
      </div>
      </div>
    </>
  );
};

export default BookListPage;
