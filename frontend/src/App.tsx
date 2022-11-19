import React from 'react';
import './App.css';
import Router from './router/router';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";

function App() {
  return (<React.Fragment>
    <CssBaseline/>
    <ThemeProvider theme={theme}> <Router/>
    </ThemeProvider>
  </React.Fragment>)
}

export default App;
