// import components
import React from "react";
import Content from './pages/Content'
import Navbar from "./components/Navbar";
import PhoneType from "./components/PhoneType"

const App = () => {
  return (
   <>
      <Navbar />
      <PhoneType />
      <Content />
   </>
  );
}

export default App;