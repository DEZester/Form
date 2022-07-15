import { createTheme } from '@mui/material/styles';
const themeGreen = createTheme({
  palette: {
    primary: {
      main: '#138e93',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export default themeGreen;
