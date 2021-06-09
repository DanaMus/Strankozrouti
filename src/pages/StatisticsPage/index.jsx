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
  const [randomMotto, setRandomMotto] = useState([]);
  const [randomMottoBook, setRandomMottoBook] = useState([]);
  const [randomTodo, setRandomTodo] = useState([]);
  let localbooksCounter = 0;
  let localPagesCounter = 0;
  let localPagesLastMonthCounter = 0;
  let localBooksLastMonthCounter = 0;
  let now = new Date();
  let randommottoid = -1;

  useEffect(() => {
    const dbConnect1 = db.collection('BookList').onSnapshot((snapshot) => {
      let arrayData;
      arrayData = snapshot.docs.map((doc) => doc.data());

      arrayData.forEach((doc) => {
        /* počet stran celkem */
        localPagesCounter += Number(doc.pages);
        /* počet stran za 30 dní */
        if ((now - Date.parse(doc.date)) / (1000 * 3600 * 24) <= 30) {
          localPagesLastMonthCounter += Number(doc.pages);
          localBooksLastMonthCounter++;
        }
        /* počet knih celkem */
        localbooksCounter++;
        /* počet knih za 30 dní */
      });

      let hasMotto = arrayData.filter((h) => h.motto !== '');
      console.log(hasMotto);
      if (hasMotto.length > 0) {
        let randommottoid = Math.floor(Math.random() * hasMotto.length);
        console.log(randommottoid);
        setRandomMotto(hasMotto[randommottoid].motto);
        setRandomMottoBook(hasMotto[randommottoid].bookName);
      }

      console.log(arrayData);
      setBooksCount(localbooksCounter);
      setPagesCount(localPagesCounter);
      setPagesCountLastMonth(localPagesLastMonthCounter);
      setBooksCountLastMonth(localBooksLastMonthCounter);
    });

    const dbConnect2 = db.collection('ToRead').onSnapshot((snapshot) => {
      let arrayData;
      arrayData = snapshot.docs.map((doc) => doc.data());

      let notChecked = arrayData.filter((todo) => !todo.checked);
      console.log(notChecked);
      if (notChecked.length > 0) {
        let randomnotcheckedid = Math.floor(Math.random() * notChecked.length);
        setRandomTodo(notChecked[randomnotcheckedid].toRead);
      }
    });

    return dbConnect1, dbConnect2;
  }, []);

  return (
    <div className="statistics__container">
      <p>Přečetl jsi další knížku? Stránkožrout ji chce mít v bříšku!</p>
      <div className="statistics__flex">
        <div className="statistics__pagescount">
          <p>Počet snědených stran celkem: {pagesCount}</p>
          <img
            className="violet"
            src="../../assets/violet.svg"
            alt="monster"
          ></img>
        </div>
        <div className="statistics__pagescount">
          <p>
            Počet snědených stran za posledních 30 dní: {pagesCountLastMonth}
          </p>
          <img
            className="purple"
            src="../../assets/purple.svg"
            alt="monster"
          ></img>
        </div>
        <div className="statistics__bookscount">
          <p>Počet snědených knih celkem: {booksCount}</p>
          <img
            className="magenta"
            src="../../assets/magenta.svg"
            alt="monster"
          ></img>
        </div>
        <div className="statistics__bookscount">
          <p>
            Počet snědených knih za posledních 30 dní: {booksCountLastMonth}
          </p>
          <img className="blue" src="../../assets/blue.svg" alt="monster"></img>
        </div>
        <div className="statistics__motto">
          <h4>
            Náhodný citát: {randomMotto} (z knihy {randomMottoBook})
          </h4>
          <img
            className="green"
            src="../../assets/green.svg"
            alt="monster"
          ></img>
        </div>
        <div>
          <h3>Nezapomeň na:</h3>
          <p>{randomTodo}</p>
        </div>
        {/* <p>Nejoblíbenější knihy - třeba 5</p>
      <p>Nejčtenější žánr</p>
      <p>Nejčtenější autor</p>
      <p>Před rokem jsi četl</p>
      <p>Naplánovaná četba</p> */}
      </div>
    </div>
  );
};

export default StatisticsPage;
