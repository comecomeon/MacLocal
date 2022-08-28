import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../Body/About/About';
import Test from '../Body/Test/Test';
import Port from '../Body/Port/Port';

function Routing() {
  return (
    <div>
      <Routes>
          <Route
            path='/about'
            element={<About/>}
          />
          <Route
            path='/test'
            element={<Test/>}
          />
          <Route
            path='/port'
            element={<Port/>}
          />
        </Routes>
    </div>
  )
}

export default Routing;