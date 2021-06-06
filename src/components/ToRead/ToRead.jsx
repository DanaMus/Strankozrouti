import React, { useEffect, useState } from 'react';
import { db } from '../../db';
import './style.css';

const ToRead = () => {
  const [toRead, setToRead] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const uklid = db.collection('ToRead').onSnapshot((snapshot) => {
      setToRead(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        }),
      );
    });
    return uklid;
  }, []);
  return (
    <ul>
      {toRead.map((book) => (
        <div className="toread__box" key={book.id}>
          <div className="toread__box1">
            <button
              id={book.id}
              className={
                book.checked
                  ? 'toread__check toread__check--checked'
                  : 'toread__check'
              }
              onClick={() => {
                db.collection('ToRead')
                  .doc(book.id)
                  .update({ checked: !book.checked });
              }}
            >
              Splněno
            </button>
            <li key={book.id}>{book.toRead} </li>
          </div>
          <div className="toread__box2">
            <button
              className="delete"
              onClick={() => {
                const confirmation = confirm('Opravdu chceš záznam smazat?');
                {
                  confirmation
                    ? db.collection('ToRead').doc(book.id).delete()
                    : null;
                }
              }}
            >
              Smazat
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default ToRead;
