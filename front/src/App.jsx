import { useState } from "react";
import Home from "./components/Main/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header></Header>
      <div className="flex-col items-center flex gap-8 pt-6 ">
        <Home></Home>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
