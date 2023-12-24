import React from "react";
import "./App.css"
import Product from "./Component/Product";
import Home from "./Component/Home";
function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <Product/>
      <Home/>
    </div>
  );
}

export default App;
