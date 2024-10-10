import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './Layout';
import Map from './Components/Map';
import ScrollToTop from './Components/ScrollToTop';


const MyRouter = () => {
  return (
   
      <Router>
      <ScrollToTop />
    
        <Routes>

          <Route path="/"  element={<Layout />}>
          <Route path="/" index element={<Map />}></Route>
          </Route>
        </Routes>
      </Router>

  );
}

export default MyRouter;
