import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './Layout';
import ScrollToTop from './Components/ScrollToTop';


const MyRouter = () => {
  return (
   
      <Router>
      <ScrollToTop />
    
        <Routes>
          <Route path="/" element={<Layout />}>
          </Route>
        </Routes>
      </Router>

  );
}

export default MyRouter;
