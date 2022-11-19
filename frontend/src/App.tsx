import React from "react";
import "./App.css";
import Router from "./router/router";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header></Header>
      <Router />
    </React.Fragment>
  );
}

export default App;
