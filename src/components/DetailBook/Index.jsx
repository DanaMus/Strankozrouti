import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { db } from '../../db';
import './style.css';
import ReactToPrint from 'react-to-print';

export const DetailBook = () => {
  const { id } = useParams();
  const [bookDetail, setBookDetail] = useState('');

  useEffect(() => {
    const docRef = db.collection('BookList').doc(id);
    docRef.get().then((doc) => setBookDetail(doc.data()));
  }, []);
  /* const detailBook = db.collection('BookList').find((x) => x.id === id); */
  /* const detailBook = db.collection('BookList').doc({ id }); */
  /* const book = db.collection('BookList').find((x) => x.bookName === nazevKnihy) */ /*if (kodFilmu === "720753-v-siti") {
    return <>Speciální film</>;
  }*/
  return (
    <div className="book__container">
      {/* <h3>ID knížky: {id}</h3> */}
      <div className="singledetail__container">
        <h2 className="singledetail__heading--2">{bookDetail.authorName}</h2>
      </div>
      <div className="singledetail__container">
        <h1 className="singledetail__heading--1">{bookDetail.bookName}</h1>
      </div>
      <div className="singledetail__container">
        <div className="singledetail__name">Datum přečtení: </div>
        <div className="singledetail__item">{bookDetail.date}</div>
      </div>
      <div className="singledetail__container">
        <div className="singledetail__name">Počet stránek: </div>
        <div className="singledetail__item">{bookDetail.pages}</div>
      </div>
      {bookDetail.rating ? (
        <div className="singledetail__container">
          <div className="singledetail__name">Hodnocení: </div>
          <div className="singledetail__item">{bookDetail.rating}</div>
        </div>
      ) : null}
      {bookDetail.genre ? (
        <div className="singledetail__container">
          <div className="singledetail__name">Žánr: </div>
          <div className="singledetail__item">{bookDetail.genre}</div>
        </div>
      ) : null}
      {bookDetail.characters ? (
        <div className="singledetail__container">
          <div className="singledetail__name">Hlavní postavy: </div>
          <div className="singledetail__item">{bookDetail.characters}</div>
        </div>
      ) : null}
      {bookDetail.content ? (
        <div className="singledetail__container">
          <div className="singledetail__name">Obsah: </div>
          <div className="singledetail__item">{bookDetail.content}</div>
        </div>
      ) : null}
      {bookDetail.motto ? (
        <div className="singledetail__container">
          <div className="singledetail__name">Citát, zajímavá myšlenka: </div>
          <div className="singledetail__item">{bookDetail.motto}</div>
        </div>
      ) : null}
      {bookDetail.recommendation ? (
        <div className="singledetail__container">
          <div className="singledetail__name">Doporučení kamarádovi: </div>
          <div className="singledetail__item">{bookDetail.recommendation}</div>
        </div>
      ) : null}
      {bookDetail.optional ? (
        <div className="singledetail__container">
          <div className="singledetail__name">Další poznámky: </div>
          <div className="singledetail__item">{bookDetail.optional}</div>
        </div>
      ) : null}
      
      <button className="singledetail__print" onClick={window.print}>
        Vytisknout
      </button>

      <Link to="/prectene">
      <button className="back">Zpět</button>
        </Link>
      
      {/* <h2>{film.jmeno}</h2>
      <p>{film.obrazek}</p>
      <img src={film.obrazek} alt="" />
      <h3>Štítky</h3>
      <p>{film.stitky.join(", ")}</p>
      <h3>Režie</h3>
      <p>{film.reize}</p>
      <h3>Obsah</h3>
      <p>{film.obsah}</p> */}
    </div>
  );
};

export default DetailBook;
