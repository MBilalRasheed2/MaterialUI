import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
// import Home from './components/Home'


import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home'
import LoginPage from './components/loginPage/LoginPage';
import SignUp from './components/signUp/SignUp';
import Checkout from './components/checkout/Checkout';


function App() {
  const lightTheme = createTheme({ palette: { mode: 'light', background: { default: '#f5f5f5', paper: '#fff' } } });

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'dark', background: '#f5f5f5'
  //   },

  // });
  return (
    <ThemeProvider theme={lightTheme}>
      <Home/>
      {/* <LoginPage/> */}
      {/* <SignUp/> */}

     {/* <Checkout/> */}
    </ThemeProvider>
  );
}
export default App;