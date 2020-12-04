import React from 'react';
//import { Router } from 'react-router';
import{BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Cover from './Components/Cover';
//import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Cover />
     
    </Router>
  );
}

export default App;
