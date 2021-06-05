import React, { useEffect, useState } from 'react';
import { db } from '../../db';

const ToRead = () => {
  const [toRead, setToRead] = useState([]);
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
        <button className='checked'>Splněno</button>
        <button className='delete' onClick={() => {
          const confirmation = confirm('Opravdu chceš záznam smazat?');
          {confirmation ? db.collection('ToRead').doc(book.id).delete() : null}
          
        }}>Smazat</button>
        </li>
        
      ))}
    </ul>
  );
};

export default ToRead;