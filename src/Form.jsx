import React from 'react';
import { Formik } from 'formik';
import { Button, TextField, IconButton, ThemeProvider } from '@mui/material';

import AOS from 'aos';
import 'aos/dist/aos.css';
import themeGreen from './themes';

AOS.init();

const Form = ({ showForm }) => (
  <div className="form" data-aos="flip-up" data-aos-duration="1300">
    <h1>Registration</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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
