import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Routes from "./Routes";
// import { Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes />        
      <Footer />
    </React.Fragment>
  );
}

export default App;