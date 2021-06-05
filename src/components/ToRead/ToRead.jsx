import React, { useEffect, useState } from 'react';
import { db } from '../../db';
import './style.css';

const ToRead = () => {
  const [toRead, setToRead] = useState([]);
  // const [checked, setChecked] = useState(false);

  // const handleClick = () => {
  //   setChecked(!checked)
  //   }

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
        <li key={book.id}>{book.toRead}
        
        <button id={book.id} className={book.checked ? 'toread--checked' : 'toread'} onClick={() => {
          db.collection('ToRead').doc(book.id).update({checked : !book.checked});
        }}>Splněno</button>
        
        <button className='delete' onClick={() => {
          const confirmation = confirm('Opravdu chceš záznam smazat?');
          {confirmation ? db.collection('ToRead').doc(book.id).delete() : null};

        }}>Smazat</button>
        </li>
        
      ))}
    </ul>
  );
};

export default ToRead;