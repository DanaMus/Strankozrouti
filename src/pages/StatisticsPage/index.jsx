import React, { useEffect, useState } from 'react';
import './style.css';
import { db } from '../../db';

const StatisticsPage = () => {
  const [booksCount, setBooksCount] = useState([]);
  const [pagesCount, setPagesCount] = useState([]);
  const [pagesCountLastMonth, setPagesCountLastMonth] = useState([]);
  let localbooksCounter = 0;
  let localPagesCounter = 0;
  let localPagesLastMonthCounter = 0;
  let now = new Date();
  useEffect(() => {
    const uklid = db.collection('BookList').onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        localPagesCounter += Number(doc.data().pages);
        if ((now - Date.parse(doc.data().date)) / (1000 * 3600 * 24) < 30) {
          localPagesLastMonthCounter += Number(doc.data().pages);
        }
        localbooksCounter++;
      });

      setBooksCount(localbooksCounter);
      setPagesCount(localPagesCounter);
      setPagesCountLastMonth(localPagesLastMonthCounter);
    });
    return uklid;
  }, []);

  return (
    <div className="statistics__container">
      <p>Počet přečtených stran celkem: {pagesCount}</p>
      <p>Počet přečtených stran za měsíc: {pagesCountLastMonth}</p>
      <p>Počet přečtených knih celkem: {booksCount}</p>
      <p>Počet přečtených knih za měsíc</p>
      <p>Nejoblíbenější knihy - třeba 5</p>
      <p>Nejčtenější žánr</p>
      <p>Nejčtenější autor</p>
      <p>Před rokem jsi četl</p>
      <p>Naplánovaná četba</p>
    </div>
  );
};

export default StatisticsPage;
