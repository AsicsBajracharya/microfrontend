import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from './components/Header'
export default function App() {
  console.log('testing container push!!!!!')
  return (
    <div>
      <BrowserRouter>
      <Header />
      <MarketingApp />
      </BrowserRouter>
    </div>
  );
}
  