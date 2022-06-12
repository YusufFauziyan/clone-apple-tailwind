// import components
import React from "react";
import Content from './pages/Content'
import Home from './pages/Home'
import Navbar from "./components/Navbar";
import PhoneType from "./components/PhoneType"

const App = () => {
  return (
   <>
      <Navbar />
      <PhoneType />
      <Home />
   </>
  );
}

export default App;