import React, { useState } from 'react';
import './style.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, ButtonGroup, TextField } from '@material-ui/core';

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
      date: '',
      content: '',
      characters: '',
      motto: '',
      recommendation: '',
    },
    onSubmit: (values) => console.log(JSON.stringify(values)),
    validationSchema: validationSchema,
  });
  /* const myPrint = (form) => {
    const printdata = document.querySelector('form');
    const newwin = window.open('');
    newwin.document.write(printdata.outerHTML);
    newwin.print();
    newwin.close();
  }; */

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
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
        <h1>Základní informace:</h1>
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
          style={{ width: '45%' }}
          value={formik.values.pages}
          onChange={formik.handleChange}
          error={formik.touched.pages && Boolean(formik.errors.pages)}
          helperText={formik.touched.pages && formik.errors.pages}
        />
        {/* <Button type="submit" variant="outlined">
          Uložit
        </Button> */}
        {/* <Button onClick={window.print} variant="outlined">
          Vytisknout
        </Button> */}
        <TextField
          id="date"
          name="date"
          label="Datum dočtení"
          type="date"
          margin="normal"
          style={{ width: '45%' }}
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <h1>Podrobnosti:</h1>
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
          rows={3}
          rowsMax={20}
          value={formik.values.characters}
          onChange={formik.handleChange}
        />
        <TextField
          id="motto"
          name="motto"
          label="Zajímavá myšlenka, citát"
          margin="normal"
          multiline
          rows={3}
          rowsMax={30}
          value={formik.values.motto}
          onChange={formik.handleChange}
        />
        <TextField
          id="recommendation"
          name="recommendation"
          label="Proč bych knihu doporučil (nebo nedoporučil) kamarádovi"
          margin="normal"
          multiline
          rows={3}
          rowsMax={30}
          value={formik.values.recommendation}
          onChange={formik.handleChange}
        />
        <ButtonGroup
          className="buttongroup"
          color="primary"
          margin="normal"
          style={{ marginTop: '50px' }}
          aria-label="outlined primary button group"
        >
          <Button type="submit">Nakrmit</Button>
          <Button type="reset">Smazat</Button>
          <Button
            onClick={
              window.print
            } /* {myPrint} */ /* {printJS('docs/printjs.pdf')} */ /* {printJS({
              printable: 'printJS-form',
              type: 'html',
              scanStyles: true,
              css: 'style.css',
            })} */
          >
            Vytisknout
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default DetailForm;
