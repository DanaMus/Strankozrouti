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
    <>
      <h3>ID knížky: {id}</h3>
      <h3>{bookDetail.bookName}</h3>
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
    </>
  );
};

export default DetailBook;
