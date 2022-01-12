import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import Info from './pages/info';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ChakraProvider} from '@chakra-ui/react'
import theme from './utils/theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />

        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

