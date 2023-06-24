import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, MainApp, Register } from '../../pages';

const RoutesDom = () => {

  let pathName = window.location.pathname;

  if (pathName !== '/login' && pathName !== '/register') {
    return (
      <Router>
          <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              {/* <Route path='/' element={<MainApp />} /> */}
          </Routes>
           {/* Main Page */}
          <MainApp/>
          
      </Router>
    );  
  } else {
    return (
      <Router>
          <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
          </Routes>
      </Router>
    );
  }

}

export default RoutesDom;