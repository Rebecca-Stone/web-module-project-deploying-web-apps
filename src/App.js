import React from "react";
import "./App.css";

// component imports
import Header from "./components/Header";
import Results from "./components/Results";
import Selections from "./components/Selections";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Results />
      <Selections />
      <Footer />
    </div>
  );
}

export default App;
