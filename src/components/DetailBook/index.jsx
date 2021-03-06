import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { db } from '../../db';
import './style.css';

export const DetailBook = () => {
  const { id } = useParams();
  const [bookDetail, setBookDetail] = useState('');
  const [dateFormat, setDateFormat] = useState('');

  useEffect(() => {
    const docRef = db.collection('BookList').doc(id);
    docRef.get().then((doc) => {
      setBookDetail(doc.data());
      let dataDate = new Date(doc.data().date);
      setDateFormat(
        dataDate.getDate() +
          '.' +
          (dataDate.getMonth() + 1) +
          '.' +
          dataDate.getFullYear(),
      );
    });
  }, []);

  return (
    <>
      <div className="book__head"></div>
      <div className="book__container">
        
        <div className="singledetail__container">
          <h2 className="singledetail__heading--2">{bookDetail.authorName}</h2>
        </div>
        <div className="singledetail__container">
          <h1 className="singledetail__heading--1">{bookDetail.bookName}</h1>
        </div>
        <div className="singledetail__container">
          <div className="singledetail__name">Datum přečtení: </div>
          <div className="singledetail__item">{dateFormat}</div>
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
            <div className="singledetail__item">
              {bookDetail.recommendation}
            </div>
          </div>
        ) : null}
        {bookDetail.optional ? (
          <div className="singledetail__container">
            <div className="singledetail__name">Další poznámky: </div>
            <div className="singledetail__item">{bookDetail.optional}</div>
          </div>
        ) : null}

        <Link to="/prectene">
          <button className="singledetail__back">Zpět</button>
        </Link>

        <button className="singledetail__print" onClick={window.print}>
          Vytisknout
        </button>

        
      </div>
      <div className="book__footer"></div>
    </>
  );
};

export default DetailBook;
