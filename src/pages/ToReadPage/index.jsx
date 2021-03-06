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
    onSubmit: (values, { resetForm }) => {
      db.collection('ToRead').add({
        toRead: values.toread,
      });
      resetForm();
    },
    /* console.log(JSON.stringify(values)), */
    validationSchema: validationSchema,
  });
  return (
    <>
      <div className="toread__container">
        <div className="toread__text">
          <p>
            Máš povinnou četbu ze školy? Dostal jsi nějaký skvělý tip? Čekáš na
            pokračování své oblíbené knihy?
          </p>
          <p>
            Sem si můžeš zapsat knížky, které se chystáš číst. Po přečtení si je
            můžeš v seznamu v pravém sloupečku odškrtnout nebo smazat. Ještě
            lepší bude, když si knížku rovnou zapíšeš do deníčku a nakrmíš tak
            Stránkožrouty.
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
            rowsMax={5}
            inputProps={{ maxLength: 55 }}
            value={formik.values.toread}
            onChange={formik.handleChange}
            error={formik.touched.toread && Boolean(formik.errors.toread)}
            helperText={formik.touched.toread && formik.errors.toread}
          ></TextField>
          <Button
            className="toread__add"
            size="large"
            variant="contained"
            color="primary"
            type="submit"
            style={{ width: '100%' }}
          >
            Přidat
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
