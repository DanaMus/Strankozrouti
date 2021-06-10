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
      <div className="statistics__flex">
        <div className="statistics__pagescount">
          <p>Celkem jsme snědli už {pagesCount} stran!</p>
          <img
            className="violet"
            src="../../assets/violet.svg"
            alt="monster"
          ></img>
        </div>
        <div className="statistics__pagescount">
          <p>Za posledních 30 dní jsme snědli {pagesCountLastMonth} stránek.</p>
          <img
            className="purple"
            src="../../assets/purple.svg"
            alt="monster"
          ></img>
        </div>
        <div className="statistics__bookscount">
          <p>Počet snědených knížek celkem: {booksCount}</p>
          <img
            className="magenta"
            src="../../assets/magenta.svg"
            alt="monster"
          ></img>
        </div>
        <div className="statistics__bookscount">
          <p>
            Počet snědených knížek za posledních 30 dní: {booksCountLastMonth}
          </p>
          <img className="blue" src="../../assets/blue.svg" alt="monster"></img>
        </div>
      </div>
      <div className="statistics__aside">
        <div className="statistics__motto">
          <h4>
            {randomMotto}
            <br />
            (z knihy {randomMottoBook})
          </h4>
          <img
            className="green"
            src="../../assets/green.svg"
            alt="monster"
          ></img>
        </div>
        <div className="statistics__reminder">
          <h4 className="statistics__reminder-heading">Nezapomeň!</h4>
          <p>{randomTodo}</p>
        </div>
        {/* <h3 className="slogan">
        Přečetl jsi další knížku? Stránkožrout ji chce mít v bříšku!
      </h3> */}
      </div>
    </div>
  );
};

export default StatisticsPage;
