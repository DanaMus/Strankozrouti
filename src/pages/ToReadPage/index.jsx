import React from 'react';
import './style.css';
import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ToRead from '../../components/ToRead/ToRead';
import { db } from '../../db';

const validationSchema = yup.object({
  toread: yup.string().required('Prosím vyplň název knížky!'),
});

const ToReadPage = () => {
  const formik = useFormik({
    initialValues: {
      toread: '',
    },
    onSubmit: (values) =>
      db.collection('ToRead').add({
        toRead: values.toread,
      }),

    /* console.log(JSON.stringify(values)), */
    validationSchema: validationSchema,
  });
  return (
    <>
      <div className="toread__container">
        <div className="toread__text">
          <p>
            Máš povinnou četbu ze školy? Dostal jsi nějaký tip na knížku? Čekáš
            na pokračování své oblíbené knihy?
          </p>
          <p>
            Sem si můžeš zapsat knihy, které se chystáš číst. Po jejich přečtení
            si můžeš knihu v seznamu odškrtnout. Ještě lepší bude, když si ji
            rovnou zapíšeš do deníčku a nakrmíš tak Stránkožrouty.
          </p>
          <p>
            Nakoukni do seznamu před návštěvou knihovny nebo třeba když se tě
            příbuzní ptají, co by sis přál k narozeninám. Příjemné čtení!
          </p>
        </div>
        <form className="toread__form" onSubmit={formik.handleSubmit}>
          <TextField
            id="toread"
            name="toread"
            label="Jméno knihy, autor, poznámky"
            margin="normal"
            style={{ width: '100%' }}
            variant="outlined"
            multiline
            rows={1}
            rowsMax={100}
            value={formik.values.toread}
            onChange={formik.handleChange}
            error={formik.touched.toread && Boolean(formik.errors.toread)}
            helperText={formik.touched.toread && formik.errors.toread}
          ></TextField>
          <Button
            className="toread__add"
            size="large"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Přidat knížku
          </Button>
        </form>
        <div className="toread__books">
          <ToRead />
        </div>
      </div>
    </>
  );
};

export default ToReadPage;
