import React, { useState } from 'react';
import Form from './Form';
import { Button, ThemeProvider } from '@mui/material';
import themeGreen from './themes';

const App = () => {
  const [isHiden, setHiden] = useState(false);
  const showForm = () => {
    setHiden(!isHiden);
  };
  return (
    <div className="container">
      {isHiden ? (
        <Form showForm={showForm} />
      ) : (
        <>
          <ThemeProvider theme={themeGreen}>
            <Button variant="contained" onClick={showForm} size="large" color="primary">
              LogIn
            </Button>
          </ThemeProvider>
        </>
      )}
    </div>
  );
};

export default App;
