// import components
import React from "react";
import Content from './pages/Content'
import Home from './pages/Home'
import Detail from './pages/DetailProduct'

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
   <>
      <Routes>
        <Route exact path='/' element={<Content />} />
        <Route exact path='/iphone' element={<Home />} />
        <Route exact path='/iphone-se' element={<Detail />} />
      </Routes>
   </>
  );
}

export default App;