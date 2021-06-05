import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../db';
import './style.css';

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
      <h3>Autor: {bookDetail.authorName}</h3>
      <h3>Název: {bookDetail.bookName}</h3>
      <p>Date: {bookDetail.date}</p>
      <p>Počet stránek: {bookDetail.pages}</p>
      <p>Hodnocení: {bookDetail.rating}</p>
      <p>Žánr: {bookDetail.genre}</p>
      <p>Hlavní postavy: {bookDetail.characters}</p>
      <p>Obsah: {bookDetail.content}</p>
      <p>Motto: {bookDetail.motto}</p>
      <p>Doporučení: {bookDetail.recommendation}</p>
      <p>Ostatní: {bookDetail.optional}</p>
      <button onClick={window.print}>Vytisknout</button>
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
