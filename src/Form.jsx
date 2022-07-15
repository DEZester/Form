import React from 'react';
import { Formik } from 'formik';
import { Button, TextField, IconButton, ThemeProvider } from '@mui/material';

import AOS from 'aos';
import 'aos/dist/aos.css';
import themeGreen from './themes';

AOS.init();

const Form = ({ showForm }) => (
  <div className="form" data-aos="flip-up">
    <h1>Registration</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      // validate={values => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = 'Required';
      //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      //     errors.email = 'Invalid email address';
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className="form-menu" onSubmit={handleSubmit}>
          <ThemeProvider theme={themeGreen}>
            <TextField
              sx={{ m: '10px' }}
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <TextField
              sx={{ m: '10px' }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <div className="buttonsContainer">
              <Button sx={{ m: '10px' }} onClick={showForm} variant="contained">
                Cancel
              </Button>
              <Button sx={{ m: '10px' }} type="submit" disabled={isSubmitting} variant="contained">
                Submit
              </Button>
            </div>
          </ThemeProvider>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
