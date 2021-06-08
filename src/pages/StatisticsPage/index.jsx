import React, { useEffect, useState } from 'react';
import './style.css';
import { db } from '../../db';

const StatisticsPage = () => {
  const [booksCount, setBooksCount] = useState([]);
  const [pagesCount, setPagesCount] = useState([]);
  const [pagesCountLastMonth, setPagesCountLastMonth] = useState([]);
  const [booksCountLastMonth, setBooksCountLastMonth] = useState([]);
  const [favouriteBooks, setFavouriteBooks] = useState([]);
  const [favouriteGenre, setFavouriteGenre] = useState([]);
  let localbooksCounter = 0;
  let localPagesCounter = 0;
  let localPagesLastMonthCounter = 0;
  let localBooksLastMonthCounter = 0;
  let now = new Date();

  useEffect(() => {
    const uklid = db.collection('BookList').onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        /* počet stran celkem */
        localPagesCounter += Number(doc.data().pages);
        /* počet stran za 30 dní */
        if ((now - Date.parse(doc.data().date)) / (1000 * 3600 * 24) <= 30) {
          localPagesLastMonthCounter += Number(doc.data().pages);
        }
        /* počet knih celkem */
        localbooksCounter++;
        /* počet knih za 30 dní */
        if ((now - Date.parse(doc.data().date)) / (1000 * 3600 * 24) <= 30) {
          localBooksLastMonthCounter++;
        }
      });

      setBooksCount(localbooksCounter);
      setPagesCount(localPagesCounter);
      setPagesCountLastMonth(localPagesLastMonthCounter);
      setBooksCountLastMonth(localBooksLastMonthCounter);
    });
    return uklid;
  }, []);

  return (
    <div className="statistics__container">
      <p>Přečetl jsi další knížku? Stránkožrout ji chce mít v bříšku!</p>
      <p>Počet snědených stran celkem: {pagesCount}</p>
      <p>Počet snědených stran za posledních 30 dní: {pagesCountLastMonth}</p>
      <p>Počet snědených knih celkem: {booksCount}</p>
      <p>Počet snědených knih za posledních 30 dní: {booksCountLastMonth}</p>
      {/* <p>Nejoblíbenější knihy - třeba 5</p>
      <p>Nejčtenější žánr</p>
      <p>Nejčtenější autor</p>
      <p>Před rokem jsi četl</p>
      <p>Naplánovaná četba</p> */}
    </div>
  );
};

export default StatisticsPage;
