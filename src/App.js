// import components
import React from "react";
import Content from './pages/Content'
import Home from './pages/Home'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
   <>
      <Routes>
        <Route exact path='/' element={<Content />} />
        <Route exact path='/iphone' element={<Home />} />
      </Routes>
   </>
  );
}

export default App;