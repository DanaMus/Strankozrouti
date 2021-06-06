import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, ButtonGroup, TextField } from '@material-ui/core';
import { db } from '../../db';
/* import firebase from 'firebase/app'; */
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const validationSchema = yup.object({
  bookName: yup.string().required('Název knížky musíš vyplnit!'),
  authorName: yup.string().required('Jméno autora musíš vyplnit!'),
  pages: yup.string().required('Prosím, nakrm nás!'),
  date: yup.date().required('Zadej datum, kdy jsi knížku dočetl!'),
});

const DetailForm = () => {
  const formik = useFormik({
    initialValues: {
      bookName: '',
      authorName: '',
      pages: '',
      genre: '',
      rating: '',
      date: '',
      content: '',
      characters: '',
      motto: '',
      recommendation: '',
      optional: '',
    },
    onSubmit: (values) =>
      db.collection('BookList').add({
        bookName: values.bookName,
        authorName: values.authorName,
        pages: values.pages,
        date: values.date,
        genre: values.genre,
        rating: values.rating,
        characters: values.characters,
        content: values.content,
        motto: values.motto,
        recommendation: values.recommendation,
        optional: values.optional,
      }),
    /* date: firebase.firestore.FieldValue.serverTimestamp() */
    /* console.log(JSON.stringify(values)), */
    validationSchema: validationSchema,
  });
  /* const myPrint = (form) => {
    const printdata = document.querySelector('form');
    const newwin = window.open('');
    newwin.document.write(printdata.outerHTML);
    newwin.print();
    newwin.close();
  }; */
  
  const genres = [
    'beletrie',
    'sci-fi',
    'komiks',
    'humor',
    'dobrodružné',
    'vzdělávací',
    'poezie',
    'fantasy',
  ];

  const rating = ['😞', '😏', '😐', '😊', '🤩'];

  return (
    <div className="container">
      <form
        className="form__container"
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
      >
        <img
          src="../../assets/logo.svg"
          alt="logo Stránkožroutů"
          className="form__logo"
        />
        <img
          src="../../assets/monsterleft.svg"
          alt="Stránkožrout"
          className="form__img"
        />
        <h2>Základní informace:</h2>
        <TextField
          id="bookName"
          name="bookName"
          label="Název knihy"
          margin="normal"
          value={formik.values.bookName}
          onChange={formik.handleChange}
          error={formik.touched.bookName && Boolean(formik.errors.bookName)}
          helperText={formik.touched.bookName && formik.errors.bookName}
        />
        <TextField
          id="authorName"
          name="authorName"
          label="Autor knihy"
          margin="normal"
          value={formik.values.authorName}
          onChange={formik.handleChange}
          error={formik.touched.authorName && Boolean(formik.errors.authorName)}
          helperText={formik.touched.authorName && formik.errors.authorName}
        />
        <TextField
          id="pages"
          name="pages"
          label="Počet stran"
          margin="normal"
          style={{ width: '50%' }}
          value={formik.values.pages}
          onChange={formik.handleChange}
          error={formik.touched.pages && Boolean(formik.errors.pages)}
          helperText={formik.touched.pages && formik.errors.pages}
        />
        {/* <Button onClick={window.print} variant="outlined">
          Vytisknout
        </Button> */}
        <FormControl
          style={{ width: '50%', marginTop: '1rem', marginBottom: '0.5rem' }}
        >
          <InputLabel>Žánr</InputLabel>
          <Select
            id="genre"
            name="genre"
            value={formik.values.genre}
            onChange={formik.handleChange}
          >
            {genres.map((genre) => (
              <MenuItem
                name={genre}
                key={genre}
                value={genre}
                onChange={formik.handleChange}
              >
                {genre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          style={{ width: '50%', marginTop: '1rem', marginBottom: '0.5rem' }}
        >
          <InputLabel>Hodnocení</InputLabel>
          <Select
            id="rating"
            name="rating"
            value={formik.values.rating}
            onChange={formik.handleChange}
          >
            {rating.map((rate) => (
              <MenuItem
                name={rate}
                key={rate}
                value={rate}
                onChange={formik.handleChange}
              >
                {rate}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="date"
          name="date"
          label="Datum dočtení"
          type="date"
          margin="normal"
          style={{ width: '50%' }}
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className="form__button--short">
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="secondary"
          >
            Uložit stručný záznam
          </Button>
        </div>
        <h2>Podrobnosti:</h2>
        <TextField
          id="content"
          name="content"
          label="Obsah knížky"
          margin="normal"
          variant="outlined"
          multiline
          rows={5}
          rowsMax={100}
          value={formik.values.content}
          onChange={formik.handleChange}
        />
        <TextField
          id="characters"
          name="characters"
          label="Hlavní postavy a jejich vlastnosti"
          margin="normal"
          multiline
          rows={1}
          rowsMax={100}
          value={formik.values.characters}
          onChange={formik.handleChange}
        />
        <TextField
          id="motto"
          name="motto"
          label="Zajímavá myšlenka, citát"
          margin="normal"
          multiline
          rows={1}
          rowsMax={100}
          value={formik.values.motto}
          onChange={formik.handleChange}
        />
        <TextField
          id="recommendation"
          name="recommendation"
          label="Doporučení kamarádovi"
          margin="normal"
          multiline
          rows={1}
          rowsMax={100}
          value={formik.values.recommendation}
          onChange={formik.handleChange}
        />
        <TextField
          id="optional"
          name="optional"
          label="Ostatní"
          margin="normal"
          multiline
          rows={1}
          rowsMax={100}
          value={formik.values.optional}
          onChange={formik.handleChange}
        />
        <div className="form__button--full">
          <Button
            size="large"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Uložit záznam
          </Button>
        </div>
        <div className="form__button--delete">
          <Button size="large" variant="outlined" color="primary" type="reset">
            Smazat
          </Button>
        </div>
        {/* <Button
            onClick={
              window.print */}
        {/* } /* {myPrint} */
        /* {printJS('docs/printjs.pdf')} */
        /* {printJS({
              printable: 'printJS-form',
              type: 'html',
              scanStyles: true,
              css: 'style.css',
            })} */}
        {/* >
            Vytisknout
          </Button> */}
        {/*    </ButtonGroup> */}
      </form>
    </div>
  );
};

export default DetailForm;
